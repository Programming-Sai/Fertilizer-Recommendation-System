import React from "react";
import { useLocation } from "react-router-dom";
import "./Results.css";

function Results() {
  const location = useLocation();
  const { formData } = location.state || {};

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(formData, null, 2)], {
      type: "json/application",
    });
    element.href = URL.createObjectURL(file);
    element.download = "fertilizer-recommendation.json";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="results">
      <div className="container">
        <h2>Your Personalized Recommendation</h2>

        <div className="card recommendation-card">
          <h3>Recommended Fertilizer Mix</h3>
          <div className="recommendation-details">
            <p>Based on your {formData?.crop} crop and soil analysis:</p>
            <ul>
              <li>
                <span>Nitrogen (N)</span>
                <strong>120 kg/ha</strong>
              </li>
              <li>
                <span>Phosphorus (P)</span>
                <strong>60 kg/ha</strong>
              </li>
              <li>
                <span>Potassium (K)</span>
                <strong>40 kg/ha</strong>
              </li>
            </ul>
          </div>

          <div className="download-section">
            <button
              className="button button-primary download-button"
              onClick={handleDownload}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
