import React from "react";
import { useAuth } from "../../../Utils/AuthContext";

const HomeJp = () => {
  const { logout } = useAuth();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>日本語のホームページへようこそ！</h1>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default HomeJp;
