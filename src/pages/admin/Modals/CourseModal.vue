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
      @submit="addCourse"
    >
      <VInput
        type="text"
        name="name"
        label="Course Name"
        placeholder="Enter course name"
      ></VInput>
      <VInput
        type="number"
        name="price"
        label="Price"
        placeholder="Enter course price"
        class="example"
      ></VInput>
      <VInput
        type="number"
        name="period"
        label="Period"
        placeholder="Enter course period"
        class="example"
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
import { useAdminCourseStore } from "@/stores/admin/course.js";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAlertCircleOutline } from "@mdi/js";

const store = useAdminCourseStore();

const loading = ref(false);

const openDeleteModal = ref(false);
const openEditModal = ref(false);

const title = ref("Add New Course");
const ID = ref(null);
const del_title = ref("Are you sure to delete?");
const btn_title = computed(() => {
  if (store.loading) {
    return "Loading";
  } else {
    return "Save";
  }
});

const forms = ref({
  name: "",
  price: null,
  period: null,
});

watch(openEditModal, (val) => {
  if (!val) {
    forms.value = {};
    title.value = "Add New Course";
  }
});

const openModal = (item) => {
  if (item._id) {
    forms.value = { ...item };
    title.value = "Edit Course";
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
    name: "required|min:2|max:30",
    price: "required",
    period: "required",
  };
});

const addCourse = async (value) => {
  loading.value = true;
  if (forms.value?._id) {
    const res = await store.updateCourse(
      {
        ...value,
      },
      forms.value?._id
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
    const res = await store.addCourse({
      ...value,
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
  const res = await store.deleteCourse(ID.value);
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
