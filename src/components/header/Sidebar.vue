<template>
  <div>
    <span v-for="(item, index) in menu" :key="index">
      <router-link
        class="flex justify-start gap-4 items-center font-normal text-white text-[20px] pl-[30px] py-[15px] select-none"
        active-class="bg-[#F5FCCD] text-black font-semibold"
        :to="item.path"
        ><Icon type="mdi" :path="item.icon" class="text-[20px]"></Icon>
        {{ item.label }}</router-link
      >
    </span>
  </div>
</template>

<script setup>
import Icon from "@jamescoyle/vue-icon";
const props = defineProps({
  menu: Array,
});
</script>

<style lang="scss" scoped></style>
