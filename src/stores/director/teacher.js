import { defineStore } from "pinia";
import { directorTeacherApi } from "@/api/director/directorTeacherApi";
export const useDirectorTeacherStore = defineStore("director-teacher", {
  state: () => ({
    teachers: null,
    loading: false,
    error: null,
    status: null,
    teacher: null,
  }),
  actions: {
    async addTeacher(payload) {
      try {
        this.loading = true;
        const res = await directorTeacherApi.addTeacher(payload);
        this.teacher = res.teacher;
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
    async getTeachers(params) {
      try {
        this.loading = true;
        const res = await directorTeacherApi.getTeachers(params);
        this.teachers = res.teachers;
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
    async updateTeacher(payload, param) {
      try {
        this.loading = true;
        const res = await directorTeacherApi.updateTeacher(payload, param);
        this.teacher = res.teacher;
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

    async deleteTeacher(param) {
      try {
        this.loading = true;
        const res = await directorTeacherApi.deleteTeacher(param);
        this.teacher = res.teacher;
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

    async getTeacherById(param) {
      try {
        this.loading = true;
        const res = await directorTeacherApi.getTeacherById(param);
        this.teacher = res.teacher;
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
  },
});
