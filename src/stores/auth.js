import { defineStore } from "pinia";
import { authApi } from "../api/authApi";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loading: false,
    error: null,
  }),
  getters: {},
  actions: {
    async login(payload) {
      try {
        this.loading = true;
        const data = await authApi.login(payload);
        this.user = JSON.parse(JSON.stringify(data));
      } catch (error) {
        this.error = error?.response?.data?.message
          ? error?.response?.data?.message
          : error.message;
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
