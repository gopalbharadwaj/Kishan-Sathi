import {
  useEffect,
  useState
} from "react";

import DoctorLayout
from "../../layout/DoctorLayout";

import {

  getMyAppointments,

  acceptAppointment,

  rejectAppointment

} from "../../api/appointmentApi";

const DoctorAppointmentsPage = () => {

  const [
    appointments,
    setAppointments
  ] = useState([]);

  const fetchAppointments =
  async () => {

    try {

      const data =
      await getMyAppointments();

      setAppointments(
        data.appointments
      );

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchAppointments();

  }, []);

  const handleAccept =
  async (id) => {

    try {

      await acceptAppointment(id);

      fetchAppointments();

    } catch (error) {

      console.log(error);

    }

  };

  const handleReject =
  async (id) => {

    try {

      await rejectAppointment(id);

      fetchAppointments();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <DoctorLayout>

      <div>

        <h1 className="text-4xl font-bold">

          Appointment Requests

        </h1>

        <p className="text-gray-500 mt-2">

          Manage patient requests

        </p>

      </div>

      <div className="mt-10 space-y-6">

        {appointments?.map(
          (appointment) => (

          <div
            key={appointment._id}
            className="bg-white border rounded-3xl p-6 flex justify-between items-center"
          >

            <div>

              <h2 className="text-2xl font-bold">

                {
                  appointment
                  ?.farmerId
                  ?.name
                }

              </h2>

              <p className="text-gray-500">

                {
                  appointment
                  ?.animalType
                }

              </p>

              <p className="text-gray-500">

                {
                  appointment
                  ?.problemDescription
                }

              </p>

              <p className="mt-2 font-semibold">

                Status :

                {" "}

                {
                  appointment
                  ?.status
                }

              </p>

            </div>

            <div className="flex gap-3">

              <button

                onClick={() =>
                  handleAccept(
                    appointment._id
                  )
                }

                className="bg-green-700 text-white px-6 py-3 rounded-2xl"
              >

                Accept

              </button>

              <button

                onClick={() =>
                  handleReject(
                    appointment._id
                  )
                }

                className="bg-red-500 text-white px-6 py-3 rounded-2xl"
              >

                Reject

              </button>

            </div>

          </div>

        ))}

      </div>

    </DoctorLayout>

  );

};

export default
DoctorAppointmentsPage;