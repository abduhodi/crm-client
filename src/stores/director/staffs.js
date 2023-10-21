import { defineStore } from "pinia";
import { directorStaffsApi } from "@/api/director/directorStaffsApi";
export const useDirectorStaffsStore = defineStore("director-staff", {
  state: () => ({
    staffs: null,
    loading: false,
    error: null,
    status: null,
    staff: null,
  }),
  actions: {
    async addStaff(payload) {
      try {
        this.loading = true;
        const res = await directorStaffsApi.addStaff(payload);
        this.staff = res.staff;
        console.log(res);
        return true;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
        this.loading = false;
      }
    },
    async getStaffs(params) {
      try {
        this.loading = true;
        const res = await directorStaffsApi.getStaffs(params);
        this.staffs = res.staffs;
        console.log(res);
        return res?.count;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
        this.loading = false;
      }
    },

    async getRoles() {
      try {
        this.loading = true;
        const res = await directorStaffsApi.getRoles();
        console.log(res);
        return res?.roles ? res.roles : [];
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
        this.loading = false;
      }
    },
  },
});
