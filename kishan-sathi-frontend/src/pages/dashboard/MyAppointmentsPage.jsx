import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../layout/DashboardLayout";

import {
  FaCalendarAlt,
  FaComments
} from "react-icons/fa";

import { getMyAppointments } from "../../api/appointmentApi";

const MyAppointmentsPage = () => {

  const navigate = useNavigate();
  
  const [appointments, setAppointments] = useState([]);

  // Fetch Appointments

  useEffect(() => { fetchAppointments(); }, []);

  const fetchAppointments = async () => {

    try {

      const data = await getMyAppointments();

      setAppointments(data.appointments || []);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <DashboardLayout>

      {/* Heading */}

      <div>

        <h1 className="text-4xl font-bold text-gray-900">

          My Appointments

        </h1>

        <p className="text-gray-500 mt-3">

          Manage all your doctor consultations

        </p>

      </div>

      {/* Appointments */}

      <div className="space-y-8 mt-10">

        {appointments.length === 0 ? (

          <div className="bg-white rounded-[30px] border p-10 text-center">

            <h2 className="text-2xl font-bold text-gray-700">

              No Appointments Found

            </h2>

          </div>

        ) : (

          appointments.map((appointment) => (

            <div
              key={appointment._id}
              className="bg-white rounded-[30px] border p-6 flex flex-col lg:flex-row gap-8"
            >

              {/* Image */}

              <img
                src={
                  appointment.doctorId?.image ||
                  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop"
                }
                alt={
                  appointment.doctorId?.name
                }
                className="w-full lg:w-[250px] h-[220px] object-cover rounded-3xl"
              />

              {/* Content */}

              <div className="flex-1">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                  <div>

                    <h2 className="text-3xl font-bold text-gray-900">

                      {
                        appointment.doctorId?.name
                      }

                    </h2>

                    <p className="text-green-700 font-medium mt-3">

                      {
                        appointment.doctorId?.specialization
                      }

                    </p>

                  </div>

                  {/* Status */}

                  <div
                    className={`px-5 py-3 rounded-2xl font-semibold w-fit ${appointment.status ===
                      "accepted"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                      }`}
                  >

                    {appointment.status}

                  </div>

                </div>

                {/* Date */}

                <div className="flex items-center gap-3 mt-8 text-gray-600">

                  <FaCalendarAlt />

                  {
                    appointment.appointmentDate
                  }

                </div>

                {/* Buttons */}

                <div className="flex flex-wrap gap-4 mt-8">

                  {appointment.status ===
                    "accepted" && (

                      <button
                        onClick={() =>
                          navigate("/chat")
                        }
                        className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl font-semibold flex items-center gap-3"
                      >

                        <FaComments />

                        Chat

                      </button>

                    )}

                </div>

              </div>

            </div>

          )
          )

        )}

      </div>

    </DashboardLayout>

  );

};

export default MyAppointmentsPage;