<template>
  <span class="flex justify-center items-center gap-2">
    <svg-icon
      type="mdi"
      :path="mdiPencil"
      @click="item_action.openModal(item)"
      class="hover:text-orange-600"
    ></svg-icon>
    <svg-icon
      type="mdi"
      :path="mdiTrashCanOutline"
      @click="item_action.openDelModal(item._id)"
      class="hover:text-red-500 text-red-800"
    ></svg-icon>
  </span>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiPencil, mdiTrashCanOutline } from "@mdi/js";

const props = defineProps({
  item: Object,
  item_action: Object | String,
});
</script>

<style lang="scss" scoped></style>
