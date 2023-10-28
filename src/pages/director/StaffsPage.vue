<template>
  <div class="w-full pt-5">
    <div class="w-full">
      <staff-modal ref="staff_modal" :roles="roles"></staff-modal>
    </div>
    <loader v-if="store.loading"></loader>
    <div v-else>
      <div class="w-full flex justify-between items-center pr-5">
        <h1 class="text-[#002842] text-[22px] font-semibold uppercase">
          Staffs ({{ count }})
        </h1>

        <v-button
          type="button"
          btn_type="primary"
          :isLoading="store?.loadingRoles"
          @click="staff_modal.openModal"
          class="px-10"
          >Add Staff</v-button
        >
      </div>
      <div class="mt-3 flex justify-start items-center gap-5">
        <span class="text-color1 text-[18px] font-medium">Filters</span>
        <select
          @change="filterByRole"
          v-model="filters.role"
          class="text-[#002842] text-[16px] font-medium bg-transparent outline-none"
        >
          <option value="" selected hidden>by role</option>
          <option
            v-for="(role, ind) in roles"
            :key="ind"
            :value="role?._id"
            class=""
          >
            {{ role?.name }}
          </option>
        </select>
        <button
          @click="clearFilters"
          class="border-none bg-[#002842] px-3 py-1 text-white text-lg rounded-lg hover:bg-[#002892] active:bg-[#002832]"
          type="button"
        >
          clear filters
        </button>
      </div>
      <div class="w-full mt-2">
        <Table
          v-if="store?.staffs?.length"
          :header="header"
          :data="store?.staffs"
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
          <template #body_start_date="{ item }">
            {{ format(item?.start_date) }}
          </template>
          <template #body_action="{ item }">
            <span class="w-full flex justify-start items-center">
              <VAction :item="item" :item_action="staff_modal"></VAction>
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
          v-if="store?.staffs?.length"
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
import StaffModal from "@/pages/director/Modals/StaffModal.vue";
import Loader from "@/components/loader/Loader.vue";
import { onMounted, ref } from "vue";
import { useDirectorStaffsStore } from "@/stores/director/staffs.js";
import VButton from "@/components/form/VButton.vue";
import Table from "@/components/ui/Table.vue";
import { useRouter } from "vue-router";
import VAction from "@/components/ui/VAction.vue";

const router = useRouter();
const store = useDirectorStaffsStore();

const staff_modal = ref("");

const roles = ref([]);

const filters = ref({
  role: "",
  status: null,
});
const filterByRole = () => {
  console.log(filters.value);
};

const clearFilters = () => {
  filters.value = {
    role: "",
    status: null,
  };
  console.log(filters.value);
};

const onClickHandler = async () => {
  count.value = await store.getStaffs(params.value);
};

const params = ref({
  page: 1,
  limit: 10,
});

const openModal = (item) => {
  staff_modal.openModal(item);
};

const header = ref([
  { title: "checkbox", value: "check" },
  { title: "ID", value: "_id" },
  { title: "Full name", value: "full_name" },
  { title: "Phone number", value: "phone" },
  { title: "Role", value: "role" },
  { title: "Started", value: "start_date" },
  { title: "Status", value: "status" },
  { title: "Action", value: "action" },
]);

const count = ref(0);

onMounted(async () => {
  const res = await Promise.all([
    store.getStaffs(params.value),
    store.getRoles(),
  ]);
  count.value = res[0]?.count;
  roles.value = res[1];
});

const selectOne = (id) => {
  router.push({ name: `director_single_staffs`, params: { id } });
};

const format = (date) => {
  return new Date(date).toLocaleDateString("en-GB");
};
</script>

<style lang="scss"></style>
