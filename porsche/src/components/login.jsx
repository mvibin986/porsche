import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
   
    if (email === "zxcvbnm@gmail.com" && password === "vibin007") {
      navigate("/home");
    } else {
      alert("Invalid Email or Password ");
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h3>User Login</h3>

        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button className="but" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

