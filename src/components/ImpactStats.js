import React from "react";

function ImpactStats() {
  const stats = [
    { label: "Active Farmers", value: "12,000+" },
    { label: "Yield Increase", value: "24%" },
    { label: "Soil Tests Run", value: "50k+" },
    { label: "Pests Detected", value: "150k+" },
  ];

  return (
    <section className="impact-stats-bar">
      {stats.map((stat, index) => (
        <div className="stat-card" key={index}>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </section>
  );
}

export default ImpactStats;