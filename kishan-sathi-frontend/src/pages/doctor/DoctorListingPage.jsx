import {
  useEffect,
  useState
} from "react";

import DashboardLayout
  from "../../layout/DashboardLayout";

import {
  FaSearch,
  FaStar,
  FaMapMarkerAlt
} from "react-icons/fa";

import { Link }
  from "react-router-dom";

import {
  getDoctors
} from "../../api/doctorApi";

const DoctorListingPage = () => {

  const [search,
    setSearch] =
    useState("");

  const [doctors,
    setDoctors] =
    useState([]);

  // Fetch Doctors

  useEffect(() => {

    fetchDoctors();

  }, []);

  const fetchDoctors =
    async () => {

      try {

        const data =
          await getDoctors();

        setDoctors(
          Array.isArray(data)
            ? data
            : data.doctors || []
        );

        

      } catch (error) {

        console.log(error);

      }

    };

  // Filter Doctors

  const filteredDoctors =
    Array.isArray(doctors)
      ? doctors.filter((doctor) =>
        doctor.name
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
      )
      : [];

  return (

    <DashboardLayout>

      {/* Heading */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-4xl font-bold text-gray-900">

            Animal Doctors

          </h1>

          <p className="text-gray-500 mt-3">

            Consult verified veterinary experts online

          </p>

        </div>

        {/* Search */}

        <div className="relative w-full lg:w-[350px]">

          <FaSearch className="absolute top-4 left-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search doctors..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full bg-white border rounded-2xl pl-12 pr-5 py-4 outline-none"
          />

        </div>

      </div>

      {/* Doctors Grid */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">

        {filteredDoctors.map(
          (doctor) => (

            <div
              key={doctor._id}
              className="bg-white rounded-[30px] overflow-hidden border hover:shadow-xl transition"
            >

              {/* Image */}

              <div className="relative">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-[280px] w-full object-cover"
                />

                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-2 text-sm font-medium shadow">

                  <FaStar className="text-yellow-500" />

                  4.9

                </div>

              </div>

              {/* Content */}

              <div className="p-6">

                <h2 className="text-2xl font-bold text-gray-900">

                  {doctor.name}

                </h2>

                <p className="text-green-700 font-medium mt-2">

                  {doctor.specialization}

                </p>

                <div className="flex items-center gap-2 text-gray-500 mt-4">

                  <FaMapMarkerAlt />

                  India

                </div>

                <p className="text-gray-500 mt-3">

                  Experience:
                  {" "}
                  {doctor.experience}

                </p>

                {/* Buttons */}

                <div className="flex gap-4 mt-6">

                  <Link
                    to={`/doctor-profile/${doctor._id}`}
                    className="flex-1"
                  >

                    <button className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-2xl font-semibold">

                      Book Appointment

                    </button>

                  </Link>

                  <Link
                    to={`/doctor-profile/${doctor._id}`}
                    className="flex-1"
                  >

                    <button className="w-full border border-green-700 text-green-700 py-3 rounded-2xl font-semibold hover:bg-green-50">

                      View Profile

                    </button>

                  </Link>

                </div>

              </div>

            </div>

          )
        )}

      </div>

    </DashboardLayout>

  );

};

export default DoctorListingPage;