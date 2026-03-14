import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-overlay">
      <div className="auth-card">
        {/* Close Button */}
        <Link to="/" className="auth-close-btn">&times;</Link>

        <div className="auth-header-static">
          <h2>Welcome Back</h2>
          <p className="sub-text">Login to access your farm analytics.</p>
        </div>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label>Mobile Number</label>
            <div className="tel-wrapper">
              <span className="prefix">+91</span>
              <input type="tel" placeholder="98765 43210" required />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" required />
          </div>

          <button type="submit" className="btn-auth">Sign In</button>
          
          <div className="auth-footer">
            <p>Don't have an account? <Link to="/signup" className="accent-link">Sign Up</Link></p>
            <p className="forgot-pass">Forgot Password?</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;