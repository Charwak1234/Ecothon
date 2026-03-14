import React from "react";

const LabBackground = ({ children }) => {
  return (
    <div className="global-page-wrapper">
      {/* --- THE GLOBAL SPARKLE SYSTEM --- */}
      <div className="analysis-bg-overlay">
        <div className="white-base"></div>
        <div className="mesh-gradient"></div>
        <div className="sparkle-container">
          {[...Array(120)].map((_, i) => (
            <div 
              key={i} 
              className="sparkle" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `-${Math.random() * 10}s`, 
                animationDuration: `${7 + Math.random() * 15}s`,
                opacity: 0.2 + Math.random() * 0.5,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* This is where your page content (Soil, Yield, etc.) will appear */}
      <div className="relative-content">
        {children}
      </div>
    </div>
  );
};

export default LabBackground;