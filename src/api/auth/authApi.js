import axiosClient from "@/api/axios/apiClient";

export const authApi = {
  login(payload) {
    const url = "auth/login";
    return axiosClient.post(url, payload);
  },

  logout() {
    const url = "auth/logout";
    return axiosClient.post(url);
  },

  getProfileInfo() {
    const url = "profile/info";
    return axiosClient.get(url);
  },

  profileUpdate(payload) {
    const url = "profile/update";
    return axiosClient.put(url, payload);
  },

  changePassword(payload) {
    const url = "profile/change-password";
    return axiosClient.post(url, payload);
  },

  uploadImage(payload) {
    const url = "profile/upload-image";
    return axiosClient.post(url, payload);
  },
};
