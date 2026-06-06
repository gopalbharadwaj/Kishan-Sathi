import { useEffect, useState } from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import DoctorLayout from "../../layout/DoctorLayout";
import {
  FaPaperPlane,
  FaSearch
} from "react-icons/fa";

import socket from "../../socket/socket";

import {
  sendMessage,
  getMessages,
  getContacts
} from "../../api/messageApi";

import useAuthStore from "../../store/authStore";

const ChatPage = () => {

  const { user } = useAuthStore();

  const Layout =
    user?.role === "doctor"
      ? DoctorLayout
      : DashboardLayout;

  const currentUserId = user?._id;

  const [chatUsers, setChatUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [search, setSearch] = useState("");

  // Fetch Contacts

  const fetchContacts = async () => {

    try {

      if (!currentUserId) return;

      const data =
        await getContacts(currentUserId);

      setChatUsers(data);

      if (
        data.length > 0 &&
        !selectedUser
      ) {

        setSelectedUser(data[0]);

      }

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchContacts();

  }, [currentUserId]);

  // Join Socket

  useEffect(() => {

    if (currentUserId) {

      socket.emit(
        "join",
        currentUserId
      );

    }

  }, [currentUserId]);

  // Fetch Messages

  const fetchMessages = async () => {

    try {

      if (
        !selectedUser ||
        !currentUserId
      ) return;

      const data =
        await getMessages(
          currentUserId,
          selectedUser._id
        );

      setMessages(data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchMessages();

  }, [selectedUser, currentUserId]);

  // Receive Message

  useEffect(() => {

    socket.on(
      "receive_message",
      (data) => {

        console.log(
          "REALTIME RECEIVED:",
          data
        );

        setMessages(
          (prev) => [
            ...prev,
            data
          ]
        );

      }
    );

    return () => {

      socket.off(
        "receive_message"
      );

    };

  }, []);

  // Send Message

  const handleSendMessage =
    async () => {

      if (
        !newMessage.trim() ||
        !selectedUser
      ) return;

      try {

        const messageData = {

          sender:
            currentUserId,

          receiver:
            selectedUser._id,

          text:
            newMessage

        };

        const savedMessage =
          await sendMessage(
            messageData
          );

        socket.emit(
          "send_message",
          savedMessage
        );

        setMessages(
          (prev) => [
            ...prev,
            savedMessage
          ]
        );

        setNewMessage("");

      } catch (error) {

        console.log(error);

      }

    };

  const filteredUsers =
    chatUsers.filter((u) =>
      u.name
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  if (!selectedUser) {

    return (

      <Layout>

        <div className="h-[80vh] flex items-center justify-center">

          <h1 className="text-3xl font-bold text-gray-400">

            No Chats Available

          </h1>

        </div>

      </Layout>

    );

  }

  return (

    <Layout>

      <div className="bg-white rounded-[35px] border h-[85vh] overflow-hidden flex">

        {/* Sidebar */}

        <div className="w-[350px] border-r bg-[#f8fafc]">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Messages

            </h2>

            <div className="relative mt-5">

              <FaSearch className="absolute top-4 left-4 text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                placeholder="Search chats..."
                className="w-full border rounded-2xl pl-12 pr-4 py-3 outline-none"
              />

            </div>

          </div>

          <div className="overflow-y-auto h-full">

            {filteredUsers.map((chatUser) => (

              <div
                key={chatUser._id}
                onClick={() =>
                  setSelectedUser(chatUser)
                }
                className={`flex items-center gap-4 p-5 cursor-pointer border-b ${selectedUser?._id ===
                  chatUser._id
                  ? "bg-white"
                  : "hover:bg-white"
                  }`}
              >

                <img
                  src={
                    chatUser.image ||
                    "https://via.placeholder.com/100"
                  }
                  alt={chatUser.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>

                  <h3 className="font-semibold">

                    {chatUser.name}

                  </h3>

                  <p className="text-sm text-gray-500">

                    Consultation Chat

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Chat Area */}

        <div className="flex-1 flex flex-col">

          {/* Header */}

          <div className="border-b px-8 py-5 flex items-center justify-between">

            <div className="flex items-center gap-4">

              <img
                src={
                  selectedUser.image ||
                  "https://via.placeholder.com/100"
                }
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>

                <h3 className="text-xl font-bold">

                  {selectedUser.name}

                </h3>

                <p className="text-sm text-green-600">

                  Consultation Chat

                </p>

              </div>

            </div>

          </div>

          {/* Messages */}

          <div className="flex-1 overflow-y-auto p-8 space-y-5 bg-[#f9fafb]">

            {messages.length === 0 ? (

              <div className="h-full flex items-center justify-center text-gray-400">

                Start your consultation chat

              </div>

            ) : (

              messages.map((msg, index) => (

                <div
                  key={index}
                  className={`flex ${String(msg.sender) ===
                    String(currentUserId)
                    ? "justify-end"
                    : "justify-start"
                    }`}
                >

                  <div
                    className={`max-w-[400px] px-5 py-4 rounded-3xl text-sm ${String(msg.sender) ===
                      String(currentUserId)
                      ? "bg-green-700 text-white"
                      : "bg-white border"
                      }`}
                  >

                    {msg.text}

                  </div>

                </div>

              ))

            )}

          </div>

          {/* Input */}

          <div className="p-6 border-t flex gap-4">

            <input
              type="text"
              value={newMessage}
              onChange={(e) =>
                setNewMessage(
                  e.target.value
                )
              }
              onKeyDown={(e) => {

                if (
                  e.key === "Enter"
                ) {

                  handleSendMessage();

                }

              }}
              placeholder="Type message..."
              className="flex-1 border rounded-2xl px-5 py-4 outline-none"
            />

            <button
              onClick={
                handleSendMessage
              }
              className="w-14 h-14 rounded-2xl bg-green-700 text-white flex items-center justify-center"
            >

              <FaPaperPlane />

            </button>

          </div>

        </div>

      </div>

    </Layout>

  );

};

export default ChatPage;