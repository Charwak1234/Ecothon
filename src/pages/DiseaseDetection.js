import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DiseaseDetection() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState("idle"); 
  const [backendImage, setBackendImage] = useState(null);

  // --- 120 Sparkles Background Logic ---
  const [sparkles, setSparkles] = useState([]);
  useEffect(() => {
    const newSparkles = Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`,
    }));
    setSparkles(newSparkles);
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setStatus("ready");
    }
  };

  const startScan = () => {
    setStatus("analyzing");
    setTimeout(() => {
      setBackendImage("https://images.unsplash.com/photo-1597362215023-f2f5f7e929c4?w=800"); 
      setStatus("result");
    }, 4000);
  };

  return (
    <div className="analysis-page-container">
      <div className="analysis-bg-overlay"></div>
      <div className="sparkle-container">
        {sparkles.map((s) => (
          <div key={s.id} className="sparkle" style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay, animationDuration: s.duration }} />
        ))}
      </div>

      {status === "analyzing" && (
        <div className="scanning-overlay">
          <div className="scan-line"></div>
          <div className="scanning-content">
            <div className="dna-loader">🧬</div>
            <h3>AI Neural Pathogen Scan</h3>
            <p>Analyzing cellular structure and fungal patterns...</p>
          </div>
        </div>
      )}

      <section className="content-wrap">
        <div className="analysis-header">
          <span className="badge-ai">AI Plant Pathology Lab</span>
          <h1>Leaf <span className="text-highlight">Disease Detector</span></h1>
        </div>

        <div className={`photo-comparison-container ${status === 'result' ? 'split-active' : ''}`}>
          <div className={`photo-card-wrap ${status === 'result' ? 'is-split' : 'is-full'}`}>
            {!preview ? (
              <>
                <input type="file" onChange={handleFileChange} id="leafFile" hidden />
                <label htmlFor="leafFile" className="drop-label-full">
                  <div className="upload-icon-wrap">🍃</div>
                  <p className="upload-text">Upload Diseased Leaf Photo</p>
                </label>
              </>
            ) : (
              <div className="preview-container">
                <img src={preview} alt="User Sample" className="leaf-preview-img" />
                {status === 'ready' && <button className="btn-change" onClick={() => {setPreview(null); setStatus('idle');}}>Change</button>}
                <div className="side-label">Original Sample</div>
              </div>
            )}
          </div>
          

          {status === 'result' && (
            <div className="photo-card-wrap backend-side staggered-1">
              <div className="preview-container">
                <img src={backendImage} alt="AI Result" className="leaf-preview-img" />
                <div className="side-label neon">AI Diagnostic Map</div>
                <div className="scan-highlight-pulse"></div>
              </div>
            </div>
          )}
        </div>

        {status === "ready" && (
          <div className="button-center-container">
            <button className="btn-start-analysis" onClick={startScan}>Start AI Analysis ⚡</button>
          </div>
        )}
        {/* --- THE INFO GRID (Missing items added back) --- */}
        {status !== "result" && (
          <div className="info-grid">
            <div className="info-item-premium staggered-1">
              <div className="info-icon">🔍</div>
              <h4>Disease ID</h4>
              <p>Detects fungal, viral, and bacterial pathogens using neural texture mapping technology.</p>
            </div>
            <div className="info-item-premium staggered-2">
              <div className="info-icon">🌱</div>
              <h4>Growth Impact</h4>
              <p>Calculates potential yield loss and provides real-time recovery statistics for your crops.</p>
            </div>
          </div>
        )}

        {status === 'result' && (
          <div className="analysis-results-wrapper">
            <div className="results-split-container">
              
              {/* LEFT COLUMN: DIAGNOSIS */}
              <div className="diagnostic-bullet-list">
                <h2 className="list-title staggered-1">Pathology Report:</h2>
                <div className="diag-bullet-item staggered-1">
                  <div className="bullet-dot"></div>
                  <p><strong>Identified Pathogen:</strong> Late Blight (Phytophthora infestans) fungal infection detected.</p>
                </div>
                <div className="diag-bullet-item staggered-2">
                  <div className="bullet-dot"></div>
                  <p><strong>Confidence Level:</strong> 98.4% Precision achieved via neural network texture mapping.</p>
                </div>
                <div className="diag-bullet-item staggered-3">
                  <div className="bullet-dot"></div>
                  <p><strong>Infection Severity:</strong> <span style={{color: '#ff4d4d'}}>Critical Damage</span> with high risk of systemic plant failure.</p>
                </div>
                <div className="diag-bullet-item staggered-4">
                  <div className="bullet-dot"></div>
                  <p><strong>Morphology:</strong> Necrotic tissue lesions spanning over 45% of the observed foliage surface area.</p>
                </div>
              </div>

              {/* RIGHT COLUMN: PRECAUTIONS (Same layout as left) */}
              <div className="diagnostic-bullet-list">
                <h2 className="list-title staggered-2">Treatment Precautions:</h2>
                <div className="diag-bullet-item staggered-1">
                  <div className="bullet-dot"></div>
                  <p><strong>Immediate Sanitation:</strong> Prune all infected leaves and dispose of them far from your garden to stop spore release.</p>
                </div>
                <div className="diag-bullet-item staggered-2">
                  <div className="bullet-dot"></div>
                  <p><strong>Chemical Control:</strong> Apply copper-based fungicides or Chlorothalonil every 7-10 days to protect healthy growth.</p>
                </div>
                <div className="diag-bullet-item staggered-3">
                  <div className="bullet-dot"></div>
                  <p><strong>Environmental Management:</strong> Stop overhead irrigation and ensure maximum airflow to keep leaf surfaces dry.</p>
                </div>
                <div className="diag-bullet-item staggered-4">
                  <div className="bullet-dot"></div>
                  <p><strong>Soil Treatment:</strong> Mulch around the base of the plant to prevent spores from splashing back onto lower stems.</p>
                </div>
              </div>
            </div>

            <div className="button-center-container staggered-4">
              <button className="btn-detail-analysis" onClick={() => navigate("/treatment")}>
                View Full Recovery Protocol <span>&rarr;</span>
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default DiseaseDetection;