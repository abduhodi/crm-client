<template>
  <div
    class="w-full flex justify-between items-center p-6 bg-[#FFFFFF] rounded-[6px] gap-52 cursor-pointer hover:bg-[#fafafa] mb-2"
  >
    <div>
      <span class="text-[#0D1523] text-[16px] font-medium">{{
        data?.name
      }}</span>
      <span
        class="text-[#6E737B] text-[12px] font-normal flex justify-start items-center gap-3"
        >{{ data?.teacher }} • {{ data?.city }} • {{ data?.group }}</span
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
    name: "Course title",
    teacher: "Hakimov_Doniyor",
    city: "Namangan",
    group: "Al - Beruniy(12 kishilik)",
  },
});
</script>

<style lang="scss" scoped></style>
