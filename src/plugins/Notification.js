import { toast } from "vue3-toastify";

export const danger = (text) => {
  return toast.error(text);
};
export const info = (text) => {
  return toast.info(text);
};
export const warning = (text) => {
  return toast.warn(text);
};
export const success = (text) => {
  return toast.success(text);
};
