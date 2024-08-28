// src/Login.js
import React from "react";
import "../Styles/Authentication.css"; // Reuse the same CSS file for consistent styling

function Login() {
  return (
    <div className="register-container">
      <h1 className="register-heading">Login</h1>
      <form className="register-form">
        {/* Email Field */}
        <div className="form-group">
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Email *"
            required
          />
        </div>

        {/* Password Field */}
        <div className="form-group">
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="Password *"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Login</button>
      </form>

      {/* Register Link */}
      <p className="login-link">
        Not registered? <a href="/register">Register</a>
      </p>
    </div>
  );
}

export default Login;
