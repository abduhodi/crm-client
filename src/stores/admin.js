import { defineStore } from "pinia";
import { adminStudentApi } from "../api/admin/adminStudentApi";
export const useAdminStore = defineStore("admin", {
  state: () => ({
    students: null,
    loading: false,
    error: null,
    status: null,
    student: null,
  }),
  actions: {
    async addStudent(payload) {
      try {
        this.loading = true;
        const res = await adminStudentApi.addStudent(payload);
        this.student = res.student;
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
    async getStudents(params) {
      try {
        this.loading = true;
        const res = await adminStudentApi.getStudents(params);
        this.students = res.students;
        return res?.count;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
        this.loading = false;
      }
    },
    async updateStudent(payload, param) {
      try {
        this.loading = true;
        const res = await adminStudentApi.updateStudent(payload, param);
        this.student = res.student;
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

    async deleteStudent(param) {
      try {
        this.loading = true;
        const res = await adminStudentApi.deleteStudent(param);
        this.student = res.student;
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

    async getStudentById(param) {
      try {
        this.loading = true;
        const res = await adminStudentApi.getStudentById(param);
        this.student = res.student;
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
