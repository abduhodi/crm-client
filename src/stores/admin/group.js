import { defineStore } from "pinia";
import { adminGroupApi } from "@/api/admin/adminGroupApi";
export const useAdminGroupStore = defineStore("admin-group", {
  state: () => ({
    groups: null,
    loading: false,
    error: null,
    status: null,
    group: null,
  }),
  actions: {
    async addGroup(payload) {
      try {
        const res = await adminGroupApi.addGroup(payload);
        this.group = res.group;
        console.log(res);
        return true;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
      }
    },
    async getGroups(params) {
      try {
        this.loading = true;
        const res = await adminGroupApi.getGroups(params);
        this.groups = res.groups;
        return res?.count;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
        this.loading = false;
      }
    },
    async updateGroup(payload, param) {
      try {
        const res = await adminGroupApi.updateGroup(payload, param);
        this.group = res.group;
        return true;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
      }
    },

    async deleteGroup(param) {
      try {
        const res = await adminGroupApi.deleteGroup(param);
        this.group = res.group;
        return true;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
      }
    },

    async getGroupById(param) {
      try {
        this.loading = true;
        const res = await adminGroupApi.getGroupById(param);
        this.group = res?.group;
        return res?.group;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
        this.loading = false;
      }
    },

    async getGroupStudents(param) {
      try {
        const res = await adminGroupApi.getGroupStudents(param);
        return res;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
      }
    },

    async getAvailableRooms(payload) {
      try {
        const res = await adminGroupApi.getAvailableRooms(payload);
        return res;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
      }
    },

    async addStudentToGroup(payload) {
      try {
        await adminGroupApi.addStudentToGroup(payload);
        return true;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
      }
    },

    async addTeacherToGroup(payload) {
      try {
        await adminGroupApi.addTeacherToGroup(payload);
        return true;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
      }
    },

    async getGroupCourseTeachers(id) {
      try {
        const res = await adminGroupApi.getGroupCourseTeachers(id);
        console.log(res);
        return res;
      } catch (error) {
        this.error = error?.response?.data;
      } finally {
      }
    },
  },
});
