import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    navigate("/dashboard"); // Navigate to the /Dashboard route // remove this line after login validation
    console.log("Logging in with", { username, password, rememberMe });
  };

  return (
    <div className="login-page">
      <img src="/Images/mit-logo-banner1.png" alt="MIT WPU" className="mit-logo" />

      <div className="footer-links">
        <a href="/privacy-policy" className="footer-link" target="_blank" rel="noopener noreferrer">Privacy Policy</a> {/* Opens link in new tab with security*/}
        <a className="footer-gap">|</a>
        <a href="/terms-and-conditions" className="footer-link" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> {/* Opens link in new tab with security*/}
      </div>

      <div className="login-container">
        <h2 className="login-heading">Login to MIT-WPU</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="material-icons input-icon">person</span>
          </div>
          
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="material-icons input-icon password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </div>
          <div className="actions-flex">
            <div className="remember-me">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember me
              </label>
            </div>

            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
          </div>
          
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
