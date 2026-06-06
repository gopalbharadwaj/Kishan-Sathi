import API from "./axios";

// GET ALL DOCTORS

export const getDoctors =
async () => {

  const response =
  await API.get(
    "/api/doctors/all"
  );

  return response.data;

};

// GET SINGLE DOCTOR

export const getDoctorById =
async (id) => {

  const response =
  await API.get(
    `/api/doctors/${id}`
  );

  return response.data;

};