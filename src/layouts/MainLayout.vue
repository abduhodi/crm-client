<template>
  <div class="w-full h-screen flex justify-between">
    <Sidebar
      :menu="AdminMenu"
      class="w-[223px] h-full bg-color1 pt-[70px]"
    ></Sidebar>
    <div class="right">
      <Header></Header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/header/Sidebar.vue";
import Header from "@/components/header/Header.vue";
import { AdminMenu } from "@/components/menu/AdminMenu.js";
</script>

<style lang="scss" scoped>
.right {
  width: calc((100% - 224px));
}
</style>
