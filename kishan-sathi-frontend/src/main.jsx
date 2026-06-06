import React from "react";
import ReactDOM from "react-dom/client";

import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>

    <Toaster position="top-right" />

    <AuthProvider>

      <App />

    </AuthProvider>

  </BrowserRouter>

);