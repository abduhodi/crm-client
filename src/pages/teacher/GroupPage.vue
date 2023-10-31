<template>
  <div>
    <loader v-if="loading" />
    <div
      v-else
      class="w-full flex items-center sm:justify-start justify-center gap-5 flex-wrap"
    >
      <div
        v-for="(group, ind) in store?.groups"
        :key="ind"
        class="sm:w-[200px] w-full h-[300px] relative border border-color1/20 rounded-lg shadow-lg flex flex-col cursor-pointer hover:shadow-2xl hover:text-color1 duration-200"
        @click="singleGroup(group?._id)"
      >
        <span class="w-full text-[24px] text-center mt-5 font-medium">{{
          group?.name
        }}</span>
        <span
          class="w-full text-[20px] font-medium pl-5 mt-10 flex gap-3 items-center"
          ><svg-icon type="mdi" :path="mdiDoorSliding"></svg-icon>
          {{ group?.room?.name }}</span
        >
        <span
          class="w-full text-[20px] font-medium pl-5 flex gap-3 items-center mt-2"
        >
          <svg-icon type="mdi" :path="mdiSchool"></svg-icon>
          {{ group?.course?.name }}</span
        >
        <span
          class="w-full text-[20px] font-medium pl-5 flex gap-3 items-center mt-2"
        >
          <svg-icon type="mdi" :path="mdiAccountGroup"></svg-icon>
          {{ group?.student_count }}</span
        >
        <span
          class="absolute bottom-3 left-5 text-[18px] font-medium flex gap-3 items-center"
        >
          <svg-icon
            type="mdi"
            :path="mdiCalendarClock"
            class="w-[40px] h-[40px]"
          ></svg-icon>
          {{ group?.days ? "Mon/Wed/Fri" : "Tue/Thu/Sat" }}
          {{ formatTime(group?.start_time) }} -
          {{ formatTime(group?.end_time) }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTeacherGroupStore } from "@/stores/teacher/group";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { formatDate, formatTime } from "@/plugins/moment";
import SvgIcon from "@jamescoyle/vue-icon";
import Loader from "@/components/loader/Loader.vue";
import {
  mdiDoorSliding,
  mdiSchool,
  mdiAccountGroup,
  mdiCalendarClock,
} from "@mdi/js";

const loading = ref(false);

const router = useRouter();

const store = useTeacherGroupStore();

const singleGroup = (id) => {
  router.push({ path: "/teacher-groups/" + id });
};

onMounted(async () => {
  loading.value = true;
  const id = JSON.parse(localStorage.getItem("user"))?._id;
  await store.getTeacherGroups(id);
  loading.value = false;
});
</script>

<style lang="scss" scoped></style>
