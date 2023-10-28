import axiosClient from "@/api/axios/apiClient";

export const teacherGroupApi = {
  getTeacherGroups(id) {
    const url = `teachers/get-groups/${id}`;
    return axiosClient.get(url);
  },

  getGroupStudents(id) {
    const url = `groups/attendance/${id}/all/q?`;
    return axiosClient.get(url);
  },

  getLessonAttendance(id) {
    const url = `groups/attendance/${id}/all/q?`;
    return axiosClient.get(url);
  },

  setLessonTitle(id, title) {
    const url = `lessons/lesson/attendance/${id}`;
    return axiosClient.put(url, title);
  },

  updateLessonAttendance(payload) {
    const url = `groups/attendance/update/lesson`;
    return axiosClient.post(url, payload);
  },

  getOneLessonAttendance(id, payload) {
    const url = `groups/attendance/${id}`;
    return axiosClient.post(url, payload);
  },

  getAllLessons(id) {
    const url = `lessons/group/${id}`;
    return axiosClient.get(url);
  },
};
