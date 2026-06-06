import API from "./axios";

export const sendMessage = async (message) => {

  const response = await API.post(
    "/ai/chat",
    { message }
  );

  return response.data;
};