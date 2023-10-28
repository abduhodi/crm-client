import { defineStore } from "pinia";
import { directorStaffsApi } from "@/api/director/directorStaffsApi";
export const useDirectorStaffsStore = defineStore("director-staff", {
  state: () => ({
    staffs: null,
    loading: false,
    error: null,
    status: null,
    staff: null,
    loadingRoles: false,
  }),
  actions: {
    async addStaff(payload) {
      try {
        const res = await directorStaffsApi.addStaff(payload);
        this.staff = res.staff;
        console.log(res);
        return true;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
      }
    },
    async getStaffs(params) {
      try {
        this.loading = true;
        const res = await directorStaffsApi.getStaffs(params);
        this.staffs = res.staffs;
        console.log(res);
        return res;
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
        this.loadingRoles = true;
        const res = await directorStaffsApi.getRoles();
        console.log(res);
        return res?.roles ? res.roles : [];
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
        this.loadingRoles = false;
      }
    },

    async deleteStaff(id) {
      try {
        const res = await directorStaffsApi.deleteStaff(id);
        console.log(res);
        return true;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
      }
    },
  },
});
