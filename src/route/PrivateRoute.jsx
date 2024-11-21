/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem("token"); // Contoh cek login
  return isLoggedIn ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
