<template>
  <div class="demo-collapse">
    <el-collapse accordion>
      <el-collapse-item
        :name="index"
        v-for="(item, index) in data"
        :key="index"
        class="mt-2"
      >
        <template #title>
          <span class="text-[20px] text-color1 pl-5">{{
            index +
            1 +
            ". " +
            item?.student?.first_name +
            " " +
            item?.student?.last_name
          }}</span>
        </template>
        <div class="flex flex-wrap gap-2 p-5">
          <div
            v-for="(attend, id) in item?.attendance"
            :key="id"
            class="w-[50px] text-center py-1 text-[14px] text-color1 border border-color1 rounded-md hover:bg-color1/10 cursor-pointer relative overflow-hidden"
            :class="{ 'bg-transparent/30': attend?.pass }"
          >
            <el-popover
              placement="top-start"
              title="Title"
              :width="200"
              trigger="hover"
              :content="formatDate(attend?.date)"
            >
              <template #reference>
                {{ formatDay(attend?.date) }}
              </template>
            </el-popover>
            <span
              v-if="attend?.description"
              class="w-4 h-4 bg-red-600 inline-block absolute rotate-45 -top-2"
            ></span>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { InfoFilled } from "@element-plus/icons-vue";
import { formatDay, formatDate } from "@/plugins/moment";

const props = defineProps({
  data: Array,
});
</script>
