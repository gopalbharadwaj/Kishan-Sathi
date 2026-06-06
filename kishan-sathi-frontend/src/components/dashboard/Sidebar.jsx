import {
  FaHome,
  FaLeaf,
  FaUserMd,
  FaCalendarAlt,
  FaComments
} from "react-icons/fa";

import { Link, useNavigate }
  from "react-router-dom";

const Sidebar = () => {

  const navigate =
    useNavigate();

  // Logout

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");

  };

  return (

    <div className="w-[300px] min-h-screen bg-green-900 text-white p-6 flex flex-col justify-between">

      {/* Top */}

      <div>

        {/* Logo */}

        <div>

          <h1 className="text-3xl font-bold">

            Kishan Sathi

          </h1>

          <p className="text-green-200 mt-2 text-sm">

            Smart Farming Platform

          </p>

        </div>

        {/* Menu */}

        <div className="mt-12 space-y-4">

          {/* Dashboard */}

          <Link to="/farmer/dashboard">

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-green-800 hover:bg-green-700 transition">

              <FaHome />

              Dashboard

            </button>

          </Link>

          {/* Crop Diagnosis */}

          <Link to="/crop-diagnosis">

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-green-800 transition">

              <FaLeaf />

              Crop Diagnosis

            </button>

          </Link>

          {/* Doctors */}

          <Link to="/animal-doctor">

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-green-800 transition">

              <FaUserMd />

              Doctors

            </button>

          </Link>

          {/* Appointments */}

          <Link to="/appointments">

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-green-800 transition">

              <FaCalendarAlt />

              Appointments

            </button>

          </Link>

          {/* Messages */}

          <Link to="/chat">

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-green-800 transition">

              <FaComments />

              Messages

            </button>

          </Link>

        </div>

      </div>

      {/* Bottom */}

      <div>

        <button
          onClick={handleLogout}
          className="w-full bg-white text-green-900 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition"
        >

          Logout

        </button>

      </div>

    </div>

  );

};

export default Sidebar;