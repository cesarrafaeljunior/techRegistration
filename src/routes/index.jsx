import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";

import { Login } from "../Pages/Login";

export const RoutesMain = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Navigate to="login" />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);
