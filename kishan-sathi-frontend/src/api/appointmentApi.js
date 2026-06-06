import API from "./axios";

// BOOK APPOINTMENT

export const bookAppointment =
async (appointmentData) => {

  const token =
    localStorage.getItem(
      "token"
    );

  const response =
    await API.post(

      "/appointment",

      appointmentData,

      {
        headers: {

          Authorization:
          `Bearer ${token}`

        }
      }

    );

  return response.data;

};

// GET MY APPOINTMENTS

export const getMyAppointments =
async () => {

  const token =
    localStorage.getItem(
      "token"
    );

  const response =
    await API.get(

      "/appointment/my",

      {
        headers: {

          Authorization:
          `Bearer ${token}`

        }
      }

    );

  return response.data;

};

// ACCEPT

export const acceptAppointment =
async (appointmentId) => {

  const token =
    localStorage.getItem(
      "token"
    );

  const response =
    await API.put(

      `/appointment/accept/${appointmentId}`,

      {},

      {
        headers: {

          Authorization:
          `Bearer ${token}`

        }
      }

    );

  return response.data;

};

// REJECT

export const rejectAppointment =
async (appointmentId) => {

  const token =
    localStorage.getItem(
      "token"
    );

  const response =
    await API.put(

      `/appointment/reject/${appointmentId}`,

      {},

      {
        headers: {

          Authorization:
          `Bearer ${token}`

        }
      }

    );

  return response.data;

};

export const getDoctorPatients =
async () => {

  const token =
  localStorage.getItem(
    "token"
  );

  const response =
  await API.get(

    "/appointment/doctor-patients",

    {

      headers: {

        Authorization:
        `Bearer ${token}`

      }

    }

  );

  return response.data;

};