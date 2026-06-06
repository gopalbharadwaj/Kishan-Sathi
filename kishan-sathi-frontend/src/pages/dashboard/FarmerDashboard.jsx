import { useEffect, useState } from "react";

import DashboardLayout
  from "../../layout/DashboardLayout";

import {
  getMyAppointments
} from "../../api/appointmentApi";


const FarmerDashboard = () => {

  const [
    appointments,
    setAppointments
  ] = useState([]);

  useEffect(() => {

    loadData();

  }, []);

  const loadData = async () => {

    try {

      const data = await getMyAppointments();

      console.log("MY APPOINTMENTS:", data);

      setAppointments(data.appointments || []);

    } catch (error) {

      console.log("ERROR:", error);

    }

  };

  return (

    <DashboardLayout>

      <div className="grid md:grid-cols-3 gap-6">

        

        <div className="bg-white rounded-3xl p-6 border">

          <h3 className="text-gray-500">

            Appointments

          </h3>

          <h1 className="text-4xl font-bold mt-4 text-green-700">

            {appointments.length}

          </h1>

        </div>

        <div className="bg-white rounded-3xl p-6 border">

          <h3 className="text-gray-500">

            Messages

          </h3>

          <h1 className="text-4xl font-bold mt-4 text-green-700">

            2

          </h1>

        </div>

      </div>

    </DashboardLayout>

  );

};

export default FarmerDashboard;