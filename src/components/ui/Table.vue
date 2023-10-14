<template>
  <table class="w-full border-collapse">
    <thead class="bg-color1 text-[14px] uppercase font-normal text-white">
      <tr>
        <th
          class="py-4 pr-5 text-left"
          v-for="(title, index) in header"
          :key="index"
        >
          <span
            v-if="title.value === 'check'"
            class="flex justify-center items-center px-5"
            ><input
              type="checkbox"
              class="w-[18px] h-[18px]"
              @change="selectAll"
          /></span>
          <span v-else>{{ title.title }}</span>
        </th>
      </tr>
    </thead>
    <tbody class="text-left">
      <tr
        class="bg-[#F6FBFF] text-[#065FD4] px-5 h-[70px] select-none cursor-pointer hover:bg-[#ebf6ff]"
        v-for="(item, index) in data"
        :key="index"
        @click="selectOne(item._id)"
      >
        <td class="pr-5" v-for="(col, ind) in header" :key="ind">
          <slot :name="`body_${col.value}`" :item="item">
            {{ item[col.value] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  header: Array,
  data: Array,
});

const selectAll = (val) => {
  // console.log(val.target.checked);
};

const selectOne = (id) => {
  router.push({ path: `/student/${id}` });
};
</script>

<style lang="scss" scoped></style>
