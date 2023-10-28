<template>
  <AppModal v-model="openDeleteModal">
    <vee-form>
      <span class="w-full flex justify-center items-center">
        <svg-icon
          type="mdi"
          :path="mdiAlertCircleOutline"
          class="w-20 h-20 text-red-700 mb-3"
        ></svg-icon>
      </span>
      <h1
        class="text-[24px] font-bold w-full text-center mb-[20px] text-color1"
      >
        {{ del_title }}
      </h1>
      <div class="flex justify-center items-center w-full gap-3">
        <VButton
          btn_type="danger"
          :isLoading="loading"
          type="button"
          class="mt-5 text-[18px] px-8"
          @click="confirm"
        >
          Delete
        </VButton>
        <VButton
          btn_type="primary"
          :isLoading="false"
          type="button"
          class="mt-5 px-8 text-[18px]"
          @click="closeDelModal"
        >
          Cancel
        </VButton>
      </div>
    </vee-form>
  </AppModal>
  <AppModal v-model="openEditModal">
    <h1 class="text-[24px] font-bold w-full text-center mb-[20px] text-color1">
      {{ title }}
    </h1>
    <vee-form
      :validation-schema="schema"
      :initial-values="forms"
      @submit="addStudent"
    >
      <VInput
        type="text"
        name="first_name"
        label="First Name"
        placeholder="Enter your name"
      ></VInput>
      <VInput
        type="text"
        name="last_name"
        label="Last Name"
        placeholder="Enter your surname"
      ></VInput>
      <VInput
        type="text"
        name="phone"
        label="Phone"
        placeholder="(+998)-90-123-45-67"
        :mask="'(+998)-##-###-##-##'"
      ></VInput>
      <VButton
        btn_type="primary"
        :isLoading="loading"
        type="submit"
        class="mt-5 w-full text-[18px]"
      >
        {{ btn_title }}
      </VButton>
    </vee-form>
  </AppModal>
</template>

<script setup>
import { computed, reactive, ref, watch } from "vue";
import AppModal from "@/components/ui/app-modal.vue";
import { danger, success, warning } from "@/plugins/Notification.js";
import VInput from "@/components/form/VInput.vue";
import VButton from "@/components/form/VButton.vue";
import { useAdminStudentStore } from "@/stores/admin/student.js";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAlertCircleOutline } from "@mdi/js";

const store = useAdminStudentStore();

const loading = ref(false);

const openDeleteModal = ref(false);
const openEditModal = ref(false);

const title = ref("Add New Student");
const ID = ref(null);
const del_title = ref("Are you sure to delete?");
const btn_title = computed(() => {
  if (store.loading) {
    return "Loading";
  } else {
    return "Save";
  }
});

let forms = reactive({
  first_name: "",
  last_name: "",
  phone: "",
});

watch(openEditModal, (val) => {
  if (!val) {
    forms = {
      first_name: "",
      last_name: "",
      phone: "",
    };
    title.value = "Add New Student";
  }
});

const openModal = (item) => {
  if (item._id) {
    forms = { ...item };
    title.value = "Edit Student";
  }
  openEditModal.value = true;
};

const openDelModal = (id) => {
  ID.value = id;
  openDeleteModal.value = true;
};

const closeDelModal = () => {
  openDeleteModal.value = false;
};

const closeModal = () => {
  openEditModal.value = false;
};

const schema = computed(() => {
  return {
    last_name: "required|min:3|max:30",
    first_name: "required|min:3|max:30",
    phone: "required|phone:19",
  };
});

const addStudent = async (value) => {
  loading.value = true;
  if (forms?._id) {
    const res = await store.updateStudent(
      {
        ...value,
        phone: value.phone
          .split("")
          .filter((char) => char === "+" || !isNaN(+char))
          .join(""),
      },
      forms?._id
    );
    if (res) {
      success("successfully updated ");
      openEditModal.value = false;
      location.reload();
    } else {
      console.log(store.error, "error");
      danger(store.error.message);
    }
  } else {
    const res = await store.addStudent({
      ...value,
      phone: value.phone
        .split("")
        .filter((char) => char === "+" || !isNaN(+char))
        .join(""),
    });
    if (res) {
      success("successfully added ");
      openEditModal.value = false;
      location.reload();
    } else {
      danger(store.error);
    }
  }
  loading.value = false;
};

const confirm = async () => {
  loading.value = true;
  const res = await store.deleteStudent(ID.value);
  loading.value = false;
  if (res) {
    warning("Deleted success");
  } else {
    danger("Failed!");
  }
  openDeleteModal.value = false;
  location.reload();
};

defineExpose({ openModal, closeModal, openDelModal });
</script>

<style lang="scss" scoped></style>
