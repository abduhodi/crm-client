<template>
  <div class="w-full md:h-screen min-h-screen flex select-none">
    <Sidebar class="h-full"></Sidebar>
    <div class="w-full h-full flex flex-col gap-2 bg-[#E7EDF0]">
      <Header></Header>
      <div class="sm:pl-7 pl-1 pb-5 sm:pr-3 pr-1 h-full overflow-y-auto">
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
