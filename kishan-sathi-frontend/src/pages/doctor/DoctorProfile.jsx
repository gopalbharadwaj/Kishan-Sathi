import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoctorLayout from "../../layout/DoctorLayout";
import useAuthStore from "../../store/authStore";

const DoctorProfile = () => {

  const navigate = useNavigate();

  const { user } = useAuthStore();

  const [doctor, setDoctor] = useState(null);

  useEffect(() => {

    if (user) {

      setDoctor(user);

    }

  }, [user]);

  if (!doctor) {

    return (

      <DoctorLayout>

        <div className="text-center mt-20">

          Loading...

        </div>

      </DoctorLayout>

    );

  }

  return (

    <DoctorLayout>

      <div className="bg-white rounded-3xl border p-10">

        <div className="flex flex-col items-center">

          <img
            src={
              doctor.image ||
              "https://via.placeholder.com/200"
            }
            alt=""
            className="w-44 h-44 rounded-full object-cover border-4 border-green-600"
          />

          <h1 className="text-4xl font-bold mt-6">

            {doctor.name}

          </h1>

          <p className="text-green-700 text-xl mt-2">

            {doctor.specialization ||
              "Veterinary Doctor"}

          </p>

          <p className="text-gray-500 mt-2">

            {doctor.email}

          </p>

        </div>

        <div className="grid grid-cols-3 gap-6 mt-10">

          <div className="bg-gray-50 p-6 rounded-2xl text-center">

            <h2 className="text-3xl font-bold">

              {doctor.experience || "0"}

            </h2>

            <p className="text-gray-500">

              Experience

            </p>

          </div>

          <div className="bg-gray-50 p-6 rounded-2xl text-center">

            <h2 className="text-3xl font-bold">

              Doctor

            </h2>

            <p className="text-gray-500">

              Account Type

            </p>

          </div>

          <div className="bg-gray-50 p-6 rounded-2xl text-center">

            <h2 className="text-3xl font-bold">

              Active

            </h2>

            <p className="text-gray-500">

              Status

            </p>

          </div>

        </div>

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-4">

            About Doctor

          </h2>

          <div className="bg-gray-50 rounded-2xl p-6">

            <p className="text-gray-700 leading-8">

              {doctor.summary ||
                "No summary added yet."}

            </p>

          </div>

        </div>

        <div className="mt-10 text-center">

          <button

            onClick={() =>
              navigate(
                "/doctor-profile/edit"
              )
            }

            className="bg-green-700 text-white px-8 py-4 rounded-2xl"

          >

            Edit Profile

          </button>

        </div>

      </div>

    </DoctorLayout>

  );

};

export default DoctorProfile;