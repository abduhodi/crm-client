<template>
  <AppModal v-model="modal">
    <h1 class="text-color1 text-[24px] w-full text-center">
      Add Student to group
    </h1>
    <vee-form
      :validation-schema="schema"
      @submit="save"
      class="w-full flex flex-col gap-5"
    >
      <VInput
        type="text"
        name="phone"
        label="Phone"
        placeholder="(+998)-90-123-45-67"
        :mask="'(+998)-##-###-##-##'"
      ></VInput>
      <v-button btn_type="primary" :isLoading="loading" class="mt-3"
        >Add to group</v-button
      >
    </vee-form>
  </AppModal>
</template>

<script setup>
import AppModal from "@/components/ui/app-modal.vue";
import { ref, watch, computed } from "vue";
import VInput from "@/components/form/VInput.vue";
import VButton from "@/components/form/VButton.vue";
import { useAdminGroupStore } from "@/stores/admin/group";
import { useRoute } from "vue-router";
import { danger, success, warning } from "@/plugins/Notification.js";

const route = useRoute();
const store = useAdminGroupStore();

const loading = ref(false);

const save = async (value) => {
  loading.value = true;
  const group = route.params?.id;
  const student_phone = value.phone
    .split("")
    .filter((char) => char === "+" || !isNaN(+char))
    .join("");

  const res = await store.addStudentToGroup({ group, student_phone });
  loading.value = false;
  if (res) {
    success("successfully added ");
    location.reload();
  } else {
    danger(store.error?.message);
  }
};

const modal = ref(false);

watch(modal, (val) => {
  if (!val) modal.value = false;
});

const openModal = () => {
  modal.value = true;
};

const closeModal = () => {
  modal.value = false;
};

const schema = computed(() => {
  return {
    phone: "required|phone:19",
  };
});

defineExpose({ openModal });
</script>

<style lang="scss" scoped></style>
