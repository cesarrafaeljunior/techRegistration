import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoutes } from "../modules/Components/ProtectedRoutes";

import { PasswordView } from "../contexts/viewPasswordContext";
import { Dashboard } from "../Pages/Dashboard";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PasswordView />}>
        <Route path="*" element={<Navigate to="login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Route>
    </Routes>
  );
};
