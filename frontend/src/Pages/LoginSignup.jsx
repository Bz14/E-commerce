import React from "react";
import "./Css/loginSign.css";

export default function LoginSignup() {
  return (
    <div className="login-page">
      <div className="login-signup">
        <h4 className="login-header">Sign Up</h4>
        <input type="text" placeholder="Your Name" className="input-field" />
        <input
          type="text"
          placeholder="Email Address"
          className="input-field"
        />
        <input type="text" placeholder="Password" className="input-field" />
        <button className="log-sign-btn">Continue</button>
        <h5 className="log-option">
          Already have an account?<a href="/">Login here</a>
        </h5>
        <div className="check">
          <input type="checkbox" className="checkbox" />
          <h5 className="log-option">
            By continuing, i agree to the terms of use & privacy policy.
          </h5>
        </div>
      </div>
    </div>
  );
}
