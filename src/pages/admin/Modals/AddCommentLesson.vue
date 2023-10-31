<template>
  <AppModal v-model="modal">
    <h1 class="text-[24px] font-bold w-full text-center mb-[20px] text-color1">
      {{ title }}
    </h1>
    <vee-form
      :validation-schema="schema"
      :initial-values="forms"
      @submit="addDesc"
    >
      <VInput
        type="text"
        name="description"
        label="Comment"
        placeholder="Enter description"
      ></VInput>
      <VInput
        type="number"
        name="days"
        label="Including days"
        placeholder="Enter number of days"
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
import { useAdminGroupStore } from "@/stores/admin/group";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAlertCircleOutline } from "@mdi/js";

const store = useAdminGroupStore();

const loading = ref(false);
const modal = ref(false);

const title = ref("Add Comment to Lesson");
const btn_title = computed(() => {
  if (loading) {
    return "saving";
  } else {
    return "Save";
  }
});

const forms = ref({
  description: "",
  days: 1,
});

watch(modal, (val) => {
  if (!val) {
    forms.value = {
      description: "",
      days: 1,
    };
  }
});

const openModal = (item) => {
  modal.value = true;
};

const schema = computed(() => {
  return {
    description: "required|min:5",
    days: "required|min:1",
  };
});

const addDesc = async (value) => {
  console.log(value);
  // if (forms.value?._id) {
  //   const res = await store.updateRoom(
  //     {
  //       ...value,
  //     },
  //     forms.value?._id
  //   );
  //   if (res) {
  //     success("successfully updated ");
  //     location.reload();
  //   } else {
  //     console.log(store.error, "error");
  //     danger(store.error.message);
  //   }
  // }
};

defineExpose({ openModal });
</script>

<style lang="scss" scoped></style>
