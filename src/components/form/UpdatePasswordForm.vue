<template>
  <div
    class="lg:w-1/3 w-full mb-10 lg:mb-0 flex flex-col p-5 font-medium rounded-[10px] border bg-white border-[#12486B]/30 shadow-lg"
  >
    <h1 class="w-full text-center text-[24px] text-color1">Change Password</h1>
    <vee-form
      :validation-schema="schema"
      @submit="updatePassword"
      :initial-values="forms"
    >
      <VInput
        type="text"
        name="old_password"
        label="Old Password"
        placeholder="Enter your old password"
        :disabled="disabled"
      ></VInput>
      <VInput
        type="text"
        name="new_password"
        label="New Password"
        placeholder="Enter your new password"
        :disabled="disabled"
      ></VInput>
      <VInput
        type="text"
        name="confirm_password"
        label="Confirm Password"
        placeholder="Confirm your new password"
        :disabled="disabled"
      ></VInput>
      <div v-if="!disabled" class="flex gap-5">
        <VButton
          btn_type="danger"
          :isLoading="false"
          type="button"
          class="mt-5 w-full text-[18px]"
          @click="cancel"
        >
          Cancel
        </VButton>
        <VButton
          v-if="!disabled"
          btn_type="primary"
          :isLoading="authStore?.loading"
          type="submit"
          class="mt-5 w-full text-[18px]"
        >
          {{ btn_title }}
        </VButton>
      </div>
      <VButton
        v-else
        btn_type="primary"
        :isLoading="false"
        type="button"
        class="mt-5 w-full text-[18px]"
        @click="disabled = false"
      >
        Change password
      </VButton>
    </vee-form>
  </div>
</template>

<script setup>
import VInput from "@/components/form/VInput.vue";
import { computed, ref, watch } from "vue";
import { useAuthStore } from "@/stores/auth/auth.js";
import VButton from "@/components/form/VButton.vue";
import { danger, success } from "@/plugins/Notification.js";

const authStore = useAuthStore();

const disabled = ref(true);

const forms = ref({});

const cancel = () => {
  forms.value = {};
  disabled.value = true;
};

const schema = computed(() => {
  return {
    old_password: "required|min:3|max:30",
    new_password: "required|min:3|max:30",
    confirm_password: "required|min:3|max:30",
  };
});

const btn_title = computed(() => {
  if (authStore?.loading) {
    return "Saving";
  } else {
    return "Save";
  }
});

const updatePassword = async (values) => {
  const payload = {
    ...values,
  };
  await authStore.changePassword(payload);
  disabled.value = true;
  success("Saved");
  location.reload();
};
</script>

<style lang="scss" scoped></style>
