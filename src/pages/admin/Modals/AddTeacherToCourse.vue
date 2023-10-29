<template>
  <AppModal v-model="modal">
    <h1 class="text-color1 text-[24px] w-full text-center font-medium">
      Add Teacher to course
    </h1>
    <div class="flex flex-col justify-between items-center gap-3 mb-2 mt-5">
      <form
        @submit.prevent="searchTeachers"
        class="flex justify-center items-center gap-5"
      >
        <input
          required
          type="number"
          v-model="search"
          class="w-full px-3 py-2 outline-none border rounded-md text-lg"
        />
        <VButton
          type="submit"
          btn_type="info"
          :isLoading="searching"
          class="w-[200px] mx-auto"
          >search</VButton
        >
      </form>
    </div>
    <div
      v-for="(item, index) in inputData"
      :key="index"
      class="w-full flex justify-between items-center gap-3 mt-5 border-b pb-3 text-color1 text-lg font-medium"
    >
      <span>{{ `${item.first_name} ${item.last_name}` }}</span>
      <span>{{ `${item.phone}` }}</span>

      <div v-if="loading">
        <svg
          aria-hidden="true"
          class="w-4 h-4 text-[white] animate-spin dark:text-gray-600 fill-[white] ml-2"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
      <svg-icon
        v-else
        @click="addTeacher(item?._id)"
        type="mdi"
        :path="mdiAccountPlusOutline"
        class="w-10 h-10 text-color1 hover:text-green-700 cursor-pointer"
      ></svg-icon>
    </div>
  </AppModal>
</template>

<script setup>
import AppModal from "@/components/ui/app-modal.vue";
import { ref, watch, computed, onMounted } from "vue";
import VInput from "@/components/form/VInput.vue";
import VButton from "@/components/form/VButton.vue";
import { useAdminCourseStore } from "@/stores/admin/course";
import { useRoute } from "vue-router";
import { danger, success, warning } from "@/plugins/Notification.js";
import Table from "@/components/ui/Table.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccountPlusOutline } from "@mdi/js";

const store = useAdminCourseStore();
const teachers = ref([]);
const current_teachers = ref([]);
const route = useRoute();
const search = ref("");
const searching = ref(false);
const loading = ref(false);
const isLoading = ref(false);
const modal = ref(false);
const inputData = ref([]);

const addTeacher = async (id) => {
  loading.value = true;
  const payload = {
    course: route.params.id,
    teacher: id,
  };
  if (!payload.course || !payload.teacher) {
    warning("course or teacher shoul not be empty");
    loading.value = false;
    return;
  }
  const res = await store.addTeacherToCourse(payload);
  if (res) {
    success("Teacher added successfully");
  } else {
    danger(store?.error?.message);
  }
  loading.value = false;
};

watch(search, async (value) => {
  if (value?.toString()?.length == 0) {
    inputData.value = [];
  }
});

const searchTeachers = async () => {
  searching.value = true;
  const data = await store.searchTeachers({ phone: search.value });
  inputData.value = data;
  searching.value = false;
};

watch(modal, (val) => {
  if (!val) modal.value = false;
});

const openModal = (data) => {
  modal.value = true;
  current_teachers.value = data;
};

const closeModal = () => {
  modal.value = false;
};

defineExpose({ openModal });
</script>

<style lang="scss" scoped></style>
