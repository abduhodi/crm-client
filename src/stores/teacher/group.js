import { defineStore } from "pinia";
import { teacherGroupApi } from "@/api/teacher/teacherGroupApi";
export const useTeacherGroupStore = defineStore("teacher-group", {
  state: () => ({
    groups: null,
    loading: false,
    error: null,
    status: null,
    group: null,
  }),
  actions: {
    async getTeacherGroups(id) {
      try {
        const res = await teacherGroupApi.getTeacherGroups(id);
        this.groups = res?.groups;
      } catch (error) {
        this.error = error?.response?.data;
      } finally {
      }
    },

    async getGroupStudents(id) {
      try {
        const res = await teacherGroupApi.getGroupStudents(id);
        return res;
      } catch (error) {
        this.error = error?.response?.data;
      } finally {
      }
    },

    async getOneLessonAttendance(id, payload) {
      try {
        const res = await teacherGroupApi.getOneLessonAttendance(id, payload);
        return res;
      } catch (error) {
        this.error = error?.response?.data;
      } finally {
      }
    },

    async setLessonTitle(id, payload) {
      try {
        const res = await teacherGroupApi.setLessonTitle(id, payload);
        return res;
      } catch (error) {
        this.error = error?.response?.data;
      } finally {
      }
    },

    async updateLessonAttendance(payload) {
      try {
        const res = await teacherGroupApi.updateLessonAttendance(payload);
        return res;
      } catch (error) {
        this.error = error?.response?.data;
      } finally {
      }
    },

    async getAllLessons(id) {
      try {
        const res = await teacherGroupApi.getAllLessons(id);
        console.log(res);
        return res;
      } catch (error) {
        this.error = error?.response?.data;
      } finally {
      }
    },
  },
});
