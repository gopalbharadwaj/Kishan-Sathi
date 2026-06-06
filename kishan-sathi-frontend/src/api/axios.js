import axios from "axios";

const api = axios.create({

  baseURL: "https://kishan-sathi.onrender.com/api",

});

export default api;