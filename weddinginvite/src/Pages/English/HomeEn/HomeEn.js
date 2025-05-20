import React from "react";
import { useAuth } from "../../../Utils/AuthContext";
import Map from "../../../Components/Map/Map";

const HomeEn = () => {
  const { logout } = useAuth();

  return (
    <div className="content-container">
      <h1>Welcome to the English Home Page!</h1>
      <button onClick={logout}>Log Out</button>
      <Map />
    </div>
  );
};

export default HomeEn;
