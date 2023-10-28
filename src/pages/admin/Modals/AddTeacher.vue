<template>
  <AppModal v-model="modal">
    <h1 class="text-color1 text-[24px] w-full text-center font-medium">
      Add Teacher to group
    </h1>
    <div class="flex flex-col justify-between items-center gap-3 mb-2 mt-5">
      <label
        for="teacher"
        class="text-[18px] text-color1 font-medium mb-1 inline-block"
        >Select Teacher for group</label
      >
      <select
        id="teacher"
        v-model="teacher"
        class="outline-none border px-2 rounded-md py-2 text-sm w-full"
      >
        <option value="" hidden selected>Select Teacher</option>
        <option
          v-for="(teacher, index) in teachers"
          :key="index"
          :value="teacher?._id"
        >
          {{ teacher?.first_name }}
          {{ teacher?.last_name }}
        </option>
      </select>
    </div>
    <VButton
      btn_type="primary"
      :isLoading="loading"
      @click="addTeacher"
      class="w-[200px] mt-5 mx-auto"
      >Add Teacher</VButton
    >
  </AppModal>
</template>

<script setup>
import AppModal from "@/components/ui/app-modal.vue";
import { ref, watch, computed, onMounted } from "vue";
import VInput from "@/components/form/VInput.vue";
import VButton from "@/components/form/VButton.vue";
import { useAdminGroupStore } from "@/stores/admin/group";
import { useRoute } from "vue-router";
import { danger, success, warning } from "@/plugins/Notification.js";

const store = useAdminGroupStore();
const teacher = ref("");
const teachers = ref([]);
const route = useRoute();

const addTeacher = async () => {
  loading.value = true;
  const payload = {
    group: route.params.id,
    teacher: teacher.value,
  };
  if (!payload.group || !payload.teacher) {
    warning("group or teacher shoul not be empty");
    return;
  }
  console.log(payload);
  const res = await store.addTeacherToGroup(payload);
  if (res) {
    success("Teacher added successfully");
  } else {
    danger(store?.error?.message);
  }
  loading.value = false;
};

const loading = ref(false);

const modal = ref(false);

watch(modal, (val) => {
  if (!val) modal.value = false;
});

const openModal = (data) => {
  modal.value = true;
  teachers.value = data;
};

const closeModal = () => {
  modal.value = false;
};

defineExpose({ openModal });
</script>

<style lang="scss" scoped></style>
