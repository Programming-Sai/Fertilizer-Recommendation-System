import React, { useEffect } from "react";

const CropData = ({
  cropType,
  growthStage,
  yieldTarget,
  fertilizerHistory,
  waterRequirements,
  updateFields,
  setFilledForm,
}) => {
  useEffect(() => {
    setFilledForm((prev) => ({
      ...prev,
      cropDataFilled:
        cropType &&
        growthStage &&
        yieldTarget &&
        fertilizerHistory &&
        waterRequirements,
    }));
  }, [
    cropType,
    growthStage,
    yieldTarget,
    fertilizerHistory,
    waterRequirements,
    setFilledForm,
  ]);

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
          <option value="cereal">Cereal (e.g., Wheat, Rice, Maize)</option>
          <option value="legume">Legume (e.g., Soybean, Peas, Lentils)</option>
          <option value="vegetable">
            Vegetable (e.g., Tomato, Carrot, Cabbage)
          </option>
          <option value="fruit">Fruit (e.g., Mango, Banana, Apple)</option>
          <option value="oilseed">
            Oilseed (e.g., Sunflower, Canola, Groundnut)
          </option>
          <option value="tuber">
            Tuber (e.g., Potato, Sweet Potato, Cassava)
          </option>
        </select>

        <label>Select Your Crop Growth Stage</label>
        <select
          onChange={(e) => updateFields({ growthStage: e.target.value })}
          value={growthStage}
          required
        >
          <option value="">Choose a crop type</option>
          <option value="seedling">Seedling</option>
          <option value="vegetative">Vegetative</option>
          <option value="flowering">Flowering</option>
          <option value="fruiting">Fruiting</option>
          <option value="harvest">Harvest Ready</option>
        </select>

        <label>Yield Target (kg/ha)</label>
        <select
          onChange={(e) => updateFields({ yieldTarget: e.target.value })}
          value={yieldTarget}
          required
        >
          <option value="">Select The Yield Target Range</option>
          <option value="low">Low (0 - 5)</option>
          <option value="moderate">Moderate (5 - 10)</option>
          <option value="high">High (10 - 15)</option>
          <option value="slightlyHigh">Slightly High (15 - 20)</option>
          <option value="veryHigh">Very High (20+)</option>
        </select>

        <label>Water Requirements</label>
        <select
          onChange={(e) => updateFields({ waterRequirements: e.target.value })}
          value={waterRequirements}
          required
        >
          <option value="">Choose a water requirement level</option>
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
          <option value="veryHigh">Very High</option>
          <option value="variable">Variable</option>
        </select>
        <label>Fertilizer History</label>
        <select
          onChange={(e) => updateFields({ fertilizerHistory: e.target.value })}
          value={fertilizerHistory}
          required
        >
          <option value="">Choose fertilizer application level</option>
          <option value="none">None</option>
          <option value="low">Low (1 application/season)</option>
          <option value="moderate">Moderate (2-3 applications/season)</option>
          <option value="high">High ({">"}3 applications/season)</option>
        </select>
      </div>
    </div>
  );
};

export default CropData;
