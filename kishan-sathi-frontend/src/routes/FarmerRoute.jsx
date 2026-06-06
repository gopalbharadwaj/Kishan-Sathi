import { Navigate } from "react-router-dom";

const FarmerRoute = ({ children }) => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!user) {

    return <Navigate to="/login" />;

  }

  if (user.role !== "farmer") {

    return (
      <Navigate
        to="/doctor-dashboard"
      />
    );

  }

  return children;

};

export default FarmerRoute;