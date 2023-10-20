<template>
  <div class="w-36 px-3 py-2 text-base border rounded-s-full rounded-e-full">
    <span>{{ text }}</span>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const style = ref("");
const text = ref("");
const props = defineProps({
  status: "",
  type: "",
});

style.value = computed(() => {
  if (props.status === "success") {
    text.value = "To'langan";
    return "border-[#73C980]";
  }
});
if (props.type === "payment") {
}
</script>

<style lang="scss" scoped></style>
