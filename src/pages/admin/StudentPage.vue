<template>
  <div class="w-full pt-5">
    <div class="w-full">
      <student-modal ref="student_modal"></student-modal>
    </div>
    <loader v-if="store.loading"></loader>
    <div v-else>
      <div class="w-full flex justify-between items-center pr-5">
        <h1 class="text-[#002842] text-[22px] font-semibold uppercase">
          Students ({{ count }})
        </h1>
        <v-button
          type="button"
          btn_type="primary"
          :isLoading="false"
          @click="student_modal?.openModal"
          class="px-10"
          >Add student</v-button
        >
      </div>
      <div class="w-full mt-5">
        <Table
          v-if="store?.students?.length"
          :header="header"
          :data="store?.students"
        >
          <template #body_check>
            <span class="w-full flex justify-center items-center"
              ><input type="checkbox" class="w-[18px] h-[18px]"
            /></span>
          </template>
          <template #body_full_name="{ item }">
            <span @click="selectOne(item._id)" class="w-full">{{
              `${item.first_name} ${item.last_name}`
            }}</span>
          </template>
          <template #body_action="{ item }">
            <span class="w-full flex justify-start items-center">
              <VAction :item="item" :item_action="student_modal"></VAction>
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
          v-if="store?.students?.length"
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
import StudentModal from "@/pages/admin/Modals/StudentModal.vue";
import Loader from "@/components/loader/Loader.vue";
import { onMounted, ref } from "vue";
import { useAdminStudentStore } from "@/stores/admin/student.js";
import VButton from "@/components/form/VButton.vue";
import Table from "@/components/ui/Table.vue";
import { useRouter } from "vue-router";
import VAction from "@/components/ui/VAction.vue";

const router = useRouter();
const store = useAdminStudentStore();

const onClickHandler = async () => {
  count.value = await store.getStudents(params.value);
};

const params = ref({
  page: 1,
  limit: 10,
});

const openModal = (item) => {
  student_modal?.openModal(item);
};

const student_modal = ref();

const header = ref([
  { title: "checkbox", value: "check" },
  { title: "ID", value: "_id" },
  { title: "Full name", value: "full_name" },
  { title: "Phone number", value: "phone" },
  { title: "Status", value: "status" },
  { title: "Action", value: "action" },
]);

const count = ref(0);

onMounted(async () => {
  count.value = await store.getStudents(params.value);
});

const selectOne = (id) => {
  router.push({ path: `/students/${id}` });
};
</script>

<style lang="scss"></style>
