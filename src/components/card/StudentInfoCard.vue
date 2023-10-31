<template>
  <div
    class="lg:w-[315px] w-full p-5 flex flex-col gap-[15px] font-medium rounded-[10px] border bg-white border-[#12486B]"
  >
    <div class="w-full flex justify-between items-center">
      <span class="text-[#3D444F] text-[12px]">First Name:</span>
      <span class="text-[#065FD4] text-[14px]">{{ data?.first_name }}</span>
    </div>
    <span class="w-full h-[1px] bg-[#CFD0D3]"></span>
    <div class="w-full flex justify-between items-center">
      <span class="text-[#3D444F] text-[12px]">Last Name:</span>
      <span class="text-[#065FD4] text-[14px]">{{ data?.last_name }}</span>
    </div>
    <span class="w-full h-[1px] bg-[#CFD0D3]"></span>
    <div class="w-full flex justify-between items-center">
      <span class="text-[#3D444F] text-[12px]">Status:</span>
      <span class="text-[#065FD4] text-[14px]">{{ data?.status }}</span>
    </div>
    <span class="w-full h-[1px] bg-[#CFD0D3]"></span>
    <div class="w-full flex justify-between items-center">
      <span class="text-[#3D444F] text-[12px]">Payment:</span>
      <span class="text-[#065FD4] text-[14px]">{{ data?.payment_status }}</span>
    </div>
    <span class="w-full h-[1px] bg-[#CFD0D3]"></span>
    <div class="w-full flex justify-between items-center">
      <span class="text-[#3D444F] text-[12px]">Phone:</span>
      <span class="text-[#065FD4] text-[14px]">{{ data?.phone }}</span>
    </div>
    <span class="w-full h-[1px] bg-[#CFD0D3]"></span>
    <div class="w-full flex justify-between items-center">
      <span class="text-[#3D444F] text-[12px]">Register date:</span>
      <span class="text-[#065FD4] text-[14px]">{{
        formatDate(data?.start_date)
      }}</span>
    </div>
  </div>
</template>

<script setup>
import { formatDate } from "@/plugins/moment.js";

const props = defineProps({
  data: {
    first_name: "ism",
    last_name: "familiya",
    status: "status",
    payment_status: "payment status",
    phone: "phone number",
    register_date: "register date",
    birthday: "birthday",
  },
});
</script>

<style lang="scss" scoped></style>
