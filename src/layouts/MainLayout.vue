<template>
  <div class="w-full h-screen flex select-none">
    <Sidebar class="h-full"></Sidebar>
    <div class="w-full flex flex-col gap-2 bg-[#E7EDF0]">
      <Header></Header>
      <div class="pl-7 pb-5 pr-3 overflow-auto h-full">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/header/Sidebar.vue";
import Header from "@/components/header/Header.vue";
</script>

<style lang="scss" scoped></style>
