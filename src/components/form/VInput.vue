<template>
  <div class="w-full flex flex-col">
    <label
      :for="name"
      class="text-[18px] text-color1 font-medium mb-1 select-none"
      >{{ label }}</label
    >
    <vee-field
      :id="name"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      v-mask="mask"
      masked="true"
      class="border outline-none rounded-lg px-3 py-2 text-[18px] placeholder:text-color1/50 focus:border-color1"
    />
    <ErrorMessage :name="name" class="text-[16px] text-red-700 select-none" />
  </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String },
  name: { type: String },
  type: { type: String, default: "text" },
  placeholder: { type: String },
  mask: { type: String },
});
</script>

<style lang="scss" scoped></style>
