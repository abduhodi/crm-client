<template>
  <div class="w-full pt-5">
    <div class="w-full">
      <course-modal ref="course_modal"></course-modal>
    </div>
    <loader v-if="store.loading"></loader>
    <div v-else>
      <div class="w-full flex justify-between items-center pr-5">
        <h1 class="text-[#002842] text-[22px] font-semibold uppercase">
          Courses ({{ count }})
        </h1>
        <v-button
          type="button"
          btn_type="primary"
          :isLoading="false"
          @click="course_modal.openModal"
          class="px-10"
          >Add course</v-button
        >
      </div>
      <div class="w-full mt-5">
        <Table
          v-if="store?.courses?.length"
          :header="header"
          :data="store?.courses"
        >
          <template #body_check>
            <span class="w-full flex justify-center items-center"
              ><input type="checkbox" class="w-[18px] h-[18px]"
            /></span>
          </template>
          <!-- <template #body_id="{ item }">
            {{ item._id }}
          </template> -->
          <template #body_name="{ item }">
            <span @click="selectOne(item._id)" class="w-full">{{
              `${item.name}`
            }}</span>
          </template>
          <template #body_action="{ item }">
            <span class="w-full flex justify-start items-center">
              <VAction :item="item" :item_action="course_modal"></VAction>
            </span>
          </template>
        </Table>
        <h1
          v-else
          class="w-full text-center text-[20px] text-color1 mt-10 font-medium"
        >
          No data
        </h1>
        <div
          v-if="store?.courses?.length"
          class="w-full flex justify-end px-5 items-center mt-3"
        >
          <vue-awesome-paginate
            :total-items="count"
            :items-per-page="params.limit"
            :max-pages-shown="2"
            v-model="params.page"
            :on-click="onClickHandler"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CourseModal from "@/pages/admin/Modals/CourseModal.vue";
import Loader from "@/components/loader/Loader.vue";
import { onMounted, ref } from "vue";
import { useAdminCourseStore } from "@/stores/admin/course.js";
import VButton from "@/components/form/VButton.vue";
import Table from "@/components/ui/Table.vue";
import { useRouter } from "vue-router";
import VAction from "@/components/ui/VAction.vue";

const router = useRouter();
const store = useAdminCourseStore();

const onClickHandler = async () => {
  count.value = await store.getCourses(params.value);
};

const params = ref({
  page: 1,
  limit: 10,
});

const openModal = (item) => {
  course_modal.openModal(item);
};

const course_modal = ref("");

const header = ref([
  { title: "checkbox", value: "check" },
  { title: "ID", value: "_id" },
  { title: "Course name", value: "name" },
  { title: "Price", value: "price" },
  { title: "Period", value: "period" },
  { title: "Action", value: "action" },
]);

const count = ref(0);

onMounted(async () => {
  count.value = await store.getCourses(params.value);
});

const selectOne = (id) => {
  router.push({ path: `/courses/${id}` });
};
</script>

<style lang="scss"></style>
