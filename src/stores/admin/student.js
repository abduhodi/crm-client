import { defineStore } from "pinia";
import { adminStudentApi } from "@/api/admin/adminStudentApi";
export const useAdminStudentStore = defineStore("admin-student", {
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
        const res = await adminStudentApi.addStudent(payload);
        this.student = res.student;
        console.log(res);
        return true;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
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
        const res = await adminStudentApi.updateStudent(payload, param);
        this.student = res.student;
        return true;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
      }
    },

    async deleteStudent(param) {
      try {
        const res = await adminStudentApi.deleteStudent(param);
        this.student = res.student;
        return true;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
      }
    },

    async getStudentById(param) {
      try {
        this.loading = true;
        const res = await adminStudentApi.getStudentById(param);
        return res?.student;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
        this.loading = false;
      }
    },

    async getStudentGroups(id) {
      try {
        const res = await adminStudentApi.getStudentGroups(id);
        console.log(res?.groups);
        return res?.groups;
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
