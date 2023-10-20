import { defineStore } from "pinia";
import { adminRoomApi } from "@/api/admin/adminRoomApi";
export const useAdminRoomStore = defineStore("admin-room", {
  state: () => ({
    rooms: null,
    loading: false,
    error: null,
    status: null,
    room: null,
  }),
  actions: {
    async addRoom(payload) {
      try {
        this.loading = true;
        const res = await adminRoomApi.addRoom(payload);
        this.room = res.room;
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
    async getRooms(params) {
      try {
        this.loading = true;
        const res = await adminRoomApi.getRooms(params);
        this.rooms = res.rooms;
        return res?.count;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
        this.loading = false;
      }
    },
    async updateRoom(payload, param) {
      try {
        this.loading = true;
        const res = await adminRoomApi.updateRoom(payload, param);
        this.room = res.room;
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

    async deleteRoom(param) {
      try {
        this.loading = true;
        const res = await adminRoomApi.deleteRoom(param);
        this.room = res.room;
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

    async getRoomById(param) {
      try {
        this.loading = true;
        const res = await adminRoomApi.getRoomById(param);
        this.room = res.room;
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
