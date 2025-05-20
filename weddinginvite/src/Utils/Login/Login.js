import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useLanguage } from "../Language/LanguageContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(password)) {
      navigate(language === "jp" ? "/home-jp" : "/home-en");
    } else {
      setError("Incorrect password");
    }
  };

  if (!language) {
    navigate("/");
    return null;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{language === "jp" ? "パスワードを入力してください" : "Enter Password"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
