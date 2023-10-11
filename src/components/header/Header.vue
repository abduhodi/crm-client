<template>
  <div
    class="w-full h-[70px] bg-color1 flex justify-between items-center px-10"
  >
    <VSearch></VSearch>
    <div class="flex justify-center items-center gap-[10px]">
      <span
        class="w-[35px] h-[35px] flex justify-center items-center bg-white rounded-full"
      >
        <svg-icon
          type="mdi"
          :path="mdiAccountOutline"
          class="text-[#002842]"
        ></svg-icon>
      </span>
      <span class="text-white text-[12px] font-thin">John Doe</span>
      <svg-icon
        type="mdi"
        :path="mdiChevronDown"
        class="text-white cursor-pointer hover:rotate-180 transition-all duration-300"
      ></svg-icon>
    </div>
  </div>
</template>

<script setup>
import VSearch from "@/components/form/VSearch.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccountOutline, mdiChevronDown } from "@mdi/js";
import { ref } from "vue";

const open = ref(false);
const rotate = (e) => {
  open.value = !open.value;
  if (open.value) {
    console.log((e.target.style.rotate = "180deg"));
  } else {
    console.log((e.target.style.rotate = "0deg"));
  }
};
</script>

<style lang="scss" scoped></style>
