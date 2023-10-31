<template>
  <div class="mt-5">
    <loader v-if="loading" />
    <div v-else class="md:h-fit h-screen">
      <student-attendance ref="attendanceModal" />
      <div class="flex items-center gap-10 mb-5">
        <VButton
          btn_type="primary"
          :isLoading="modalLoading"
          @click="openModal"
          class="w-fit"
          >Mark Attendance</VButton
        >
        <select
          v-model="date"
          class="lg:px-5 py-2 rounded-md text-lg outline-none"
        >
          <option
            :value="att?.date"
            v-for="(att, ind) in students[0]?.attendance"
            :key="ind"
            :disabled="att?.pass"
            class="text-xs px-5"
          >
            {{ formatDate(att?.date) }}
          </option>
        </select>
      </div>
      <accordion :data="students" />
    </div>
  </div>
</template>

<script setup>
import accordion from "@/components/ui/accordion.vue";
import { onMounted, ref } from "vue";
import { useTeacherGroupStore } from "@/stores/teacher/group";
import { useRoute } from "vue-router";
import Loader from "@/components/loader/Loader.vue";
import VButton from "@/components/form/VButton.vue";
import StudentAttendance from "@/pages/teacher/Modals/StudentAttendance.vue";
import { danger, success, warning } from "@/plugins/Notification.js";
import { formatDate, formatTime } from "@/plugins/moment";

const store = useTeacherGroupStore();
const route = useRoute();
const loading = ref(false);
const modalLoading = ref(false);

const students = ref([]);
const attendanceModal = ref();
const date = ref("");

const openModal = async () => {
  if (!date.value) {
    danger("lesson date is not selected");
    return;
  }
  modalLoading.value = true;
  const data = await store.getOneLessonAttendance(route.params.id, {
    date: date.value,
  });
  attendanceModal.value.openModal(data);
  modalLoading.value = false;
};

onMounted(async () => {
  loading.value = true;
  const id = route.params.id;
  students.value = await store.getGroupStudents(id);
  date.value = students.value[0]?.attendance[0]?.date;
  console.log(date.value);
  loading.value = false;
});
</script>

<style lang="scss" scoped></style>
