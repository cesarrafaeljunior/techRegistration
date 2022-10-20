import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userContext } from "../../../contexts/userContext";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(userContext);

  if (loading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/" replace />;
};
