<template>
  <AppModal v-model="modal.dialog">
    <div class="w-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <Form
          id="form"
          class="w-full bg-white p-8 rounded-xl"
          @submit="save"
          :validation-schema="ProductValidationSchema"
        >
          <label for="name" class="font-medium">Title</label>
          <Field
            id="name"
            v-model="modal.data.title"
            type="text"
            name="name"
            placeholder="title"
            class="mb-1 text-base xl:text-lg xl:mb-1 w-full my-1 xl:my-2 p-2 xl:p-3 pl-5 select-none tracking-wide placeholder:text-slate-400 outline-none border-none bg-gray-200 rounded-lg focus:border-blue-700"
          >
          </Field>
          <ErrorMessage name="name" class="text-base text-red-900 font-[500]" />

          <div class="w-full flex items-center gap-2 mt-5">
            <label for="active" class="font-medium text-lg select-none"
              >Active</label
            >
            <Field
              id="active"
              v-model="checked"
              type="checkbox"
              name="checkbox"
              class="form-checkbox h-5 w-5 text-indigo-600"
            >
            </Field>
          </div>
          <div class="w-full flex justify-between items-center gap-5 mt-5">
            <button
              type="submit"
              class="w-[200px] my-2 text-md font-medium py-3 select-none rounded-lg text-white tracking-wide bg-blue-700 hover:bg-blue-600 active:bg-blue-700"
            >
              Save
            </button>
            <button
              @click="cancel"
              type="button"
              class="w-[200px] text-md font-medium py-3 select-none rounded-lg text-white tracking-wide bg-red-700 hover:bg-red-600 active:bg-red-700"
            >
              cancel
            </button>
          </div>
        </Form>
      </div>
    </div>
  </AppModal>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { ProductValidationSchema } from "@/models/Product.js";
import { ref } from "vue";
import AppModal from "@/components/ui/app-modal.vue";
import { todoStore } from "@/stores/todo.js";
import { modalStore } from "@/stores/modal.js";
const todo = todoStore();
const modal = modalStore();
const checked = ref(false);
const save = () => {
  modal.data.active = checked.value ? false : true;
  if (modal.data?.id) {
    todo.update(modal.data);
  } else {
    todo.add(modal.data);
  }
  modal.closeModal();
};

const cancel = () => {
  modal.closeModal();
};
</script>

<style lang="scss" scoped></style>
