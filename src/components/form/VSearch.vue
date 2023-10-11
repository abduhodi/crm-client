<template>
  <div class="w-[300px] relative">
    <input
      type="text"
      placeholder="Qidirish"
      class="w-full rounded-full pl-4 pr-[40px] py-2 text-[14px] border-none outline-none select-none"
    />
    <svg-icon
      type="mdi"
      :path="mdiMagnify"
      class="absolute right-[15px] top-1/4 text-[#002842]"
    ></svg-icon>
  </div>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMagnify } from "@mdi/js";
</script>

<style lang="scss" scoped></style>
