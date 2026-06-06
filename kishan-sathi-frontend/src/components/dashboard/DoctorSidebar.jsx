import {
  FaHome,
  FaCalendarAlt,
  FaComments,
  FaUser,
  FaUsers
} from "react-icons/fa";

import {
  Link,
  useNavigate
} from "react-router-dom";

const DoctorSidebar = () => {

  const navigate =
    useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");

  };

  return (

    <div className="w-[300px] min-h-screen bg-green-900 text-white p-6 flex flex-col justify-between">

      <div>

        <div>

          <h1 className="text-3xl font-bold">

            Kishan Sathi

          </h1>

          <p className="text-green-200 mt-2 text-sm">

            Doctor Portal

          </p>

        </div>

        <div className="mt-12 space-y-4">

          <Link to="/doctor-dashboard">

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-green-800">

              <FaHome />

              Dashboard

            </button>

          </Link>

          <Link to="/doctor-appointments">

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-green-800">

              <FaCalendarAlt />

              Appointments

            </button>

          </Link>

          <Link to="/doctor-patients">

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-green-800">

              <FaUsers />

              Patients

            </button>

          </Link>

          <Link to="/doctor-chat">

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-green-800">

              <FaComments />

              Messages

            </button>

          </Link>

          <Link to="/doctor-profile">

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-green-800">

              <FaUser />

              Profile

            </button>

          </Link>

        </div>

      </div>

      <button
        onClick={handleLogout}
        className="w-full bg-white text-green-900 py-4 rounded-2xl font-semibold"
      >

        Logout

      </button>

    </div>

  );

};

export default DoctorSidebar;