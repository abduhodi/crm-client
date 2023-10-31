<template>
  <div
    class="w-full flex justify-between items-center p-6 bg-[#FFFFFF] rounded-[6px] lg:gap-52 cursor-pointer hover:bg-[#fafafa] mb-2"
  >
    <div>
      <span class="text-[#0D1523] text-[16px] font-medium">{{
        data?.name ? data.name : "---"
      }}</span>
      <span
        class="text-[#6E737B] text-[16px] w-fit font-normal flex justify-start items-center gap-3"
        ><span
          class="w-4 h-4 rounded-full bg-green-600"
          :class="{ 'bg-red-600': !data?.status }"
        ></span>
        {{ data?.group ? data.group : "---" }}</span
      >
    </div>
    <svg-icon
      type="mdi"
      :path="mdiChevronRight"
      class="w-5 h-5 text-[#323232]"
    ></svg-icon>
  </div>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChevronRight } from "@mdi/js";

const props = defineProps({
  data: {
    name: String,
    status: String,
    group: String,
  },
});
</script>

<style lang="scss" scoped></style>
