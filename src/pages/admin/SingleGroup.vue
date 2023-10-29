<template>
  <loader v-if="store.loading" />
  <div v-else>
    <add-student ref="openModal" />
    <add-teacher ref="openAddTeacherModal" :data="students[0]?.course?._id" />
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
    <div class="w-full flex justify-between items-start mt-3 gap-5">
      <div
        class="w-[315px] p-5 flex flex-col gap-[15px] font-medium rounded-[10px] border bg-white border-[#12486B]"
      >
        <div class="w-full flex justify-between items-center">
          <span class="text-[#3D444F] text-[12px]">ID:</span>
          <span class="text-[#065FD4] text-[14px]">{{ group?._id }}</span>
        </div>
        <span class="w-full h-[1px] bg-[#CFD0D3]"></span>
        <div class="w-full flex justify-between items-center">
          <span class="text-[#3D444F] text-[12px]">Group Name:</span>
          <span class="text-[#065FD4] text-[14px]">{{ group?.name }}</span>
        </div>
        <span class="w-full h-[1px] bg-[#CFD0D3]"></span>
        <div class="w-full flex justify-between items-center">
          <span class="text-[#3D444F] text-[12px]">Started date:</span>
          <span class="text-[#065FD4] text-[14px]">{{
            formatDate(group?.start_date)
          }}</span>
        </div>
        <span class="w-full h-[1px] bg-[#CFD0D3]"></span>
        <div class="w-full flex justify-between items-center">
          <span class="text-[#3D444F] text-[12px]">Ended date:</span>
          <span class="text-[#065FD4] text-[14px]">{{
            formatDate(group?.end_date)
          }}</span>
        </div>
        <span class="w-full h-[1px] bg-[#CFD0D3]"></span>
        <div class="w-full flex justify-between items-center">
          <span class="text-[#3D444F] text-[12px]">Start time:</span>
          <span class="text-[#065FD4] text-[14px]">{{
            formatTime(group?.start_time)
          }}</span>
        </div>
        <span class="w-full h-[1px] bg-[#CFD0D3]"></span>
        <div class="w-full flex justify-between items-center">
          <span class="text-[#3D444F] text-[12px]">End time:</span>
          <span class="text-[#065FD4] text-[14px]">{{
            formatTime(group?.end_time)
          }}</span>
        </div>
        <span class="w-full h-[1px] bg-[#CFD0D3]"></span>
        <div class="w-full flex justify-between items-center">
          <span class="text-[#3D444F] text-[12px]">Days:</span>
          <span v-if="group?.days" class="text-[#065FD4] text-[14px]"
            >Mon Wed Fri</span
          >
          <span v-else class="text-[#065FD4] text-[14px]">Tue Thu Sat</span>
        </div>
        <span class="w-full h-[1px] bg-[#CFD0D3]"></span>
        <div class="w-full flex justify-between items-center">
          <span class="text-[#3D444F] text-[12px]">Status:</span>
          <span class="text-[#065FD4] text-[14px]">{{ group?.status }}</span>
        </div>
        <span class="w-full h-[1px] bg-[#CFD0D3]"></span>
        <div class="w-full flex justify-between items-center">
          <span class="text-[#3D444F] text-[12px]">Course:</span>
          <router-link
            :to="'/courses/' + group?.course?._id"
            class="text-[#065FD4] text-[14px] underline"
          >
            {{ group?.course?.name }}
          </router-link>
        </div>
        <span class="w-full h-[1px] bg-[#CFD0D3]"></span>
        <div class="w-full flex justify-between items-center">
          <span class="text-[#3D444F] text-[12px]">Room:</span>
          <router-link
            :to="'/rooms/' + group?.room?._id"
            class="text-[#065FD4] text-[14px] underline"
          >
            {{ group?.room?.name }}
          </router-link>
        </div>
      </div>
      <div class="flex flex-col gap-5 side">
        <div class="flex justify-between items-center">
          <VButton
            btn_type="primary"
            :isLoading="false"
            @click="openAddModal"
            class="w-[200px]"
            >Add Student</VButton
          >
          <VButton
            btn_type="success"
            :isLoading="loading"
            @click="openTeacherAddModal"
            class="w-[200px]"
            >Add Teacher</VButton
          >
        </div>
        <accordion :data="students" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAdminGroupStore } from "@/stores/admin/group.js";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { formatDate, formatTime } from "@/plugins/moment.js";
import VButton from "@/components/form/VButton.vue";
import AddStudent from "@/pages/admin/Modals/AddStudent.vue";
import accordion from "@/components/ui/accordion.vue";
import AddTeacher from "@/pages/admin/Modals/AddTeacher.vue";
import Loader from "@/components/loader/Loader.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiArrowLeft } from "@mdi/js";

const route = useRoute();
const router = useRouter();
const store = useAdminGroupStore();
const loading = ref(false);

const openModal = ref();
const openAddTeacherModal = ref();

const back = () => {
  router.push({ path: "/students" });
};

const openAddModal = () => {
  openModal.value.openModal();
};

const openTeacherAddModal = async () => {
  loading.value = true;
  const data = await store.getGroupCourseTeachers(store?.group?.course?._id);
  openAddTeacherModal.value?.openModal(data?.teachers);
  loading.value = false;
};

const students = ref([]);

onMounted(async () => {
  const id = route.params?.id;
  [students.value, group.value] = await Promise.all([
    store.getGroupStudents(id),
    store.getGroupById(id),
  ]);
});

const group = ref({
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
