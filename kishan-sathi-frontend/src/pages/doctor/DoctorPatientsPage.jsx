import {
  useEffect,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import DoctorLayout
from "../../layout/DoctorLayout";

import {
  getDoctorPatients
} from "../../api/appointmentApi";

const DoctorPatientsPage = () => {

  const navigate =
  useNavigate();

  const [
    patients,
    setPatients
  ] = useState([]);

  const fetchPatients =
  async () => {

    try {

      const data =
      await getDoctorPatients();

      setPatients(
        data.patients
      );

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchPatients();

  }, []);

  return (

    <DoctorLayout>

      <div>

        <h1 className="text-4xl font-bold">

          Patients

        </h1>

        <p className="text-gray-500 mt-2">

          Accepted appointment patients

        </p>

      </div>

      <div className="mt-10 space-y-5">

        {patients.map(
          (item) => (

          <div

            key={item._id}

            className="bg-white border rounded-3xl p-6 flex justify-between items-center"
          >

            <div>

              <h2 className="text-2xl font-bold">

                {
                  item
                  ?.farmerId
                  ?.name
                }

              </h2>

              <p className="text-gray-500">

                {
                  item
                  ?.farmerId
                  ?.email
                }

              </p>

              <p className="text-gray-500">

                {
                  item
                  ?.problemDescription
                }

              </p>

            </div>

            <button

              onClick={() =>
                navigate(
                  "/doctor-chat"
                )
              }

              className="bg-green-700 text-white px-6 py-3 rounded-2xl"
            >

              Chat

            </button>

          </div>

        ))}

      </div>

    </DoctorLayout>

  );

};

export default DoctorPatientsPage;