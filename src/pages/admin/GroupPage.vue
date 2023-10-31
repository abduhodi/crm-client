<template>
  <div class="w-full pt-5">
    <div class="w-full">
      <group-modal ref="group_modal"></group-modal>
    </div>
    <loader v-if="store.loading"></loader>
    <div v-else>
      <div class="w-full flex justify-between items-center sm:pr-5 pr-1">
        <h1 class="text-[#002842] text-[22px] font-semibold uppercase">
          Groups ({{ count }})
        </h1>
        <v-button
          type="button"
          btn_type="primary"
          :isLoading="false"
          @click="group_modal?.openModal"
          class="px-10"
          >Add group</v-button
        >
      </div>
      <div class="w-full overflow-auto mt-5">
        <Table
          v-if="store?.groups?.length"
          :header="header"
          :data="store?.groups"
        >
          <template #body_check>
            <span class="w-full flex justify-center items-center"
              ><input type="checkbox" class="w-[18px] h-[18px]"
            /></span>
          </template>
          <template #body_name="{ item }">
            <span @click="selectOne(item._id)" class="w-full">{{
              `${item.name}`
            }}</span>
          </template>
          <template #body_start_date="{ item }">
            <span>{{ formattedDate(item?.start_date) }}</span>
          </template>
          <template #body_end_date="{ item }">
            <span>{{ formattedDate(item?.end_date) }}</span>
          </template>
          <template #body_days="{ item }">
            <span>{{ item?.days ? "Mon/Wed/Fri" : "Tue/Thu/Sat" }}</span>
          </template>
          <template #body_start_time="{ item }">
            <span>{{ formattedTime(item?.start_time) }}</span>
          </template>
          <template #body_end_time="{ item }">
            <span>{{ formattedTime(item?.end_time) }}</span>
          </template>
          <template #body_status="{ item }">
            <span>{{ item?.status ? "Started" : "Finished" }}</span>
          </template>
          <template #body_room="{ item }">
            <span>{{
              item?.room?.name ? `${item?.room?.name}` : "No data"
            }}</span>
          </template>
          <template #body_course="{ item }">
            <span>{{
              item?.course?.name ? `${item?.course?.name}` : "No data"
            }}</span>
          </template>
          <template #body_action="{ item }">
            <span class="w-full flex justify-start items-center">
              <VAction :item="item" :item_action="group_modal"></VAction>
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
          v-if="store?.groups?.length"
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
import GroupModal from "@/pages/admin/Modals/GroupModal.vue";
import Loader from "@/components/loader/Loader.vue";
import { onMounted, ref } from "vue";
import { useAdminGroupStore } from "@/stores/admin/group.js";
import VButton from "@/components/form/VButton.vue";
import Table from "@/components/ui/Table.vue";
import { useRouter } from "vue-router";
import VAction from "@/components/ui/VAction.vue";
import moment from "moment";

const router = useRouter();
const store = useAdminGroupStore();

const formattedDate = (date) => {
  return moment(date).format("DD/MM/YY");
};

const formattedTime = (time) => {
  const hour = parseInt(time / 60)
    .toString()
    .padStart(2, 0);
  const minute = (time % 60).toString().padStart(2, 0);
  return `${hour}:${minute}`;
};

const onClickHandler = async () => {
  count.value = await store.getGroups(params.value);
};

const params = ref({
  page: 1,
  limit: 10,
});

const openModal = (item) => {
  group_modal.openModal(item);
};

const group_modal = ref("");

const header = ref([
  { title: "checkbox", value: "check" },
  { title: "ID", value: "_id" },
  { title: "Group name", value: "name" },
  { title: "Start Date", value: "start_date" },
  { title: "Finish Date", value: "end_date" },
  { title: "Days", value: "days" },
  { title: "Start Time", value: "start_time" },
  { title: "Finish Time", value: "end_time" },
  { title: "Status", value: "status" },
  { title: "Room info", value: "room" },
  { title: "Course info", value: "course" },
  { title: "Action", value: "action" },
]);

const count = ref(0);

onMounted(async () => {
  count.value = await store.getGroups(params.value);
});

const selectOne = (id) => {
  router.push({ path: `/groups/${id}` });
};
</script>

<style lang="scss"></style>
