import React from "react";

function Roadmap() {
  const steps = [
    {
      id: "01",
      title: "Field Registration",
      desc: "Set up your farm location and crop type to get personalized AI tracking.",
      icon: "📍"
    },
    {
      id: "02",
      title: "Real-time Monitoring",
      desc: "Our AI scans satellite and weather data to monitor your soil's health 24/7.",
      icon: "🛰️"
    },
    {
      id: "03",
      title: "Smart Intervention",
      desc: "Receive instant alerts for pest attacks or nutrient deficiencies.",
      icon: "🧪"
    },
    {
      id: "04",
      title: "Maximize Yield",
      desc: "Follow AI-guided harvesting times to get the best market price for your crops.",
      icon: "🚜"
    }
  ];

  return (
    <section className="roadmap-section">
      <div className="roadmap-header">
        <span className="badge">Process</span>
        <h2>Your Journey to a <span>Smarter Harvest</span></h2>
      </div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-number">{step.id}</div>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            {index !== steps.length - 1 && <div className="step-connector"></div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Roadmap;