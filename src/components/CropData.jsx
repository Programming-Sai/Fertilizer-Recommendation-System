import React from "react";

const CropData = ({
  cropType,
  growthStage,
  yieldTarget,
  fertilizerHistory,
  waterRequirements,
  updateFields,
}) => {
  return (
    <div>
      <h3>
        <span>🌾</span>
        Crop Data
      </h3>
      <div className="form-control">
        <label>Select Your Crop</label>
        <select
          onChange={(e) => updateFields({ cropType: e.target.value })}
          value={cropType}
          required
          autoFocus
        >
          <option value="">Choose a crop type</option>
          <option value="rice">Rice</option>
          <option value="wheat">Wheat</option>
          <option value="corn">Corn</option>
          <option value="cotton">Cotton</option>
          <option value="sugarcane">Sugarcane</option>
          <option value="soybean">Soybean</option>
        </select>

        <label>Select Your Crop Growth Stage</label>
        <select
          onChange={(e) => updateFields({ growthStage: e.target.value })}
          value={growthStage}
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

        <label>Yield Target (kg/ha)</label>
        <input
          value={yieldTarget}
          onChange={(e) => updateFields({ yieldTarget: e.target.value })}
          required
          className="input"
          type="number"
          max={37}
          min={0}
          placeholder="Yield Target (kg/ha)"
        />

        <label>Water Requirements</label>
        <input
          required
          value={waterRequirements}
          onChange={(e) => updateFields({ waterRequirements: e.target.value })}
          className="input"
          type="number"
          max={37}
          min={0}
          placeholder="Water Requirements"
        />
        <label>Fertilizer History</label>
        <textarea
          required
          value={fertilizerHistory}
          onChange={(e) => updateFields({ fertilizerHistory: e.target.value })}
          className="input"
          cols={10}
          rows={10}
          placeholder="Fertilizer History"
        />
      </div>
    </div>
  );
};

export default CropData;
