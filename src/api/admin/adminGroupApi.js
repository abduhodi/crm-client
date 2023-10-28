import axiosClient from "@/api/axios/apiClient";

export const adminGroupApi = {
  getGroups(params) {
    const url = `groups/all/q?page=${params?.page}&limit=${params?.limit}`;
    return axiosClient.get(url);
  },

  getGroupById(id) {
    const url = `groups/${id}`;
    return axiosClient.get(url);
  },

  getGroupStudents(id) {
    const url = `groups/attendance/${id}/all/q?`;
    return axiosClient.get(url);
  },

  getAvailableRooms(payload) {
    const url = `groups/available-rooms`;
    return axiosClient.post(url, payload);
  },

  addGroup(payload) {
    const url = `groups/create-group`;
    return axiosClient.post(url, payload);
  },

  updateGroup(payload, id) {
    const url = `groups/update/${id}`;
    return axiosClient.put(url, payload);
  },

  deleteGroup(id) {
    const url = `groups/delete/${id}`;
    return axiosClient.delete(url);
  },

  addStudentToGroup(payload) {
    const url = `groups/add-student`;
    return axiosClient.post(url, payload);
  },

  addTeacherToGroup(payload) {
    const url = `groups/add-teacher`;
    return axiosClient.post(url, payload);
  },

  getGroupCourseTeachers(id) {
    const url = `courses/all-teachers/${id}`;
    return axiosClient.get(url);
  },
};
