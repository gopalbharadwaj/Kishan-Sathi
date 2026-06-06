import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  FaStar,
  FaMapMarkerAlt
} from "react-icons/fa";

import {
  getDoctors
} from "../../api/doctorApi";

const DoctorSection = () => {

  const navigate =
    useNavigate();

  const [
    doctors,
    setDoctors
  ] = useState([]);

  useEffect(() => {

    loadDoctors();

  }, []);

  const loadDoctors =
    async () => {

      try {

        const data =
          await getDoctors();

        setDoctors(
          data.doctors ||
          data ||
          []
        );

      } catch (error) {

        console.log(error);

      }

    };

  return (

    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div>

            <h2 className="text-4xl font-bold text-gray-900">

              Consult Animal Doctors

            </h2>

            <p className="text-gray-500 mt-4">

              Connect with verified veterinary experts online

            </p>

          </div>

          <button

            onClick={() =>
              navigate("/login")
            }

            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold w-fit"

          >

            View All Doctors

          </button>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {

            doctors.map(
              (doctor) => (

                <div

                  key={doctor._id}

                  className="bg-[#f0fdf4] rounded-[30px] overflow-hidden border border-green-100 hover:shadow-xl transition"

                >

                  <div className="relative">

                    <img

                      src={
                        doctor.image ||
                        "https://via.placeholder.com/500"
                      }

                      alt={doctor.name}

                      className="h-[280px] w-full object-cover"

                    />

                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-2 text-sm font-medium shadow">

                      <FaStar className="text-yellow-500" />

                      4.9

                    </div>

                  </div>

                  <div className="p-6">

                    <h3 className="text-2xl font-bold text-gray-900">

                      {doctor.name}

                    </h3>

                    <p className="text-green-700 font-medium mt-2">

                      {

                        doctor.specialization ||

                        "Veterinary Doctor"

                      }

                    </p>

                    <div className="flex items-center gap-2 text-gray-500 mt-4">

                      <FaMapMarkerAlt />

                      India

                    </div>

                    <p className="text-gray-500 mt-3">

                      Experience: {

                        doctor.experience ||

                        "0 Years"

                      }

                    </p>

                    <button

                      onClick={() =>
                        navigate("/login")
                      }

                      className="mt-6 w-full bg-green-700 text-white py-3 rounded-xl"

                    >

                      Book Appointment

                    </button>

                  </div>

                </div>

              )

            )

          }

        </div>

      </div>

    </section>

  );

};

export default DoctorSection;