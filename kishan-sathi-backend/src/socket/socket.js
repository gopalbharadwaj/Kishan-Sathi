const { Server } = require("socket.io");

let io;

const onlineUsers = new Map();

const initSocket = (server) => {

  io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"]
    }
  });

  io.on("connection", (socket) => {

    console.log("User Connected:", socket.id);

    socket.on("join", (userId) => {

      socket.join(userId);

      onlineUsers.set(userId, socket.id);

      console.log(`User Joined Room: ${userId}`);

    });

    socket.on("send_message", (data) => {

      io.to(data.receiver).emit(
        "receive_message",
        data
      );

    });

    socket.on("disconnect", () => {

      console.log(
        "User Disconnected:",
        socket.id
      );

    });

  });

};

module.exports = {
  initSocket
};