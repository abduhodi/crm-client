import axiosClient from "@/api/axios/apiClient";

export const directorTeacherApi = {
  getTeachers(params) {
    const url = `teachers/all/q?page=${params?.page}&limit=${params?.limit}`;
    return axiosClient.get(url);
  },

  getTeacherById(id) {
    const url = `teachers/${id}`;
    return axiosClient.get(url);
  },

  addTeacher(payload) {
    const url = `teachers/add-teacher`;
    return axiosClient.post(url, payload);
  },

  updateTeacher(payload, id) {
    const url = `teachers/update/${id}`;
    return axiosClient.put(url, payload);
  },

  deleteTeacher(id) {
    const url = `teachers/delete/${id}`;
    return axiosClient.delete(url);
  },
};
