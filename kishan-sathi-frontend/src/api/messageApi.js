import API from "./axios";

// Send Message

export const sendMessage = async (messageData) => {

    const response = await API.post("/message/send", messageData);

    return response.data;

};

// Get Messages

export const getMessages = async (senderId, receiverId) => {

    const response = await API.get(`/message/${senderId}/${receiverId}`);

    return response.data;

};

// get contacts

export const getContacts =
async (userId) => {

  const response =
  await API.get(

    `/message/contacts/${userId}`

  );

  return response.data;

};