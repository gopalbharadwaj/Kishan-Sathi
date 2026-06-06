require("dotenv").config();

const mongoose = require("mongoose");

const http = require("http");

const app = require("./app");

const { initSocket } = require("./socket/socket");

const PORT = process.env.PORT || 5000;

// Create HTTP Server

const server = http.createServer(app);

// Initialize Socket.IO

initSocket(server);

// MongoDB Connect

mongoose.connect(process.env.MONGO_URL)

.then(() => {

  console.log("MongoDB Connected");

  // Start Server

  server.listen(PORT, () => {

    console.log(`Server Running On Port ${PORT}`);

  });

})

.catch((err) => {

  console.log(err);

});