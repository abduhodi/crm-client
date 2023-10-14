<template>
  <AppModal v-model="dialog">
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
        :isLoading="store.loading"
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
import { danger, success } from "@/plugins/Notification.js";
import VInput from "@/components/form/VInput.vue";
import VButton from "@/components/form/VButton.vue";
import { useAdminStore } from "@/stores/admin";

const store = useAdminStore();

const dialog = ref(false);
const title = ref("Add New Student");

const btn_title = computed(() => {
  if (store.loading) {
    return "Loading";
  } else {
    return "Save";
  }
});

const forms = ref({
  first_name: "",
  last_name: "",
  phone: "",
});

watch(dialog, (val) => {
  if (!val) {
    forms.value = {};
    title.value = "Add New Student";
  }
});

const openModal = (item) => {
  if (item) {
    forms.value = { ...item };
    title.value = "Edit Student";
    console.log(forms.value, "forms");
  }
  dialog.value = true;
};

const closeModal = () => {
  dialog.value = false;
};

const save = () => {};

const schema = computed(() => {
  return {
    last_name: "required|min:3|max:30",
    first_name: "required|min:3|max:30",
    phone: "required|phone:19",
  };
});

const addStudent = async (value) => {
  if (forms.value?._id) {
    const res = await store.updateStudent(
      {
        ...value,
        phone: value.phone
          .split("")
          .filter((char) => char === "+" || !isNaN(+char))
          .join(""),
      },
      forms.value?._id
    );
    if (res) {
      success("successfully updated ");
      dialog.value = false;
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
      dialog.value = false;
    } else {
      danger(store.error);
    }
  }
};

defineExpose({ openModal, closeModal });
</script>

<style lang="scss" scoped></style>
