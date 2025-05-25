import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LanguageSelect from "../Language/LanguageSelect";
import Login from "../Login/Login";
import HomeEn from "../../Pages/English/HomeEn/HomeEn";
import HomeJp from "../../Pages/Japanese/HomeJp/HomeJp";
import DirectionsEn from "../../Pages/English/DirectionsEn/DirectionsEn";
import { useAuth } from "../AuthContext";
import RsvpEn from "../../Pages/English/RsvpEn/RsvpEn";
import WeddingInfoEn from "../../Pages/English/WeddingInfoEn/WeddingInfoEn";

const ProtectedRoute = ({ children }) => {
  const { authenticated } = useAuth();
  return authenticated ? children : <Navigate to="/" />;
};

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = {
  duration: 0.8,
  ease: [0.25, 0.2, 0.25, 1], // ease-in-out
};

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Routes location={location}>
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
            path="/directions-en"
            element={
              <ProtectedRoute>
                <DirectionsEn />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rsvp-en"
            element={
              <ProtectedRoute>
                <RsvpEn />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wedding-info-en"
            element={
              <ProtectedRoute>
                <WeddingInfoEn />
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
      </motion.div>
    </AnimatePresence>
  );
};

export default AppRoutes;
