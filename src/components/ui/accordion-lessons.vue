<template>
  <add-comment-lesson ref="openAddCommentModal" />
  <div class="demo-collapse">
    <el-collapse accordion>
      <el-collapse-item :name="index" :key="index" class="mt-2">
        <template #title>
          <span class="text-[20px] text-color1 pl-5">Lessons</span>
        </template>
        <div class="flex flex-wrap gap-2 p-5">
          <div
            @click="openAddModal(lesson?._id)"
            v-for="(lesson, id) in data"
            :key="id"
            class="w-[50px] text-center py-1 text-[14px] text-color1 border border-color1 rounded-md hover:bg-color1/10 cursor-pointer relative overflow-hidden"
            :class="{ 'bg-transparent/30': lesson?.pass }"
          >
            <el-popover
              placement="top-start"
              :title="lesson?.title"
              :width="200"
              trigger="hover"
              :content="formatDate(lesson?.date)"
            >
              <template #reference>
                {{ formatDay(lesson?.date) }}
              </template>
            </el-popover>
            <span
              v-if="lesson?.description"
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
import AddCommentLesson from "@/pages/admin/Modals/AddCommentLesson.vue";
import { ref } from "vue";

const openAddCommentModal = ref();

const openAddModal = (id) => {
  console.log(id);
  openAddCommentModal.value.openModal();
};

const props = defineProps({
  data: Array,
  modal: Function,
});

const goLesson = (id) => {
  console.log(id);
};

const openModal = () => {
  props.modal.openModal(123);
};

defineExpose({ openModal });
</script>
