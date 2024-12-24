import React, { useEffect } from "react";

const EnvironmentalData = ({
  temperature,
  humidity,
  rainfall,
  season,
  location,
  updateFields,
  setFilledForm,
}) => {
  useEffect(() => {
    setFilledForm((prev) => ({
      ...prev,
      environmentalDataFilled:
        temperature && humidity && rainfall && season && location,
    }));
  }, [temperature, humidity, rainfall, season, location, setFilledForm]);

  return (
    <div>
      <h3>
        <span>🌿</span>
        Ecological Details
      </h3>
      <div className="form-control">
        <label>Temperature</label>
        <select
          value={temperature}
          onChange={(e) => updateFields({ temperature: e.target.value })}
          required
          name="temperature"
        >
          <option value="">Select The Temperature Range</option>
          <option value="cold">Cold (0 - 10°C)</option>
          <option value="cool">Cool (10 - 20°C)</option>
          <option value="moderate">Moderate (20 - 30°C)</option>
          <option value="hot">Hot (30 - 40°C)</option>
          <option value="veryHot">Very Hot (40+°C)</option>
        </select>

        <label>Rainfall</label>
        <select
          value={rainfall}
          onChange={(e) => updateFields({ rainfall: e.target.value })}
          required
          name="rainfall"
        >
          <option value="">Select The Rainfall Range</option>
          <option value="low">Low (0 - 500 mm)</option>
          <option value="moderate">Moderate (500 - 1000 mm)</option>
          <option value="high">High (1000 - 1500 mm)</option>
          <option value="veryHigh">Very High (1500+ mm)</option>
          <option value="variable">Variable (seasonally fluctuating)</option>
        </select>
        <label>Humidity</label>
        <select
          value={humidity}
          onChange={(e) => updateFields({ humidity: e.target.value })}
          required
          name="humidity"
        >
          <option value="">Select The Humidity Range</option>
          <option value="low">Low (0 - 20%)</option>
          <option value="moderate">Moderate (20 - 40%)</option>
          <option value="high">High (40 - 60%)</option>
          <option value="veryHigh">Very High (60 - 80%)</option>
          <option value="extreme">Extreme (80+%)</option>
        </select>
        <label>Season</label>
        <select
          value={season}
          onChange={(e) => updateFields({ season: e.target.value })}
          required
          name="season"
        >
          <option value="">Select The Current Season</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="autumn">Autumn</option>
          <option value="winter">Winter</option>
          <option value="wet">Wet Season</option>
          <option value="dry">Dry Season</option>
        </select>

        <label>Region/Location</label>
        <select
          value={location}
          onChange={(e) => updateFields({ location: e.target.value })}
          required
          name="region"
        >
          <option value="">Select region type</option>
          <option value="tropical">Tropical</option>
          <option value="temperate">Temperate</option>
          <option value="arid">Arid</option>
          <option value="mountainous">Mountainous</option>
          <option value="coastal">Coastal</option>
        </select>
      </div>
    </div>
  );
};

export default EnvironmentalData;
