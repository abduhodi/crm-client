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
        const res = await adminCourseApi.addCourse(payload);
        this.course = res.course;
        console.log(res);
        return true;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
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
        const res = await adminCourseApi.updateCourse(payload, param);
        this.course = res.course;
        console.log(res);
        return true;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
      }
    },

    async deleteCourse(param) {
      try {
        const res = await adminCourseApi.deleteCourse(param);
        this.course = res.course;
        console.log(res);
        return true;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
      }
    },

    async getCourseById(param) {
      try {
        this.loading = true;
        const res = await adminCourseApi.getCourseById(param);
        this.course = res.course;
        console.log(res);
        return res.course;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
        this.loading = false;
      }
    },

    async addTeacherToCourse(payload) {
      try {
        const res = await adminCourseApi.addTeacherToCourse(payload);
        console.log(res);
        return true;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
      }
    },

    async getCourseTeachers(id) {
      try {
        const res = await adminCourseApi.getCourseTeachers(id);
        console.log(res);
        return res.teachers;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
      }
    },

    async searchTeachers(payload) {
      try {
        const res = await adminCourseApi.searchTeachers(payload);
        console.log(res);
        return res?.teacher;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
      }
    },

    async getCourseGroups(id) {
      try {
        const res = await adminCourseApi.getCourseGroups(id);
        console.log(res);
        return res?.groups;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
      }
    },
  },
});
