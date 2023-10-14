import { ref } from "vue";

const isOpen = ref(false);
export function useSideBar() {
  return isOpen;
}
