import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SoilAnalysis() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | ready | analyzing | result
  const [isDragging, setIsDragging] = useState(false);
  const [reportData, setReportData] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) processFile(droppedFile);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) processFile(selectedFile);
  };

  const processFile = (selectedFile) => {
    if (selectedFile.size > 10 * 1024 * 1024) {
      alert("File too large! Max 10MB allowed.");
      return;
    }
    setFile(selectedFile);
    setStatus("ready");
  };

  const startAnalysis = () => {
    setStatus("analyzing");
    setTimeout(() => {
      setReportData({
        ph: "6.8 (Healthy)",
        nitrogen: "Low",
        phosphorus: "Optimal",
        potassium: "High",
        recommendation: "Increase organic matter using cow dung manure. Avoid urea for the next 2 cycles.",
        suggestedCrop: "Basmati Rice",
        confidence: "94%"
      });
      setStatus("result");
    }, 4500); 
  };

  return (
    <div className="analysis-page-container">
      {/* --- 1. FULL SCREEN SCANNING OVERLAY --- */}
      {status === "analyzing" && (
        <div className="scanning-overlay">
          <div className="scan-line"></div>
          <div className="scanning-content">
            <div className="dna-loader"><span></span><span></span><span></span><span></span></div>
            <h3>AI Deep Scan in Progress</h3>
            <p>Identifying soil minerals and nutrient density...</p>
            <div className="loading-stats">
              <span className="stat-pulse">Extracting pH...</span>
              <span className="stat-pulse delay-1">Mapping N-P-K...</span>
              <span className="stat-pulse delay-2">Calculating Yield...</span>
            </div>
          </div>
        </div>
      )}

      {/* --- 2. BACKGROUND WITH 120 LARGE SPARKLES --- */}
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
                animationDuration: `${6 + Math.random() * 12}s`,
                opacity: 0.2 + Math.random() * 0.6,
                // Randomly vary the size of sparkles
                width: `${2 + Math.random() * 5}px`,
                height: `${2 + Math.random() * 5}px`
              }}
            ></div>
          ))}
        </div>
      </div>

      <section className="content-wrap">
        <div className="analysis-header">
          <span className="badge-ai">AI-Powered Diagnostic</span>
          <h1>Soil <span className="text-highlight">Lab Intelligence</span></h1>
        </div>

        {/* --- 3. PREMIUM DROP BOX --- */}
        <div 
          className={`drop-box-premium 
            ${file ? "file-selected" : ""} 
            ${isDragging ? "drag-over" : ""} 
            ${status === 'result' ? 'fade-out-shrink' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input type="file" onChange={handleFileChange} id="soilFile" hidden />
          <label htmlFor="soilFile" className="drop-label-full">
            <div className="upload-icon-wrap">
              <span className="icon-main">{file ? "✅" : "🔬"}</span>
            </div>
            <p className="upload-text">
              {file ? <strong>{file.name}</strong> : "Drop Soil Report or Click to Browse"}
            </p>
          </label>
        </div>

        {/* --- 4. START BUTTON (Centered) --- */}
        {status === "ready" && (
          <div className="button-center-container">
            <button className="btn-start-analysis animate-bounce-in" onClick={startAnalysis}>
              Start AI Analysis ⚡
            </button>
          </div>
        )}

        {/* --- 5. RESULTS SECTION --- */}
        {status === "result" && reportData && (
          <div className="analysis-results-wrapper">
            <div className="report-grid staggered-1">
               <div className="report-card glass">
                 <span className="card-label">Soil pH</span>
                 <h3>{reportData.ph}</h3>
               </div>
               <div className="report-card glass">
                 <span className="card-label">Nitrogen</span>
                 <h3>{reportData.nitrogen}</h3>
               </div>
            </div>

            <div className="report-summary-card staggered-2">
               <div className="summary-header">
                  <span className="ai-star">✨</span>
                  <h3>AI Field Strategy</h3>
               </div>
               <p className="strategy-text">{reportData.recommendation}</p>
            </div>

            <div className="crop-suggestion-card glass staggered-3">
              <div className="crop-info">
                <span className="badge-neon">High Yield Prediction</span>
                <h2 className="suggested-crop-name">{reportData.suggestedCrop}</h2>
                <div className="yield-match">
                   <div className="match-bar"><div className="match-fill" style={{width: reportData.confidence}}></div></div>
                   <span>{reportData.confidence} Match</span>
                </div>
              </div>
              <div className="crop-icon-large">🌾</div>
            </div>

            <button className="btn-detail-analysis staggered-4" onClick={() => navigate("/crop-yield")}>
              Go to Detailed Yield Analysis <span>&rarr;</span>
            </button>
          </div>
        )}

        {/* --- 6. PRE-UPLOAD INFO (With Green Hovers) --- */}
        <div className={`pre-upload-content ${status === "result" ? "exit-animation" : ""}`}>
          <div className="info-grid">
            <div className="info-item-premium">
              <div className="info-icon">⚡</div>
              <h4>Instant Analysis</h4>
              <p>Actionable steps from complex data.</p>
            </div>
            <div className="info-item-premium">
              <div className="info-icon">🌱</div>
              <h4>Crop Matching</h4>
              <p>Finding seeds based on soil health.</p>
            </div>
          </div>
          <div className="guide-section">
            <h3>How to get the best results?</h3>
            <div className="guide-steps">
              <div className="step-premium"><span>1</span> Upload Report</div>
              <div className="step-premium"><span>2</span> Start Analysis</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SoilAnalysis;