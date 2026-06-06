import { io } from "socket.io-client";

const socket = io(
  "https://kishan-sathi.onrender.com"
);

export default socket;