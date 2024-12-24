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
        temperature &&
        humidity >= 0 &&
        humidity <= 100 &&
        rainfall &&
        season &&
        location,
    }));
  }, [temperature, humidity, rainfall, season, location, setFilledForm]);

  return (
    <div>
      <h3>
        <span>🌱</span>
        Ecological Details
      </h3>
      <div className="form-control">
        <label>Temperature</label>
        <input
          value={temperature}
          onChange={(e) => updateFields({ temperature: e.target.value })}
          required
          autoFocus
          className="input"
          type="number"
          placeholder="Temperature Degrees in Celcius"
        />

        <label>Rainfall</label>
        <input
          value={rainfall}
          onChange={(e) => updateFields({ rainfall: e.target.value })}
          required
          className="input"
          type="number"
          placeholder="Rainfall in Milliliters"
        />
        <label>Humidity</label>
        <input
          value={humidity}
          onChange={(e) => updateFields({ humidity: e.target.value })}
          required
          className="input"
          type="number"
          max={100}
          min={0}
          placeholder="Humidity (%)"
        />

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
