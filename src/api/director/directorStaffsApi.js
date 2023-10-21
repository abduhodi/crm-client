import axiosClient from "@/api/axios/apiClient";

export const directorStaffsApi = {
  getStaffs(params) {
    const url = `director/get-staffs/q?page=${params?.page}&limit=${params?.limit}`;
    return axiosClient.get(url);
  },

  getTeachers(params) {
    const url = `teachers/all/q?page=${params?.page}&limit=${params?.limit}`;
    return axiosClient.get(url);
  },

  activateStaff(id) {
    const url = `director/activate-staff/${id}`;
    return axiosClient.post(url);
  },

  getTeacherById(id) {
    const url = `teachers/${id}`;
    return axiosClient.get(url);
  },

  addStaff(payload) {
    const url = `teachers/add-staff`;
    return axiosClient.post(url, payload);
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

  getRoles() {
    const url = `roles/all`;
    return axiosClient.get(url);
  },
};
