import React, { useEffect } from "react";

const SoilData = ({
  pHLevel,
  nitrogen,
  phosphorous,
  potassium,
  soilType,
  organicMatter,
  soilMoisture,
  electricalConductivity,
  updateFields,
  setFilledForm,
}) => {
  useEffect(() => {
    setFilledForm((prev) => ({
      ...prev,
      soilDataFilled:
        pHLevel &&
        nitrogen &&
        phosphorous &&
        potassium &&
        soilType &&
        organicMatter &&
        soilMoisture &&
        electricalConductivity,
    }));
  }, [
    pHLevel,
    nitrogen,
    phosphorous,
    potassium,
    soilType,
    organicMatter,
    soilMoisture,
    electricalConductivity,
    setFilledForm,
  ]);
  return (
    <div>
      <h3>
        <span>🍂</span>
        Soil Analysis
      </h3>
      <div className="form-control">
        <label>Soil Type</label>
        <select
          onChange={(e) => updateFields({ soilType: e.target.value })}
          value={soilType}
          required
          autoFocus
        >
          <option value="">Select soil type</option>
          <option value="clay">Clay Soil</option>
          <option value="sandy">Sandy Soil</option>
          <option value="loamy">Loamy Soil</option>
          <option value="silt">Silty Soil</option>
          <option value="peat">Peat Soil</option>
          <option value="saline">Salty Soil</option>
          <option value="chalky">Chalky Soil</option>
        </select>

        <label>Soil pH Level</label>
        <select
          onChange={(e) => updateFields({ pHLevel: e.target.value })}
          value={pHLevel}
          required
          autoFocus
        >
          <option value="">Select The pH Level Range</option>
          <option value="acidic">Acidic (4 - 5)</option>
          <option value="slightlyAcidic">Slightly Acidic (5 - 6)</option>
          <option value="neutral">Neutral (6 - 7)</option>
          <option value="slightlyAlkaline">Slightly Alkaline (7 - 8)</option>
          <option value="alkaline">Alkaline (8+)</option>
        </select>
        <label>Nitrogen Content</label>
        <select
          onChange={(e) => updateFields({ nitrogen: e.target.value })}
          value={nitrogen}
          required
          autoFocus
        >
          <option value="">Select Nitrogen Level</option>
          <option value="low">Low (0 - 50 kg/ha)</option>
          <option value="moderate">Moderate (50 - 100 kg/ha)</option>
          <option value="high">High (100 - 150 kg/ha)</option>
          <option value="veryHigh">Very High (150+ kg/ha)</option>
        </select>

        <label>Phosphorous Content</label>
        <select
          onChange={(e) => updateFields({ phosphorous: e.target.value })}
          value={phosphorous}
          required
          autoFocus
        >
          <option value="">Select Phosphorous Level</option>
          <option value="low">Low (0 - 30 kg/ha)</option>
          <option value="moderate">Moderate (30 - 60 kg/ha)</option>
          <option value="high">High (60 - 100 kg/ha)</option>
          <option value="veryHigh">Very High (100+ kg/ha)</option>
        </select>

        <label>Potassium Content</label>
        <select
          onChange={(e) => updateFields({ potassium: e.target.value })}
          value={potassium}
          required
          autoFocus
        >
          <option value="">Select Potassium Level</option>
          <option value="low">Low (0 - 40 kg/ha)</option>
          <option value="moderate">Moderate (40 - 80 kg/ha)</option>
          <option value="high">High (80 - 120 kg/ha)</option>
          <option value="veryHigh">Very High (120+ kg/ha)</option>
        </select>

        <label>Soil Moisture</label>
        <select
          onChange={(e) => updateFields({ soilMoisture: e.target.value })}
          value={soilMoisture}
          required
          autoFocus
        >
          <option value="">Select Soil Moisture Level</option>
          <option value="low">Low (0 - 20%)</option>
          <option value="moderate">Moderate (20 - 50%)</option>
          <option value="high">High (50 - 80%)</option>
          <option value="veryHigh">Very High (80+%)</option>
        </select>
        <label>Electrical Conductivity (EC)</label>
        <select
          onChange={(e) =>
            updateFields({ electricalConductivity: e.target.value })
          }
          value={electricalConductivity}
          required
          autoFocus
        >
          <option value="">Select The Electrical Conductivity Range</option>
          <option value="low">Low (0 - 1)</option>
          <option value="moderate">Moderate (1 - 2)</option>
          <option value="high">High (2 - 3)</option>
          <option value="veryHigh">Very High (3 - 4)</option>
          <option value="extreme">Extreme (4+)</option>
        </select>
        <label>Organic Matter (%)</label>
        <select
          onChange={(e) => updateFields({ organicMatter: e.target.value })}
          value={organicMatter}
          required
          autoFocus
        >
          <option value="">Select Organic Matter Level</option>
          <option value="low">Low (0 - 2%)</option>
          <option value="moderate">Moderate (2 - 5%)</option>
          <option value="high">High (5 - 10%)</option>
          <option value="veryHigh">Very High (10+%)</option>
        </select>
      </div>
    </div>
  );
};

export default SoilData;
