<template>
  <app-modal v-model="modal">
    <div>
      <div>
        <vee-form
          :validation-schema="schema"
          @submit="save"
          :initial-values="titleName"
        >
          <v-input
            name="title"
            label="Enter lesson's theme"
            placeholder="Lesson theme"
            style="margin-bottom: 20px"
            :disabled="data[0]?.lesson?.pass"
          />
          <hr />
          <div
            v-for="(student, index) in data"
            :key="index"
            class="flex justify-between items-center w-full mt-2 border-b pb-2"
          >
            <span>
              {{ student?.student?.first_name }}
              {{ student?.student?.last_name }}
            </span>
            <el-switch
              v-model="student.participated"
              style="
                --el-switch-on-color: #13ce66;
                --el-switch-off-color: #b4b4b4;
              "
              :active-value="true"
              :inactive-value="false"
              :disabled="student.lesson?.pass"
            />
          </div>
          <v-button
            btn_type="info"
            style="padding: 5px 30px; margin-top: 20px"
            type="submit"
            :isLoading="loading"
            :disabled="data[0]?.lesson?.pass"
            >save</v-button
          >
        </vee-form>
      </div>
    </div>
  </app-modal>
</template>

<script setup>
import { computed, ref } from "vue";
import AppModal from "@/components/ui/app-modal.vue";
import VInput from "@/components/form/VInput.vue";
import VButton from "@/components/form/VButton.vue";
import { useTeacherGroupStore } from "@/stores/teacher/group";
import { danger, success, warning } from "@/plugins/Notification.js";

const store = useTeacherGroupStore();

const titleName = ref({
  title: "",
});
const loading = ref(false);

const schema = computed(() => {
  return {
    title: "required|min:5",
  };
});

const data = ref([]);

const modal = ref(false);

const openModal = (item) => {
  data.value = item;
  titleName.value.title = data.value[0]?.lesson?.title;
  modal.value = true;
};

const save = async (val) => {
  loading.value = true;
  const payload = [];
  data.value.forEach((item) => {
    payload.push({ _id: item?._id, participated: item?.participated });
  });
  console.log(payload);
  await Promise.all([
    store.setLessonTitle(data.value[0]?.lesson?._id, val),
    store.updateLessonAttendance({ data: payload }),
  ]);
  loading.value = false;
};

defineExpose({ openModal });
</script>
