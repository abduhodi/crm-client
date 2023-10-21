<template>
  <div
    class="w-[800px] p-5 flex gap-[50px] font-medium rounded-[10px] border bg-white border-[#12486B]/30 shadow-lg"
  >
    <div
      class="w-1/2 flex flex-col justify-center items-center gap-5 mb-2 mt-2 relative"
    >
      <div
        class="w-44 h-44 rounded-full overflow-hidden flex justify-center items-center border shadow-md"
      >
        <img
          :src="data?.image ? data?.image : 'src/assets/images/avatar.png'"
          alt="avatar"
          class="w-full h-full object-cover"
        />
        <svg-icon
          @click="uploadFile()"
          type="mdi"
          :path="mdiPencil"
          class="hover:text-orange-600 absolute w-[28px] h-[28px] text-color1 top-[180px] right-[60px]"
        ></svg-icon>
        <input
          type="file"
          id="fileInput"
          style="display: none"
          :onchange="handleFile"
        />
      </div>
      <div class="w-full flex justify-center items-center gap-3">
        <span class="text-[#3D444F] text-[20px]">ID:</span>
        <span class="text-[#065FD4] text-[20px]">{{ data?._id }}</span>
      </div>
      <div class="w-full flex justify-between items-center">
        <span class="text-[#3D444F] text-[12px]">Status:</span>
        <span class="text-[#065FD4] text-[14px]">{{ data?.status }}</span>
      </div>
      <div class="w-full flex justify-between items-center">
        <span class="text-[#3D444F] text-[12px]">Start Date:</span>
        <span class="text-[#065FD4] text-[14px]">{{
          format(data?.start_date)
        }}</span>
      </div>
    </div>
    <div class="w-1/2 flex flex-col">
      <vee-form
        :validation-schema="schema"
        :initial-values="props.data"
        @submit="updateProfile"
      >
        <VInput
          type="text"
          name="first_name"
          label="First Name"
          placeholder="Enter your name"
          :disabled="disabled"
        ></VInput>
        <VInput
          type="text"
          name="last_name"
          label="Last Name"
          placeholder="Enter your surname"
          :disabled="disabled"
        ></VInput>
        <VInput
          type="text"
          name="phone"
          label="Phone"
          placeholder="(+998)-90-123-45-67"
          :mask="'(+998)-##-###-##-##'"
          :disabled="disabled"
        ></VInput>
        <div v-if="!disabled" class="flex gap-5">
          <VButton
            btn_type="danger"
            :isLoading="false"
            type="button"
            class="mt-5 w-full text-[18px]"
            @click="cancel"
          >
            Cancel
          </VButton>
          <VButton
            v-if="!disabled"
            btn_type="primary"
            :isLoading="authStore?.loading"
            type="submit"
            class="mt-5 w-full text-[18px]"
          >
            {{ btn_title }}
          </VButton>
        </div>
        <VButton
          v-else
          btn_type="primary"
          :isLoading="false"
          type="button"
          class="mt-5 w-full text-[18px]"
          @click="disabled = false"
        >
          Edit
        </VButton>
      </vee-form>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiPencil } from "@mdi/js";
import VInput from "@/components/form/VInput.vue";
import { computed, ref, watch } from "vue";
import { useAuthStore } from "@/stores/auth/auth.js";
import VButton from "@/components/form/VButton.vue";
import { danger, success } from "@/plugins/Notification.js";
import moment from "moment";

const authStore = useAuthStore();

const disabled = ref(true);

const props = defineProps({
  data: {
    first_name: "",
    last_name: "",
    status: null,
    phone: "",
    image: "",
    role: "",
    start_date: "",
    _id: "",
  },
});

const format = (date) => {
  return new Date(date).toDateString();
};

const cancel = () => {
  disabled.value = true;
};

const schema = computed(() => {
  return {
    first_name: "required|min:2|max:30",
    last_name: "required|min:2|max:30",
    phone: "required",
  };
});

const btn_title = computed(() => {
  if (authStore?.loading) {
    return "Saving";
  } else {
    return "Save";
  }
});

const updateProfile = async (values) => {
  const payload = {
    ...values,
    phone: values.phone
      .split("")
      .filter((char) => char === "+" || !isNaN(+char))
      .join(""),
    image: props.data?.image,
  };
  await authStore.profileUpdate(payload);
  disabled.value = true;
  success("Saved");
};

function uploadFile() {
  const fileInput = document.getElementById("fileInput");
  fileInput.click();
}

async function handleFile(e) {
  const files = e?.target?.files;
  const form = new FormData();
  if (files?.length > 0) {
    form.append("image", files[0]);
    const res = await authStore.uploadImage(form);
    console.log(res);
    props.data.image = res;
  }
}
</script>

<style lang="scss" scoped></style>
