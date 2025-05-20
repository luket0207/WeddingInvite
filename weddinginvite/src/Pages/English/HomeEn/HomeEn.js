import React from "react";
import { useAuth } from "../../../Utils/AuthContext";

const HomeEn = () => {
  const { logout } = useAuth();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to the English Home Page!</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default HomeEn;
