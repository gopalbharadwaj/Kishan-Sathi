import { useState } from "react";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import useAuthStore from "../../store/authStore";

import API from "../../api/axios";

import { useAuth } from "../../context/AuthContext";


const LoginPage = () => {

  const navigate = useNavigate();

  const { login, loading } = useAuthStore();

  const [formData, setFormData] =
    useState({

      email: "",
      password: ""

    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    });

  };

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    try {

      const response =
        await login(formData);

      if (
        response.user.role ===
        "doctor"
      ) {

        navigate(
          "/doctor-dashboard"
        );

      } else {

        navigate(
          "/farmer/dashboard"
        );

      }

    } catch (error) {

      console.log(error);

      alert(
        error.message
      );

    }

  };

  return (

    <div className="min-h-screen bg-[#f0fdf4] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white rounded-[30px] p-8 shadow-sm border border-green-100">

        <div className="text-center">

          <h1 className="text-4xl font-bold">

            Welcome Back

          </h1>

          <p className="text-gray-500 mt-3">

            Login to your account

          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >

          <div>

            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full mt-2 border rounded-xl px-4 py-3 outline-none"
            />

          </div>

          <div>

            <label>Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full mt-2 border rounded-xl px-4 py-3 outline-none"
            />

          </div>

          <button className="w-full bg-green-700 text-white py-3 rounded-xl font-semibold">

            {loading
              ? "Loading..."
              : "Login"}

          </button>

        </form>

      </div>

    </div>

  );

};

export default LoginPage;


