// src/Register.js
import React from "react";
import "../Styles/Authentication.css"; // Import the CSS file for styling

function Register() {
  return (
    <div className="register-container">
      <h1 className="register-heading">Register</h1>
      <form className="register-form">
        {/* Full Name Field */}
        <div className="form-group">
          <input
            type="text"
            id="fullName"
            className="form-input"
            placeholder="Full Name *"
            required
          />
        </div>

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

        {/* Phone Field */}
        <div className="form-group">
          <input
            type="tel"
            id="phone"
            className="form-input"
            placeholder="Phone *"
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
        <button type="submit" className="submit-button">Register</button>
      </form>

      {/* Login Link */}
      <p className="login-link">
        Already registered? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Register;
