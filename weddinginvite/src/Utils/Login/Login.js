import React, { useState } from "react";
import "./Login.scss";
import { useAuth } from "../AuthContext";
import { useLanguage } from "../Language/LanguageContext";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (login(password)) {
      navigate(language === "jp" ? "/home-jp" : "/home-en");
    } else {
      setError(
        language === "jp" ? "パスワードが間違っています" : "Incorrect password"
      );
    }
  };

  if (!language) {
    navigate("/");
    return null;
  }

  return (
    <div className="login content-container">
      {language === "en" && (
        <div className="en">
          <h2>Enter Password</h2>
          <div className="form-input">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
            />
          </div>
          {error && (
            <p style={{ color: "red" }}>{error}</p>
          )}
          <Button onClick={handleSubmit} lang="en">
            Login
          </Button>
        </div>
      )}
      {language === "jp" && (
        <div className="jp">
          <h2>
            パスワードを
            <br />
            入力してください
          </h2>
          <div className="form-input">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="パスワード"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
            />
          </div>
          {error && (
            <p style={{ color: "red" }}>{error}</p>
          )}
          <Button onClick={handleSubmit} lang="jp">
            ログイン
          </Button>
        </div>
      )}
    </div>
  );
};

export default Login;
