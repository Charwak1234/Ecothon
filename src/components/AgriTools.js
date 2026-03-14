import React from "react";
import SectionCard from "./SectionCard";

function AgriTools() {
  const tools = [
    {
      title: "Soil Analysis",
      text: "Analyze Nitrogen, Phosphorus, and Potassium levels for precision growth.",
      route: "/soil",
      icon: "🌱",
      accent: "#2ecc71" // Emerald
    },
    {
      title: "Yield Prediction",
      text: "AI-driven harvest forecasting based on current climate patterns.",
      route: "/crop-yield",
      icon: "📈",
      accent: "#3498db" // Blue
    },
    {
      title: "Disease Detection",
      text: "Scan leaves with your camera to detect plant diseases instantly.",
      route: "/disease",
      icon: "📸",
      accent: "#e74c3c" // Red
    },
    {
      title: "Govt Schemes",
      text: "Find available farmer subsidies and financial support programs.",
      route: "/schemes",
      icon: "🏛️",
      accent: "#f1c40f" // Gold
    },
  ];

  return (
    <section className="tools-wrapper">
      <div className="tools-header">
        <h2 className="grid-title">Agricultural Toolset</h2>
        <p className="grid-subtitle">Advanced AI solutions tailored for your field's success</p>
      </div>
      
      <div className="section-grid">
        {tools.map((tool, index) => (
          <SectionCard
            key={index}
            title={tool.title}
            text={tool.text}
            route={tool.route}
            icon={tool.icon}
            accent={tool.accent} 
          />
        ))}
      </div>
    </section>
  );
}

export default AgriTools;