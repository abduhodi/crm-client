import { defineStore } from "pinia";
import { adminCourseApi } from "@/api/admin/adminCourseApi";
export const useAdminCourseStore = defineStore("admin-course", {
  state: () => ({
    courses: null,
    loading: false,
    error: null,
    status: null,
    course: null,
  }),
  actions: {
    async addCourse(payload) {
      try {
        this.loading = true;
        const res = await adminCourseApi.addCourse(payload);
        this.course = res.course;
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
    async getCourses(params) {
      try {
        this.loading = true;
        const res = await adminCourseApi.getCourses(params);
        this.courses = res.courses;
        return res?.count;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
        this.loading = false;
      }
    },
    async updateCourse(payload, param) {
      try {
        this.loading = true;
        const res = await adminCourseApi.updateCourse(payload, param);
        this.course = res.course;
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

    async deleteCourse(param) {
      try {
        this.loading = true;
        const res = await adminCourseApi.deleteCourse(param);
        this.course = res.course;
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

    async getCourseById(param) {
      try {
        this.loading = true;
        const res = await adminCourseApi.getCourseById(param);
        this.course = res.course;
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
