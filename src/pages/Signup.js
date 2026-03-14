import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="auth-overlay">
      <div className="auth-card">
        {/* Close Button */}
        <Link to="/" className="auth-close-btn">&times;</Link>

        <div className="auth-header-static">
          <h2>Create Account</h2>
          <p className="sub-text">Join the future of digital farming.</p>
        </div>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>

          <div className="input-group">
            <label>Mobile Number</label>
            <div className="tel-wrapper">
              <span className="prefix">+91</span>
              <input type="tel" placeholder="98765 43210" required />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create a strong password" required />
          </div>

          <div className="terms-container">
            <div className="terms-row">
              <input type="checkbox" id="terms-check" required />
              <label htmlFor="terms-check">I agree to the Terms</label>
              <span className="read-more-link" onClick={() => setShowTerms(!showTerms)}>
                {showTerms ? "Show Less" : "Read More"}
              </span>
            </div>

            {showTerms && (
              <div className="terms-dropdown-box">
                <p>We secure your data with AES-256 encryption. Your location is used only for accurate soil and weather metrics.</p>
              </div>
            )}
          </div>

          <button type="submit" className="btn-auth">Register Now</button>

          <div className="auth-footer">
            <p>Already have an account? <Link to="/login" className="accent-link">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;