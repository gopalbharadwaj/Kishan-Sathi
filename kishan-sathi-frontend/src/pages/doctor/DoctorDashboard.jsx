import { useEffect, useState } from "react";

import DoctorLayout
  from "../../layout/DoctorLayout";

import {
  getMyAppointments
} from "../../api/appointmentApi";

const DoctorDashboard = () => {

  const [
    appointments,
    setAppointments
  ] = useState([]);

  const [
    pendingCount,
    setPendingCount
  ] = useState(0);

  useEffect(() => {

    loadData();

  }, []);

  const loadData = async () => {

    try {

      const data =
        await getMyAppointments();

      const list =
        data.appointments ||
        data.data ||
        data ||
        [];

      console.log(data);
      console.log(list);

      setAppointments(
        list
      );

      setPendingCount(

        list.filter(

          (item) =>
            item.status ===
            "pending"

        ).length

      );

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <DoctorLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-4xl font-bold">

            Doctor Dashboard

          </h1>

          <p className="text-gray-500 mt-2">

            Manage appointments
            and patients

          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-8 rounded-3xl border">

            <h2 className="text-4xl font-bold text-green-700">

              {appointments.length}

            </h2>

            <p className="mt-2 text-gray-500">

              Total Appointments

            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl border">

            <h2 className="text-4xl font-bold text-blue-700">

              {pendingCount}

            </h2>

            <p className="mt-2 text-gray-500">

              Pending Requests

            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl border">

            <h2 className="text-4xl font-bold text-purple-700">

              0

            </h2>

            <p className="mt-2 text-gray-500">

              Messages

            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl border">

            <h2 className="text-4xl font-bold text-red-700">

              0

            </h2>

            <p className="mt-2 text-gray-500">

              Patients

            </p>

          </div>

        </div>

        <div className="bg-white rounded-3xl border p-8">

          <h2 className="text-2xl font-bold mb-6">

            Recent Appointments

          </h2>

          {

            appointments.length === 0

              ? (

                <p>

                  No Appointments Found

                </p>

              )

              : (

                appointments
                  .slice(0, 5)
                  .map((item) => (

                    <div
                      key={item._id}
                      className="border-b py-4"
                    >

                      <h3 className="font-semibold">

                        {

                          item.farmerId
                            ?.name ||
                          "Farmer"

                        }

                      </h3>

                      <p>

                        {

                          item.problemDescription

                        }

                      </p>

                      <p className="text-sm text-gray-500">

                        {

                          item.status

                        }

                      </p>

                    </div>

                  ))

              )

          }

        </div>

      </div>

    </DoctorLayout>

  );

};

export default DoctorDashboard;