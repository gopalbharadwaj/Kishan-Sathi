import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../../layout/DashboardLayout";

import {
  FaStar,
  FaMapMarkerAlt,
  FaUserMd
} from "react-icons/fa";

import {
  getDoctorById
} from "../../api/doctorApi";

import {
  bookAppointment
} from "../../api/appointmentApi";

const DoctorProfilePage = () => {

  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);

  const [selectedSlot, setSelectedSlot] =
    useState("");

  const fetchDoctor = async () => {

    try {

      const data =
        await getDoctorById(id);

      setDoctor(data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    if (!id) return;

    fetchDoctor();

  }, [id]);

  const handleBooking = async () => {

    try {

      if (!selectedSlot) {

        return alert(
          "Please select a slot"
        );

      }

      await bookAppointment({

        doctorId: doctor._id,

        animalType: "General Consultation",

        problemDescription:
          "Consultation Request",

        appointmentDate:
          new Date()

      });

      alert(
        "Appointment Booked Successfully"
      );

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Booking Failed"
      );

    }

  };

  if (!doctor) {

    return (

      <DashboardLayout>

        <div className="p-10">
          Loading...
        </div>

      </DashboardLayout>

    );

  }

  const slots = [

    "10:00 AM",
    "11:30 AM",
    "02:00 PM",
    "04:30 PM"

  ];

  return (

    <DashboardLayout>

      <div className="grid lg:grid-cols-3 gap-10">

        <div className="lg:col-span-2">

          <div className="bg-white rounded-[35px] border overflow-hidden">

            <img
              src={
                doctor.image ||
                "https://via.placeholder.com/600x400"
              }
              alt={doctor.name}
              className="h-[380px] w-full object-cover"
            />

            <div className="p-8">

              <div className="flex justify-between">

                <div>

                  <h1 className="text-4xl font-bold">

                    {doctor.name}

                  </h1>

                  <p className="text-green-700 mt-2">

                    {doctor.specialization}

                  </p>

                </div>

                <div className="flex items-center gap-2">

                  <FaStar />

                  <span>4.9</span>

                </div>

              </div>

              <div className="flex gap-5 mt-8">

                <div className="bg-green-50 px-5 py-3 rounded-xl flex items-center gap-2">

                  <FaMapMarkerAlt />

                  India

                </div>

                <div className="bg-green-50 px-5 py-3 rounded-xl flex items-center gap-2">

                  <FaUserMd />

                  {doctor.experience}

                </div>

              </div>

              <div className="mt-10">

                <h2 className="text-2xl font-bold">

                  About Doctor

                </h2>

                <p className="mt-4 text-gray-600">

                  {doctor.summary}

                </p>

              </div>

            </div>

          </div>

        </div>

        <div>

          <div className="bg-white border rounded-[35px] p-8">

            <h2 className="text-3xl font-bold">

              Book Appointment

            </h2>

            <div className="mt-8">

              <h3 className="font-semibold">

                Available Slots

              </h3>

              <div className="grid grid-cols-2 gap-4 mt-5">

                {slots.map((slot) => (

                  <button
                    key={slot}
                    onClick={() =>
                      setSelectedSlot(slot)
                    }
                    className={`border rounded-xl py-3 ${selectedSlot === slot
                        ? "bg-green-700 text-white"
                        : ""
                      }`}
                  >

                    {slot}

                  </button>

                ))}

              </div>

            </div>

            <button
              onClick={handleBooking}
              className="w-full mt-8 bg-green-700 text-white py-4 rounded-xl"
            >

              Confirm Booking

            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

};

export default DoctorProfilePage;