import { Navigate } from "react-router-dom";

const DoctorRoute = ({ children }) => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!user) {

    return <Navigate to="/login" />;

  }

  if (user.role !== "doctor") {

    return (
      <Navigate
        to="/farmer/dashboard"
      />
    );

  }

  return children;

};

export default DoctorRoute;