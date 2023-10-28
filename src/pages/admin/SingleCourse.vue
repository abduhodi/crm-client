<template>
  <loader v-if="store.loading" />
  <div v-else>
    <add-student ref="openModal" />
    <add-teacher ref="openAddTeacherModal" :data="$route?.params?.id" />
    <div class="w-full flex justify-between items-start mt-3 gap-5">
      <div
        class="w-[315px] p-5 flex flex-col gap-[15px] font-medium rounded-[10px] border bg-white border-[#12486B]"
      >
        <div class="w-full flex justify-between items-center">
          <span class="text-[#3D444F] text-[12px]">ID:</span>
          <span class="text-[#065FD4] text-[14px]">{{ course?._id }}</span>
        </div>
        <span class="w-full h-[1px] bg-[#CFD0D3]"></span>
        <div class="w-full flex justify-between items-center">
          <span class="text-[#3D444F] text-[12px]">Course Name:</span>
          <span class="text-[#065FD4] text-[14px]">{{ course?.name }}</span>
        </div>
        <span class="w-full h-[1px] bg-[#CFD0D3]"></span>
        <div class="w-full flex justify-between items-center">
          <span class="text-[#3D444F] text-[12px]">Number of lessons:</span>
          <span class="text-[#065FD4] text-[14px]">{{ course?.period }}</span>
        </div>
      </div>
      <div class="flex flex-col gap-5 side">
        <div class="flex justify-between items-center">
          <VButton
            btn_type="success"
            :isLoading="loading"
            @click="openTeacherAddModal"
            class="w-[200px]"
            >Add Teacher</VButton
          >
        </div>
        <div
          class="border border-black/20 py-2 rounded-lg"
          v-for="(item, index) in teachers"
          :key="index"
        >
          <el-collapse-item :name="index">
            <template #title>
              <span class="text-[20px] text-color1 pl-5">{{
                index + 1 + ". " + item?.first_name + " " + item?.last_name
              }}</span>
            </template>
          </el-collapse-item>
        </div>
      </div>
    </div>
    <div class="w-full flex items-center justify-start gap-5 flex-wrap mt-5">
      <div
        v-for="(group, ind) in groups"
        :key="ind"
        class="w-[200px] h-[300px] relative border border-color1/20 rounded-lg shadow-lg flex flex-col cursor-pointer hover:shadow-2xl hover:text-color1 duration-200"
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
import { useAdminCourseStore } from "@/stores/admin/course";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { formatDate, formatTime } from "@/plugins/moment.js";
import VButton from "@/components/form/VButton.vue";
import accordion from "@/components/ui/accordion.vue";
import AddTeacher from "@/pages/admin/Modals/AddTeacherToCourse.vue";
import Loader from "@/components/loader/Loader.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiDoorSliding,
  mdiSchool,
  mdiAccountGroup,
  mdiCalendarClock,
} from "@mdi/js";

const route = useRoute();
const store = useAdminCourseStore();
const loading = ref(false);
const teachers = ref([]);
const groups = ref([]);

const openModal = ref();
const openAddTeacherModal = ref();

const openAddModal = () => {
  openModal.value.openModal();
};

const openTeacherAddModal = async () => {
  openAddTeacherModal.value?.openModal(teachers.value);
};

onMounted(async () => {
  const id = route.params?.id;
  [teachers.value, course.value, groups.value] = await Promise.all([
    store.getCourseTeachers(route.params.id),
    store.getCourseById(id),
    store.getCourseGroups(id),
  ]);
});

const course = ref({
  student_count: { type: Number, defalut: "" },
  _id: String,
  name: String,
  start_date: Date,
  end_date: Date,
  days: Boolean,
  start_time: Number,
  end_time: Number,
  status: Boolean,
  course: {
    _id: String,
    name: String,
    price: Number,
    period: Number,
  },
  room: {
    _id: String,
    name: String,
    size: Number,
  },
});
</script>

<style lang="scss" scoped>
.side {
  width: calc(100% - 335px);
}
</style>
