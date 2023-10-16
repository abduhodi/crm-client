<template>
  <nav
    class="w-full bg-color1 flex justify-between items-center px-10 pb-4 pt-[17px] lg:border-l border-color_bg"
  >
    <button class="text-white lg:hidden" @click="isOpen = !isOpen">
      <svg-icon type="mdi" :path="mdiMenu" class="text-white"></svg-icon>
    </button>
    <VSearch></VSearch>
    <div class="flex justify-center items-center gap-[10px] relative">
      <span
        class="w-[35px] h-[35px] flex justify-center items-center bg-white rounded-full"
      >
        <svg-icon
          type="mdi"
          :path="mdiAccountOutline"
          class="text-[#002842]"
        ></svg-icon>
      </span>
      <span class="text-white text-[14px] font-thin">John Doe</span>
      <div class="open_menu">
        <svg-icon
          type="mdi"
          :path="mdiChevronDown"
          class="text-white cursor-pointer hover:rotate-180 duration-300"
        ></svg-icon>
        <div
          class="sub_menu absolute border border-color1 flex flex-col duration-100 right-0 rounded-md w-[100px] items-center bg-white text-color1"
        >
          <span
            class="text-[18px] duration-100 w-full text-center hover:bg-color1 hover:text-white cursor-pointer select-none"
            >setting</span
          >
          <span
            @click="logout"
            class="text-[18px] duration-100 w-full text-center hover:bg-color1 hover:text-white cursor-pointer select-none"
            >logout</span
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import VSearch from "@/components/form/VSearch.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccountOutline, mdiChevronDown, mdiMenu } from "@mdi/js";
import { ref } from "vue";
import { useSideBar } from "@/hooks/UseSideBar.js";
const isOpen = useSideBar();

const open = ref(false);
const rotate = (e) => {
  open.value = !open.value;
  if (open.value) {
    console.log((e.target.style.rotate = "180deg"));
  } else {
    console.log((e.target.style.rotate = "0deg"));
  }
};

const logout = () => {
  localStorage.clear();
  location.reload();
};
</script>

<style lang="scss" scoped>
.sub_menu {
  visibility: hidden;
  top: 45px;
  opacity: 0;
}
.open_menu:hover .sub_menu {
  top: 30px;
  opacity: 1;
  visibility: visible;
}
</style>
