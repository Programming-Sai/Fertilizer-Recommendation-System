import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RecommendationForm.css";
import { BASE_PATH } from "../../BasePath";
import EnvironmentalData from "../components/EnvironmentalData";
import SoilData from "../components/SoilData";
import CropData from "../components/CropData";
import FarmersInput from "../components/FarmersInput";
import useRecommendationForm from "../components/useRecommendationForm";

function RecommendationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cropType: null,
    growthStage: null,
    yieldTarget: null,
    fertilizerHistory: null,
    waterRequirements: null,

    temperature: null,
    humidity: null,
    rainfall: null,
    season: null,
    location: null,

    pHLevel: 7,
    nitrogen: null,
    phosphorous: null,
    potassium: null,
    soilType: null,
    organicMatter: null,
    soilMoisture: null,
    electricalConductivity: null,

    preferedFertilizerType: null,
    preferedApplicationMethod: null,

    // cropType: "cereal",
    // growthStage: "vegetative",
    // yieldTarget: "low",
    // fertilizerHistory: "low",
    // waterRequirements: "high",
    // temperature: "hot",
    // humidity: "low",
    // rainfall: "moderate",
    // season: "spring",
    // location: "tropical",
    // pHLevel: "acidic",
    // nitrogen: "low",
    // phosphorous: "moderate",
    // potassium: "low",
    // soilType: "loamy",
    // organicMatter: "moderate",
    // soilMoisture: "high",
    // electricalConductivity: "extreme",
    // preferedFertilizerType: "NPK",
    // preferedApplicationMethod: "broadcasting",
  });

  const [filledForm, setFilledForm] = useState({
    environmentalDataFilled: false,
    cropDataFilled: false,
    soilDataFilled: false,
  });
  const [progress, setProgress] = useState(0);

  // Dynamically update progress when filledForm changes
  useEffect(() => {
    const totalFields = 3; // Total number of fields/categories
    const filledFields = Object.values(filledForm).filter(Boolean).length; // Count how many are filled
    setProgress(Math.min((filledFields / totalFields) * 100, 100)); // Update progress percentage
  }, [filledForm]);

  const updateFields = (field) => {
    setFormData((prev) => {
      return { ...prev, ...field };
    });
  };

  const { steps, currentStep, step, next, prev, goto } = useRecommendationForm([
    <CropData
      {...formData}
      updateFields={updateFields}
      setFilledForm={setFilledForm}
    />,
    <EnvironmentalData
      {...formData}
      updateFields={updateFields}
      setFilledForm={setFilledForm}
    />,
    <SoilData
      {...formData}
      updateFields={updateFields}
      setFilledForm={setFilledForm}
    />,
    <FarmersInput
      {...formData}
      updateFields={updateFields}
      setFilledForm={setFilledForm}
    />,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    currentStep === steps.length - 1
      ? navigate(`${BASE_PATH}/results`, { state: { formData } })
      : next();
  };

  return (
    <div className="recommendation-form">
      <div className="container">
        <div className="form-container">
          <div className="form-header">
            <h1 className="form-title">Get Your Smart Recommendation</h1>
            <p className="form-subtitle">
              Fill in your crop and soil details for a personalized analysis
            </p>
          </div>
          <div className="form-progress">
            <div className="progress-line">
              <div style={{ "--progress": `${progress}%` }}></div>
            </div>
            <div className="progress-step">
              <div
                onClick={() => goto(0)}
                className={
                  filledForm.cropDataFilled
                    ? "step-number-active step-number"
                    : "step-number"
                }
              >
                1
              </div>
              <div className="step-title">Crop Data</div>
            </div>
            <div className="progress-step">
              <div
                onClick={() => goto(1)}
                className={
                  filledForm.environmentalDataFilled
                    ? "step-number-active step-number"
                    : "step-number"
                }
              >
                2
              </div>
              <div className="step-title">Ecological Details</div>
            </div>
            <div className="progress-step">
              <div
                onClick={() => goto(2)}
                className={
                  filledForm.soilDataFilled
                    ? "step-number-active step-number"
                    : "step-number"
                }
              >
                3
              </div>
              <div className="step-title">Soil Analysis</div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">{step}</div>
            <div className="submit-container">
              <button
                type="submit"
                className="submit-button"
                disabled={currentStep === 0}
                onClick={prev}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
                Previous
              </button>
              <button type="submit" className="submit-button">
                {currentStep === steps.length - 1
                  ? "Get Recommendation"
                  : "Next"}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RecommendationForm;
