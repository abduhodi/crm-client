import { defineStore } from "pinia";
import { authApi } from "../api/auth/authApi";
import router from "@/router/index.js";
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
        if (data?.tokens?.access_token) {
          localStorage.setItem("token", data.tokens.access_token);
          localStorage.setItem("role", data?.user?.role);
        }
        if (this.user?.user?.role === "admin") {
          router.push({ name: "admin" });
        } else if (this.user?.user?.role === "student") {
          router.push({ name: "student" });
        } else if (this.user?.user?.role === "director") {
          router.push({ name: "director" });
        } else if (this.user?.user?.role === "teacher") {
          router.push({ name: "teacher" });
        }
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
