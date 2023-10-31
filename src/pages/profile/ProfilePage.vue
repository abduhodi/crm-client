<template>
  <div
    class="mt-3 flex lg:flex-row flex-col justify-between items-start gap-10 bg-[#E7EDF0]"
  >
    <profile-card :data="authStore?.user"></profile-card>
    <update-password-form></update-password-form>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useAuthStore } from "@/stores/auth/auth";
import ProfileCard from "@/components/card/ProfileCard.vue";
import UpdatePasswordForm from "@/components/form/UpdatePasswordForm.vue";

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.getProfileInfo();
});
</script>

<style lang="scss" scoped></style>
