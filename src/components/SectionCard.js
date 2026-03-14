import React from "react";
import { Link } from "react-router-dom";

function SectionCard({ title, text, route, icon, accent }) {
  return (
    <Link to={route} className="card-link">
      <div className="custom-card" style={{ "--card-accent": accent }}>
        <div className="card-icon-wrapper">
          <span className="card-icon">{icon}</span>
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{text}</p>
          <div className="card-action">
            <span>Explore Tool</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        {/* Hover Glow Effect */}
        <div className="card-corner-glow"></div>
      </div>
    </Link>
  );
}

export default SectionCard;