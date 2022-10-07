import { Routes, Route, Navigate } from "react-router-dom";

import { Dashboard } from "../Pages/Dashboard";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="login" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
