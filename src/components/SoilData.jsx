import React, { useEffect } from "react";

const SoilData = ({
  pHLevel,
  nitrogen,
  phosphorous,
  potassium,
  soilType,
  organicMatter,
  soilMoisture,
  electicalConductivity,
  updateFields,
  setFilledForm,
}) => {
  useEffect(() => {
    setFilledForm((prev) => ({
      ...prev,
      soilDataFilled:
        pHLevel &&
        nitrogen &&
        nitrogen >= 0 &&
        nitrogen <= 200 &&
        phosphorous &&
        phosphorous >= 0 &&
        phosphorous <= 50 &&
        potassium &&
        potassium >= 0 &&
        potassium <= 400 &&
        soilType &&
        organicMatter &&
        organicMatter >= 0 &&
        organicMatter <= 10 &&
        soilMoisture &&
        soilMoisture >= 0 &&
        soilMoisture <= 100 &&
        electicalConductivity &&
        electicalConductivity >= 0 &&
        electicalConductivity <= 4,
    }));
  }, [
    pHLevel,
    nitrogen,
    phosphorous,
    potassium,
    soilType,
    organicMatter,
    soilMoisture,
    electicalConductivity,
    setFilledForm,
  ]);
  return (
    <div>
      <h3>
        <span>🌱</span>
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
        <div className="range-slider">
          <div className="range-value">{pHLevel}</div>
          <input
            type="range"
            value={pHLevel}
            onChange={(e) => updateFields({ pHLevel: e.target.value })}
            min="0"
            max="14"
            step="0.1"
            required
          />
        </div>
        <label>Nitrogen Content</label>
        <input
          required
          value={nitrogen}
          onChange={(e) => updateFields({ nitrogen: e.target.value })}
          className="input"
          type="number"
          max={200}
          min={0}
          placeholder="Nitrogen Content"
        />

        <label>Phosphorous Content</label>
        <input
          required
          className="input"
          value={phosphorous}
          onChange={(e) => updateFields({ phosphorous: e.target.value })}
          type="number"
          max={50}
          min={0}
          placeholder="Phosphorous Content"
        />

        <label>Potassium Content</label>
        <input
          required
          value={potassium}
          onChange={(e) => updateFields({ potassium: e.target.value })}
          className="input"
          type="number"
          max={400}
          min={0}
          placeholder="Potassium Content"
        />

        <label>Soil Moisture</label>
        <input
          required
          className="input"
          value={soilMoisture}
          onChange={(e) => updateFields({ soilMoisture: e.target.value })}
          type="number"
          max={100}
          min={0}
          placeholder="Soil Moisture"
        />
        <label>Electrical Conductivity (EC)</label>
        <input
          required
          value={electicalConductivity}
          onChange={(e) =>
            updateFields({ electicalConductivity: e.target.value })
          }
          className="input"
          type="number"
          max={4}
          min={0}
          placeholder="Electrical Conductivity (EC)"
          step={0.1}
        />
        <label>Organic Matter (%)</label>
        <input
          required
          value={organicMatter}
          onChange={(e) => updateFields({ organicMatter: e.target.value })}
          className="input"
          type="number"
          max={10}
          min={0}
          placeholder="Organic Matter (%)"
          step={0.1}
        />
      </div>
    </div>
  );
};

export default SoilData;
