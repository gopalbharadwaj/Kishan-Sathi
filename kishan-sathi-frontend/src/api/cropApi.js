import API from "./axios";

export const analyzeCrop =
async (formData) => {

  const token =
  localStorage.getItem(
    "token"
  );

  const response =
  await API.post(

    "/crop/analyze",

    formData,

    {

      headers: {

        Authorization:
        `Bearer ${token}`,

        "Content-Type":
        "multipart/form-data"

      }

    }

  );

  return response.data;

};