<template>
  <AppModal v-model="openDeleteModal">
    <vee-form>
      <span class="w-full flex justify-center items-center">
        <svg-icon
          type="mdi"
          :path="mdiAlertCircleOutline"
          class="w-20 h-20 text-red-700 mb-3"
        ></svg-icon>
      </span>
      <h1
        class="text-[24px] font-bold w-full text-center mb-[20px] text-color1"
      >
        {{ del_title }}
      </h1>
      <div class="flex justify-center items-center w-full gap-3">
        <VButton
          btn_type="danger"
          :isLoading="store.loading"
          type="button"
          class="mt-5 text-[18px] px-8"
          @click="confirm"
        >
          Delete
        </VButton>
        <VButton
          btn_type="primary"
          :isLoading="false"
          type="button"
          class="mt-5 px-8 text-[18px]"
          @click="closeDelModal"
        >
          Cancel
        </VButton>
      </div>
    </vee-form>
  </AppModal>
  <AppModal v-model="openEditModal">
    <h1 class="text-[16px] font-bold w-full text-center mb-[10px] text-color1">
      {{ title }}
    </h1>
    <div>
      <label
        for="name"
        class="text-[14px] text-color1 font-medium mb-1 inline-block"
        >Group name</label
      >
      <input
        id="name"
        type="text"
        v-model="forms.name"
        required
        class="border w-full px-3 py-[6px] text-lg rounded-lg outline-none mb-2"
      />
      <div class="flex justify-between items-center gap-3 mb-2">
        <label
          for="startDate"
          class="text-[14px] text-color1 font-medium mb-1 inline-block w-full"
          >Pick Group Start Date</label
        >
        <el-date-picker
          id="startDate"
          v-model="startDate"
          type="date"
          placeholder="Pick a date"
          :size="size"
          :disabled-date="disabledDate"
          @change="handleDatePicker"
        />
      </div>
      <p class="text-[14px] text-color1 font-medium mb-1 inline-block w-full">
        Select Group start and finish time
      </p>
      <div class="flex justify-between gap-3 mb-2">
        <el-time-select
          v-model="startTime"
          :max-time="endTime"
          :size="size"
          placeholder="Start time"
          start="06:00"
          step="00:30"
          end="22:00"
        />
        <el-time-select
          v-model="endTime"
          :min-time="startTime"
          placeholder="End time"
          start="06:00"
          step="00:30"
          end="22:00"
          :size="size"
        />
      </div>
      <div class="flex justify-between items-center gap-3 mb-2">
        <label
          for="days"
          class="text-[14px] text-color1 font-medium mb-1 inline-block"
        >
          Select Group lesson days</label
        >
        <select
          id="days"
          v-model="days"
          @change="handleDays"
          class="outline-none border px-2 py-2 text-sm rounded-md"
        >
          <option value="" selected hidden>Select days</option>
          <option value="odd">Odd days</option>
          <option value="even">Even days</option>
        </select>
      </div>
      <VButton
        v-if="full"
        @click="getRooms"
        btn_type="primary"
        :isLoading="gettingRooms"
        type="button"
        class="mt-2 w-full text-[14px]"
      >
        Get rooms
      </VButton>
      <div class="mt-2" v-if="rooms?.length">
        <div class="flex justify-between items-center gap-3 mb-2">
          <label
            for="status"
            class="text-[14px] text-color1 font-medium mb-1 inline-block"
            >Select group status</label
          >
          <select
            id="status"
            v-model="status"
            @change="handleStatus"
            class="outline-none border px-2 rounded-md py-2 text-sm"
          >
            <option value="" hidden selected>Select status</option>
            <option value="yes">Started</option>
            <option value="no" selected>Not Started</option>
          </select>
        </div>
        <div class="flex justify-between items-center gap-3 mb-2">
          <label
            for="room"
            class="text-[14px] text-color1 font-medium mb-1 inline-block"
            >Select room for group</label
          >
          <select
            id="room"
            v-model="room"
            @change="handleRoomsPicker"
            class="outline-none border px-2 rounded-md py-2 text-sm"
          >
            <option value="" hidden selected>Select room</option>
            <option
              v-for="(room, index) in rooms"
              :key="index"
              :value="room?._id"
            >
              {{ room?.name }}
            </option>
          </select>
        </div>
        <div class="flex justify-between items-center gap-3 mb-2">
          <label
            for="course"
            class="text-[14px] text-color1 font-medium mb-1 inline-block"
            >Select course for group</label
          >
          <select
            id="course"
            v-model="course"
            @change="handleCoursesPicker"
            class="outline-none border px-2 rounded-md py-2 text-sm"
          >
            <option value="" hidden selected>Select Course</option>
            <option
              v-for="(course, index) in courseStore.courses"
              :key="index"
              :value="course?._id"
            >
              {{ course?.name }}
            </option>
          </select>
        </div>

        <VButton
          @click="handleSubmit"
          btn_type="primary"
          :isLoading="store.loading"
          type="button"
          class="mt-5 w-full text-[14px]"
        >
          {{ btn_title }}
        </VButton>
      </div>
    </div>
  </AppModal>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from "vue";
import AppModal from "@/components/ui/app-modal.vue";
import { danger, success, warning } from "@/plugins/Notification.js";
import VInput from "@/components/form/VInput.vue";
import VButton from "@/components/form/VButton.vue";
import { useAdminGroupStore } from "@/stores/admin/group.js";
import { useAdminCourseStore } from "@/stores/admin/course.js";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAlertCircleOutline } from "@mdi/js";
import moment from "moment";

const courseStore = useAdminCourseStore();
const store = useAdminGroupStore();

const openDeleteModal = ref(false);
const openEditModal = ref(false);

const gettingRooms = ref(false);

const title = ref("Add New Group");
const ID = ref(null);
const del_title = ref("Are you sure to delete?");

const full = computed(() => {
  if (
    startDate.value &&
    startTime.value &&
    endTime.value &&
    days.value &&
    !rooms.value.length
  ) {
    return true;
  }
  return false;
});

const size = "large";
const days = ref("");
const room = ref("");
const rooms = ref([]);
const course = ref("");
const status = ref("");
const startDate = ref("");
const startTime = ref("");
const endTime = ref("");

const forms = ref({
  name: "",
  start_date: "",
  days: "",
  start_time: "",
  end_time: "",
  room: "",
  status: false,
  course: "",
});

const disabledDate = (time) => {
  return time.getTime() < Date.now();
};

const handleDatePicker = (date) => {
  forms.value.start_date = moment(date).format("YYYY-MM-DD");
};

const getRooms = async () => {
  gettingRooms.value = true;
  if (startTime.value && endTime.value) {
    const time1 = startTime.value.split(":").map((i) => parseInt(i));
    const time2 = endTime.value.split(":").map((i) => parseInt(i));
    forms.value.start_time = time1[0] * 60 + time1[1];
    forms.value.end_time = time2[0] * 60 + time2[1];
  }
  const payload = {
    start_date: forms.value.start_date,
    start_time: forms.value.start_time,
    end_time: forms.value.end_time,
    days: forms.value.days,
  };
  rooms.value = await store.getAvailableRooms(payload);
  gettingRooms.value = false;
};

const handleDays = () => {
  forms.value.days = days.value === "odd" ? true : false;
};

const handleStatus = () => {
  forms.value.status = status.value === "yes" ? true : false;
};

const handleRoomsPicker = () => {
  forms.value.room = room.value;
};

const handleCoursesPicker = () => {
  forms.value.course = course.value;
};

const print = () => {
  console.log(forms.value);
};

const btn_title = computed(() => {
  if (store.loading) {
    return "Loading";
  } else {
    return "Save";
  }
});

watch(openEditModal, (val) => {
  if (!val) {
    forms.value = {};
    title.value = "Add New Group";
    days.value = "";
    room.value = "";
    status.value = "";
    rooms.value = [];
    course.value = "";
    startDate.value = "";
    startTime.value = "";
    endTime.value = "";
  }
});

onMounted(async () => {
  await courseStore.getCourses();
});

const openModal = async (item) => {
  if (item._id) {
    forms.value = { ...item };
    title.value = "Edit Group";
  }
  openEditModal.value = true;
};

const openDelModal = (id) => {
  ID.value = id;
  openDeleteModal.value = true;
};

const closeDelModal = () => {
  openDeleteModal.value = false;
};

const closeModal = () => {
  openEditModal.value = false;
};

const handleSubmit = async () => {
  if (forms.value?._id) {
    const res = await store.updateGroup(
      {
        ...forms.value,
      },
      forms.value?._id
    );
    if (res) {
      success("successfully updated ");
      openEditModal.value = false;
      location.reload();
    } else {
      console.log(store.error, "error");
      danger(store.error.message);
    }
  } else {
    const res = await store.addGroup({
      ...forms.value,
    });
    if (res) {
      success("successfully added ");
      openEditModal.value = false;
      location.reload();
    } else {
      danger(store.error);
    }
  }
};

const confirm = async () => {
  const res = await store.deleteGroup(ID.value);
  if (res) {
    warning("Deleted success");
  } else {
    danger("Failed!");
  }
  openDeleteModal.value = false;
  location.reload();
};

defineExpose({ openModal, closeModal, openDelModal });
</script>

<style lang="scss" scoped></style>
