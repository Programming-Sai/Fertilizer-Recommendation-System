import React, { useState } from "react";
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
    temperature: 0,
    humidity: 0,
    rainfall: 0,
    season: "",
    location: "",

    pHLevel: 0,
    nitrogen: 0,
    phosphorous: 0,
    potassium: 0,
    soilType: "",
    organicMatter: 0,
    soilMoisture: 0,
    electicalConductivity: 0,

    cropType: "",
    growthStage: "",
    yieldTarget: 0,
    fertilizerHistory: "",
    waterRequirements: 0,

    preferedFertilizerType: "",
    preferedApplicationMethod: "",
  });

  const [validFields, setValidFields] = useState(new Set());

  const updateFields = (field) => {
    setFormData((prev) => {
      const updatedFormData = { ...prev, ...field };

      // Validate the current field
      setValidFields((prevValidFields) => {
        const updatedValidFields = new Set(prevValidFields);
        Object.keys(field).forEach((key) => {
          if (field[key]) {
            // Field is valid, add it to the validFields set
            updatedValidFields.add(key);
          } else {
            // Field is invalid, remove it from the validFields set
            updatedValidFields.delete(key);
          }
        });
        return updatedValidFields;
      });

      return updatedFormData;
    });

    // Calculate progress based on the number of valid fields
    setValidFields((prevValidFields) => {
      setProgress((prevValidFields.size / 18) * 100);
      return prevValidFields; // Ensure this does not modify the set
    });
  };

  const { steps, currentStep, step, next, prev, progress, goto, setProgress } =
    useRecommendationForm([
      <EnvironmentalData {...formData} updateFields={updateFields} />,
      <CropData {...formData} updateFields={updateFields} />,
      <SoilData {...formData} updateFields={updateFields} />,
      <FarmersInput {...formData} updateFields={updateFields} />,
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
                  progress >= 25
                    ? "step-number-active step-number"
                    : "step-number"
                }
              >
                1
              </div>
              <div className="step-title">Environmental Details</div>
            </div>
            <div className="progress-step">
              <div
                onClick={() => goto(1)}
                className={
                  progress >= 50
                    ? "step-number-active step-number"
                    : "step-number"
                }
              >
                2
              </div>
              <div className="step-title">Crop Data</div>
            </div>
            <div className="progress-step">
              <div
                onClick={() => goto(2)}
                className={
                  progress >= 100
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
