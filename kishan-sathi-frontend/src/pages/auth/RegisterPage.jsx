import {
  useState
} from "react";

import API
  from "../../api/axios";

import {
  useNavigate
} from "react-router-dom";

const RegisterPage = () => {

  const navigate =
    useNavigate();

  const [formData,
    setFormData] =
    useState({

      name: "",

      email: "",

      password: "",

      role: "farmer",

      specialization: "",

      experience: "",

      summary: "",

      image: ""

    });

  // Handle Change

  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
          e.target.value

      });

    };

  // Submit

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const response =
          await API.post(

            "/auth/register",

            formData

          );

        alert(
          "Registration Success"
        );

        navigate("/login");

      } catch (error) {

        console.log(error);

        alert(
          error.response.data.message
        );

      }

    };

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#f6f9f7] p-8">

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-2xl rounded-[35px] p-10 border"
      >

        <h1 className="text-4xl font-bold text-center">

          Register

        </h1>

        {/* Name */}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-2xl px-5 py-4 mt-8 outline-none"
        />

        {/* Email */}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-2xl px-5 py-4 mt-5 outline-none"
        />

        {/* Password */}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border rounded-2xl px-5 py-4 mt-5 outline-none"
        />

        {/* Role */}

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border rounded-2xl px-5 py-4 mt-5 outline-none"
        >

          <option value="farmer">

            Farmer

          </option>

          <option value="doctor">

            Doctor

          </option>

        </select>

        {/* Doctor Fields */}

        {formData.role ===
          "doctor" && (

            <>

              <input
                type="text"
                name="specialization"
                placeholder="Specialization"
                value={
                  formData.specialization
                }
                onChange={handleChange}
                className="w-full border rounded-2xl px-5 py-4 mt-5 outline-none"
              />

              <input
                type="text"
                name="experience"
                placeholder="Experience"
                value={
                  formData.experience
                }
                onChange={handleChange}
                className="w-full border rounded-2xl px-5 py-4 mt-5 outline-none"
              />

              <textarea
                name="summary"
                placeholder="Doctor Summary"
                value={
                  formData.summary
                }
                onChange={handleChange}
                className="w-full border rounded-2xl px-5 py-4 mt-5 outline-none h-[140px]"
              />

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {

                  const file = e.target.files[0];

                  if (!file) return;

                  const reader = new FileReader();

                  reader.onloadend = () => {

                    setFormData({
                      ...formData,
                      image: reader.result
                    });

                  };

                  reader.readAsDataURL(file);

                }}
                className="w-full border rounded-2xl px-5 py-4 mt-5 outline-none"
              />

              {formData.image && (

                <img
                  src={formData.image}
                  alt="preview"
                  className="w-32 h-32 rounded-2xl object-cover mt-4"
                />

              )}

            </>

          )}

        {/* Button */}

        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl mt-8 font-semibold"
        >

          Register

        </button>

      </form>

    </div>

  );

};

export default RegisterPage;