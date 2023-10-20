<template>
  <div class="w-full flex flex-col">
    <label
      for="password"
      class="text-[18px] text-color1 font-medium mb-1 select-none"
      >Password</label
    >
    <div class="flex justify-between items-center">
      <vee-field
        id="password"
        :type="hidden ? 'password' : 'text'"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        class="custom_style border outline-none rounded-s-lg px-3 py-2 text-[18px] placeholder:text-color1/50 w-[89%] focus:border-color1 select-none"
      />
      <span
        @click="hide"
        class="w-[10%] border-none outline-none rounded-e-lg p-2 text-[18px] placeholder:text-color1 bg-white cursor-pointer flex justify-center items-center py-[9px]"
      >
        <svg-icon
          v-if="hidden"
          type="mdi"
          :path="mdiEye"
          class="text-color1"
        ></svg-icon>
        <svg-icon
          v-else
          type="mdi"
          :path="mdiEyeOff"
          class="text-color1"
        ></svg-icon>
      </span>
    </div>
    <ErrorMessage :name="name" class="text-[16px] text-red-700 select-none" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiEye, mdiEyeOff } from "@mdi/js";
const props = defineProps({
  name: { type: String },
  placeholder: { type: String },
  disabled: { type: Boolean, default: false },
});
const hidden = ref(true);
const hide = () => {
  hidden.value = !hidden.value;
};
</script>

<style lang="scss" scoped></style>
