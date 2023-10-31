<template>
  <div class="app-modal" :class="{ 'app-modal-show': modelValue }">
    <app-transition>
      <div v-if="modelValue" class="app-modal__body">
        <slot></slot>
      </div>
    </app-transition>
  </div>
  <app-transition>
    <span
      @click="$emit('update:modelValue', false)"
      v-if="modelValue"
      class="app-modal-shadow"
    >
    </span>
  </app-transition>
</template>

<script setup>
import AppTransition from "@/components/ui/app-transition.vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.app-modal {
  position: fixed;
  transform: translate(-50%, -50%);
  left: 50%;
  width: 40%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  background-color: white;
  z-index: -1;
  opacity: 0;
  overflow: auto;
  border-radius: 0.5rem;
}
.app-modal-show {
  opacity: 1;
  z-index: 100;
}
::-webkit-scrollbar {
  display: none;
}
.app-modal__body {
  width: 80%;
  padding: 30px;
}
.app-modal-shadow {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 89;
}
@media (max-width: 990px) {
  .app-modal {
    width: 70%;
  }
}
@media (max-width: 768px) {
  .app-modal {
    width: 80%;
  }
}
@media (max-width: 576px) {
  .app-modal {
    width: 90%;
  }
  .app-modal__body {
    width: 100%;
  }
}
</style>
