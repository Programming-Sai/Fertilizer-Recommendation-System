import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecommendationForm.css';

function RecommendationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    crop: '',
    soilType: '',
    soilPH: 7,
    temperature: 25,
    humidity: 50,
    rainfall: 100
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/results', { state: { formData } });
  };

  return (
    <div className="recommendation-form">
      <div className="container">
        <div className="form-container">
          <div className="form-header">
            <h1 className="form-title">Get Your Smart Recommendation</h1>
            <p className="form-subtitle">Fill in your crop and soil details for a personalized analysis</p>
          </div>

          <div className="form-progress">
            <div className="progress-line"></div>
            <div className="progress-step">
              <div className="step-number">1</div>
              <div className="step-title">Crop Details</div>
            </div>
            <div className="progress-step">
              <div className="step-number">2</div>
              <div className="step-title">Soil Analysis</div>
            </div>
            <div className="progress-step">
              <div className="step-number">3</div>
              <div className="step-title">Environment</div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <h3>
                <span>🌾</span>
                Crop Information
              </h3>
              <div className="form-control">
                <label>Select Your Crop</label>
                <select 
                  value={formData.crop}
                  onChange={(e) => setFormData({...formData, crop: e.target.value})}
                  required
                >
                  <option value="">Choose a crop type</option>
                  <option value="rice">Rice</option>
                  <option value="wheat">Wheat</option>
                  <option value="corn">Corn</option>
                  <option value="cotton">Cotton</option>
                  <option value="sugarcane">Sugarcane</option>
                  <option value="soybean">Soybean</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <h3>
                <span>🌱</span>
                Soil Characteristics
              </h3>
              <div className="form-control">
                <label>Soil Type</label>
                <select 
                  value={formData.soilType}
                  onChange={(e) => setFormData({...formData, soilType: e.target.value})}
                  required
                >
                  <option value="">Select soil type</option>
                  <option value="clay">Clay Soil</option>
                  <option value="sandy">Sandy Soil</option>
                  <option value="loamy">Loamy Soil</option>
                  <option value="silt">Silty Soil</option>
                  <option value="peat">Peat Soil</option>
                </select>
              </div>

              <div className="form-control">
                <label>Soil pH Level</label>
                <div className="range-slider">
                  <div className="range-value">{formData.soilPH}</div>
                  <input 
                    type="range"
                    min="0"
                    max="14"
                    step="0.1"
                    value={formData.soilPH}
                    onChange={(e) => setFormData({...formData, soilPH: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="submit-button">
              Generate Recommendation
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RecommendationForm;