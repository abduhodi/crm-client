import axiosClient from "@/api/axios/apiClient";

export const adminCourseApi = {
  getCourses(params) {
    const url = `courses/all/q?page=${params?.page}&limit=${params?.limit}`;
    return axiosClient.get(url);
  },

  getCourseById(id) {
    const url = `courses/${id}`;
    return axiosClient.get(url);
  },

  addCourse(payload) {
    const url = `courses/create-course`;
    return axiosClient.post(url, payload);
  },

  updateCourse(payload, id) {
    const url = `courses/update/${id}`;
    return axiosClient.put(url, payload);
  },

  deleteCourse(id) {
    const url = `courses/delete/${id}`;
    return axiosClient.delete(url);
  },
};
