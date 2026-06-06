import { create } from "zustand";

import api from "../api/axios";

const useAuthStore = create((set) => ({

  user: JSON.parse(
    localStorage.getItem("user")
  ) || null,

  token: localStorage.getItem("token") || null,

  loading: false,

  // Register

  register: async (formData) => {

    try {

      set({ loading: true });

      const res = await api.post(
        "/api/auth/register",
        formData
      );

      set({
        loading: false
      });

      return res.data;

    } catch (error) {

      set({
        loading: false
      });

      throw error.response.data;

    }

  },

  // Login

  login: async (formData) => {

    try {

      set({ loading: true });

      const res = await api.post(
        "/api/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          res.data.user
        )
      );

      set({

        token: res.data.token,

        user: res.data.user,

        loading: false

      });

      set({

        token: res.data.token,

        user: res.data.user,

        loading: false

      });

      return res.data;

    } catch (error) {

      set({
        loading: false
      });

      throw error.response.data;

    }

  },

  // Logout

  logout: () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    set({
      user: null,
      token: null
    });

  }

}));

export default useAuthStore;