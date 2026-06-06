import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

import FarmerDashboard from "./pages/dashboard/FarmerDashboard";
import MyAppointmentsPage from "./pages/dashboard/MyAppointmentsPage";

import CropDiagnosisPage from "./pages/crop/CropDiagnosisPage";

import DoctorListingPage from "./pages/doctor/DoctorListingPage";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import DoctorAppointmentsPage from "./pages/doctor/DoctorAppointmentsPage";
import DoctorPatientsPage from "./pages/doctor/DoctorPatientsPage";
import DoctorProfile from "./pages/doctor/DoctorProfile";
import DoctorProfileEdit from "./pages/doctor/DoctorProfileEdit";
import DoctorProfilePage from "./pages/doctor/DoctorProfilePage";
import ChatPage from "./pages/chat/ChatPage";

import ProtectedRoute from "./routes/ProtectedRoutes";
import DoctorRoute from "./routes/DoctorRoute";
import FarmerRoute from "./routes/FarmerRoute";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {

  return (

    <Routes>

      {/* Public */}

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
      />

      <Route
        path="/about"
        element={<AboutPage />}
      />

      <Route
        path="/contact"
        element={<ContactPage />}
      />

      {/* Farmer */}

      <Route
        path="/farmer/dashboard"
        element={
          <FarmerRoute>
            <FarmerDashboard />
          </FarmerRoute>
        }
      />

      <Route
        path="/crop-diagnosis"
        element={
          <FarmerRoute>
            <CropDiagnosisPage />
          </FarmerRoute>
        }
      />

      <Route
        path="/animal-doctor"
        element={
          <ProtectedRoute>
            <DoctorListingPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/appointments"
        element={
          <ProtectedRoute>
            <MyAppointmentsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <ChatPage />
          </ProtectedRoute>
        }
      />

      {/* Doctor */}

      <Route
        path="/doctor-dashboard"
        element={
          <DoctorRoute>
            <DoctorDashboard />
          </DoctorRoute>
        }
      />

      <Route
        path="/doctor-profile/:id"
        element={
          <ProtectedRoute>
            <DoctorProfilePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/doctor-profile"
        element={
          <DoctorRoute>
            <DoctorProfile />
          </DoctorRoute>
        }
      />

      <Route
        path="/doctor-profile/edit"
        element={
          <DoctorRoute>
            <DoctorProfileEdit />
          </DoctorRoute>
        }
      />

      <Route
        path="/doctor-appointments"
        element={
          <DoctorRoute>
            <DoctorAppointmentsPage />
          </DoctorRoute>
        }
      />

      <Route
        path="/doctor-patients"
        element={
          <DoctorRoute>
            <DoctorPatientsPage />
          </DoctorRoute>
        }
      />

      <Route
        path="/doctor-chat"
        element={
          <DoctorRoute>
            <ChatPage />
          </DoctorRoute>
        }
      />

    </Routes>

  );

}

export default App;