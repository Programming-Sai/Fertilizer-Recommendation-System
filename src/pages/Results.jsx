import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import "./Results.css";

function Results() {
  const location = useLocation();
  const { formData } = location.state || {};
  const [recommendations, setRecommendations] = useState(null);
  const [isPdf, setIsPdf] = useState(false);
  const [serverDown, setServerDown] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecommendations = async () => {
      const queryParams = new URLSearchParams(formData).toString();
      const url = `http://backend:5000/recommend?${queryParams}`;
      console.log("Url: ", url);
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch recommendations.");
        }

        const data = await response.json();
        setRecommendations(data.recommendation);
        setServerDown(false);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
        setServerDown(true);
        setError(error.message);
      }
    };

    if (formData) {
      fetchRecommendations();
    }
    console.log("\nFormData: ", formData, "\nResult: ", recommendations);
  }, [formData]);

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(recommendations, null, 2)], {
      type: "json/application",
    });
    element.href = URL.createObjectURL(file);
    element.download = "fertilizer-recommendation.json";
    document.body.appendChild(element);
    element.click();
  };

  const handlePdfDownload = () => {
    setIsPdf(true);
    const targetDiv = document.querySelector(".report-card");
    if (!targetDiv) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const scaleValue = isMobile ? 0.5 : 0.3;
    const xPadding = isMobile ? 40 : 10;

    const pdf = new jsPDF("p", "mm", "a4");

    pdf.html(targetDiv, {
      callback: function (pdf) {
        setIsPdf(false);
        pdf.save("recommendation-report.pdf");
      },
      x: xPadding,
      y: 0,
      html2canvas: {
        scale: scaleValue,
        ignoreElements: (element) => {
          return element.classList.contains("button-ignore");
        },
      },
    });
  };
  return (
    <div className="results">
      {serverDown ? (
        <div className="card recommendation-card">
          <h3 style={{ color: "red" }}>Sorry There Seems To Be an Issue</h3>
          <div className="recommendation-details">
            {error === "Failed to fetch" ? (
              <>
                ⚠️ We couldn't reach the server. Please check your internet
                connection or try again later.
              </>
            ) : (
              <>⚠️ {error || "An unknown error occurred. Please try again."}</>
            )}
          </div>
        </div>
      ) : (
        <div className="container">
          <h2 className="form-title"> Your Personalized Recommendation</h2>

          <div className="card recommendation-card">
            <h3>Recommended Fertilizer Mix Summary</h3>
            <div className="recommendation-details">
              <p>Based on your {formData?.cropType} crop and soil analysis:</p>
              <ul>
                <li>
                  <span>Nitrogen (N)</span>
                  <strong>
                    {recommendations?.NPK?.values?.N}{" "}
                    {recommendations?.NPK?.units}
                  </strong>
                </li>
                <li>
                  <span>Phosphorus (P)</span>
                  <strong>
                    {recommendations?.NPK?.values?.P}{" "}
                    {recommendations?.NPK?.units}
                  </strong>
                </li>
                <li>
                  <span>Potassium (K)</span>
                  <strong>
                    {recommendations?.NPK?.values?.K}{" "}
                    {recommendations?.NPK?.units}
                  </strong>
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
                Download Results Report As JSON
              </button>
            </div>
          </div>

          <div className="card recommendation-card report-card">
            <h3>Recommendation Report</h3>
            <h4>
              Recommended Fertilizer Type:&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="fertilizer-type">
                {recommendations?.fertilizerType}
              </span>
            </h4>
            <div className="recommendation-details report">
              <p>Based on your {formData?.cropType} crop and soil analysis:</p>
              <ul>
                <li>
                  <span>NPK Ratio</span>
                  <strong>{recommendations?.NPK?.ratio}</strong>
                </li>
                <li>
                  <span>Fertilizer Application Mode</span>
                  <strong>{recommendations?.applicationMode} </strong>
                </li>
                <li>
                  <span>Application Frequency</span>
                  <strong>{recommendations?.frequency}</strong>
                </li>
                <li>
                  <span>Nitrogen (N)</span>
                  <strong>
                    {recommendations?.NPK?.values?.N}{" "}
                    {recommendations?.NPK?.units}
                  </strong>
                </li>
                <li>
                  <span>Phosphorus (P)</span>
                  <strong>
                    {recommendations?.NPK?.values?.P}{" "}
                    {recommendations?.NPK?.units}
                  </strong>
                </li>
                <li>
                  <span>Potassium (K)</span>
                  <strong>
                    {recommendations?.NPK?.values?.K}{" "}
                    {recommendations?.NPK?.units}
                  </strong>
                </li>
                <li>
                  <div className="reasoning">
                    <h4>Why This Recommendation?</h4>
                    <ul>
                      {recommendations?.reasoning &&
                        recommendations?.reasoning.map((i, idx) => (
                          <li key={idx} className="reason">
                            {isPdf ? i : `🌳 ${i}`}
                          </li>
                        ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="download-section button-ignore">
              <button
                className="button button-primary download-button"
                onClick={handlePdfDownload}
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
                Download Results Report As PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Results;
