<template>
  <div class="w-fit flex flex-col gap-1 relative text-[18px]">
    <input
      id="tel_input"
      type="text"
      placeholder="Phone"
      v-model="phone"
      v-mask="'(+###)-##-###-##-##'"
      class="w-[350px] pr-[20px] pl-[140px] py-2 rounded-xl border outline-none"
    />

    <span
      @click="showCountry"
      class="border w-16 h-9 flex justify-between items-center px-2 rounded-lg select-none cursor-pointer absolute left-[5px] top-[3px]"
    >
      <span
        class="fi text-[26px] rounded-[5px]"
        :class="flag ? flag : 'fi-uz'"
      ></span>
      <span>v</span>
    </span>
    <span class="absolute top-[8px] left-[75px] w-[50px] text-right">{{
      telCode
    }}</span>
    <div
      v-if="show"
      class="w-fit h-[400px] overflow-auto border flex flex-col gap-[2px] rounded-md p-2"
    >
      <span
        v-for="(code, id) in countries"
        :key="id"
        :value="code"
        class="text-[20px] flex flex-nowrap gap-3 select-none cursor-pointer hover:bg-slate-200"
        @click="getCode(code)"
      >
        <span
          class="fi text-[26px] rounded-[5px]"
          :class="'fi-' + code.toLowerCase()"
        ></span>
        <span class="">{{ getCountryData(code)?.name }}</span>
        <span>{{ "+" + getCountryData(code)?.phone?.at(0) }}</span>
      </span>
    </div>

    <button type="submit" @click="save">save</button>
  </div>
</template>

<script setup>
import examples from "libphonenumber-js/mobile/examples";
import { getCountryData } from "countries-list";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { ref, watch } from "vue";
import parsePhoneNumber, {
  AsYouType,
  getCountries,
  getPhoneCode,
  getExampleNumber,
  formatIncompletePhoneNumber,
} from "libphonenumber-js";

const countries = getCountries().slice(1);
const show = ref(false);
const phone = ref("");
const flag = ref(null);
const telCode = ref("(+998)");
watch(phone, (val) => {
  console.log(val, "watch");
  formatIncompletePhoneNumber(val.toString());
});
const showCountry = () => {
  show.value = !show.value;
};

const getCode = (code) => {
  const phoneNumber = getExampleNumber(code, examples);
  console.log(phoneNumber.formatInternational());
  show.value = false;
  flag.value = "fi-" + code.toLowerCase();
  telCode.value = `(+${getCountryData(code).phone[0]})`;
  const all = new AsYouType(code).input("+9989369");
  console.log(formatIncompletePhoneNumber(all), "all");
};

const save = () => {
  console.log(getCountries());
  console.log(getPhoneCode("AC"));
  console.log(getCountryData("AC"));

  // console.log(phone.value);
  const phoneNumber = parsePhoneNumber(phone.value, "RU");
  console.log(phoneNumber);
};
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>

<!-- npm i libphonenumber-js -->
<!-- npm i flag-icons -->
<!-- npm i countries-list -->
<!-- npm i vue-the-mask -->
