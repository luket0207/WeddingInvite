import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LanguageSelect from "../Language/LanguageSelect";
import Login from "../Login/Login";
import HomeEn from "../../Pages/English/HomeEn/HomeEn";
import HomeJp from "../../Pages/Japanese/HomeJp/HomeJp";
import { useAuth } from "../AuthContext";

const ProtectedRoute = ({ children }) => {
  const { authenticated } = useAuth();
  return authenticated ? children : <Navigate to="/" />;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LanguageSelect />} />
    <Route path="/login" element={<Login />} />
    <Route
      path="/home-en"
      element={
        <ProtectedRoute>
          <HomeEn />
        </ProtectedRoute>
      }
    />
    <Route
      path="/home-jp"
      element={
        <ProtectedRoute>
          <HomeJp />
        </ProtectedRoute>
      }
    />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
