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
      <svg-icon
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
  console.log(payload);
  const res = await store.addTeacherToCourse(payload);
  if (res) {
    success("Teacher added successfully");
  } else {
    danger(store?.error?.message);
  }
  loading.value = false;
};

const inputData = ref([]);

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

const loading = ref(false);

const modal = ref(false);

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
