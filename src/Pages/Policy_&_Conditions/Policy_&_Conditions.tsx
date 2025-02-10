import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Policy_&_Conditions.css"
import Policy from "./Privacy_Policy"
import Terms from "./Terms_&_Conditions"

function Policy_Conditions() {
  const navigate = useNavigate();
  const location = useLocation();

  const onPolicy = location.pathname == "/privacy-policy"; // check if user is on privacy-policy page if yes set onPolicy to true
  const onTerms = location.pathname == "/terms-&-conditions"; // check if user is on terms-&-conditions page if yes set onTerms to true

  return(
    <div className="Policy-page">
      {/* Footer Links (Note: Its styling is done in Login.css) */}
      <div className="footer-links">
        <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
        <a className="footer-gap">|</a>
        <a href="/terms-&-conditions" className="footer-link">Terms & Conditions</a>
      </div>

      {/* Logo */}
      <img className="Policy-page-logo" src="/Images/mit-logo.png" />

      {/* Policy Container */}
      <div className="Policy-container">
        <button className="Policy-page-back-0" onClick={() => navigate("/login")}>
          <span className="material-icons">arrow_back</span>
          <h1>Return</h1>
        </button>

        {onPolicy && <Policy />} {/* Show Privacy Policy */}
        {onTerms && <Terms />} {/* Show Terms & Conditions */}
            
        <button className= "Policy-page-back-1" onClick={() => navigate("/login")}>
          <span className="material-icons">arrow_back</span>
          <h1>Return</h1>
        </button>
      </div>
    </div>
  );
}

export default Policy_Conditions;
