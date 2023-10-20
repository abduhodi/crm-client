<template>
  <loader v-if="store.loading"></loader>
  <div v-else class="w-full h-full pt-[30px]">
    <div class="flex justify-start items-center gap-3">
      <span
        @click="back"
        class="w-9 h-9 border border-[#12486B] bg-[#EBEEF3] hover:bg-[#dee3e9] flex justify-center items-center rounded-full cursor-pointer"
      >
        <svg-icon
          type="mdi"
          :path="mdiArrowLeft"
          class="text-[#12486B] w-5 h-5"
        ></svg-icon>
      </span>
      <div class="flex flex-col">
        <span class="text-[#0D1523] capitalize text-[16px] font-semibold">{{
          `${data?.first_name} ${data?.last_name}`
        }}</span>
        <span class="text-[#6E737B] text-[12px] font-medium">{{
          `Pupil ID: ${data?._id}`
        }}</span>
      </div>
    </div>
    <div class="w-full flex justify-start items-start gap-[30px] mt-[30px]">
      <student-info-card :data="data"></student-info-card>
      <div class="">
        <span
          class="text-[#0D1523] text-[16px] font-semibold inline-block mb-[30px]"
          >Groups:</span
        >
        <SingleStudentCourse
          :data="{
            name: 'Course title',
            teacher: 'Hakimov Doniyor',
            city: 'Namangan',
            group: 'Al - Beruniy(12 kishilik)',
          }"
        ></SingleStudentCourse>
        <SingleStudentCourse
          :data="{
            name: 'Course title',
            teacher: 'Hakimov Doniyor',
            city: 'Namangan',
            group: 'Al - Beruniy(12 kishilik)',
          }"
        ></SingleStudentCourse>
      </div>
    </div>
  </div>
</template>

<script setup>
import SingleStudentCourse from "@/components/card/SingleStudentCourse.vue";
import Loader from "@/components/loader/Loader.vue";
import StudentInfoCard from "@/components/card/StudentInfoCard.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiArrowLeft } from "@mdi/js";

import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAdminStudentStore } from "@/stores/admin/student";

const store = useAdminStudentStore();
const route = useRoute();
const router = useRouter();

const data = ref({});

onMounted(async () => {
  console.log(route.params.id, "single");
  await store.getStudentById(route.params.id);
  data.value = store.student;
});

const back = () => {
  router.push({ path: "/students" });
};
</script>

<style lang="scss" scoped></style>
