<template>
  <div class="w-full pt-5">
    <div class="w-full">
      <student-modal ref="student_modal"></student-modal>
    </div>
    <div class="w-full">
      <delete-modal ref="delete_modal"></delete-modal>
    </div>
    <loader v-if="store.loading"></loader>
    <div v-else>
      <div class="w-full flex justify-between items-center pr-5">
        <h1 class="text-[#002842] text-[22px] font-semibold uppercase">
          O’quvchilar ({{ count }})
        </h1>
        <v-button
          type="button"
          btn_type="primary"
          :isLoading="false"
          @click="openModal()"
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
          <template #body_id="{ item }">
            {{ item._id }}
          </template>
          <template #body_full_name="{ item }">
            {{ `${item.first_name} ${item.last_name}` }}
          </template>
          <template #body_action="{ item }">
            <span class="flex justify-center items-center gap-2 z-50">
              <svg-icon
                type="mdi"
                :path="mdiPencil"
                @click="openModal(item)"
                class="hover:text-orange-600 z-50"
              ></svg-icon>
              <svg-icon
                type="mdi"
                :path="mdiTrashCanOutline"
                @click="deleteStudent(item._id)"
                class="hover:text-red-900 z-50"
              ></svg-icon>
            </span>
          </template>
        </Table>
        <h1
          v-else
          class="w-full text-center text-[20px] text-color1 mt-10 font-medium"
        >
          No data
        </h1>
        <div class="w-full flex justify-end px-5 items-center mt-3">
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
import DeleteModal from "@/pages/admin/Modals/DeleteModal.vue";
import Loader from "@/components/loader/Loader.vue";
import { onMounted, ref } from "vue";
import { useAdminStore } from "@/stores/admin";
import VButton from "@/components/form/VButton.vue";
import Table from "@/components/ui/Table.vue";
import { danger, success, warning } from "@/plugins/Notification";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiPencil, mdiTrashCanOutline } from "@mdi/js";

const store = useAdminStore();

const deleteStudent = (id) => {
  delete_modal.value.openModal(id);
};

const onClickHandler = async () => {
  count.value = await store.getStudents(params.value);
};

const params = ref({
  page: 1,
  limit: 10,
});

const openModal = (item) => {
  student_modal.value.openModal(item);
};

const student_modal = ref();
const delete_modal = ref();

const header = ref([
  { title: "checkbox", value: "check" },
  { title: "ID", value: "id" },
  { title: "Full name", value: "full_name" },
  { title: "Phone number", value: "phone" },
  { title: "Courses", value: "courses" },
  { title: "Groups", value: "groups" },
  { title: "Status", value: "status" },
  { title: "Action", value: "action" },
]);

const count = ref(0);

onMounted(async () => {
  count.value = await store.getStudents(params.value);
});
</script>

<style lang="scss">
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 30px;
  width: 30px;
  border-radius: 20px;
  cursor: pointer;
  background-color: #f2f2f2;
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
