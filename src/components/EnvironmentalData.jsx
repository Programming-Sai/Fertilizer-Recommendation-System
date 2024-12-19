import React from "react";

const EnvironmentalData = ({
  temperature,
  humidity,
  rainfall,
  season,
  location,
  updateFields,
}) => {
  return (
    <div>
      <h3>
        <span>🌱</span>
        Environmental Data
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
          max={37}
          min={0}
          placeholder="Temperature Degrees in Celcius"
        />

        <label>Rainfall</label>
        <input
          value={rainfall}
          onChange={(e) => updateFields({ rainfall: e.target.value })}
          required
          className="input"
          type="number"
          max={37}
          min={0}
          placeholder="Rainfall in Milliliters"
        />
        <label>Humidity</label>
        <input
          value={humidity}
          onChange={(e) => updateFields({ humidity: e.target.value })}
          required
          className="input"
          type="number"
          max={37}
          min={0}
          placeholder="Humidity in Percentages"
        />

        <label>Season</label>
        <select
          value={season}
          onChange={(e) => updateFields({ season: e.target.value })}
          required
        >
          <option value="">Select soil type</option>
          <option value="clay">Rainy</option>
          <option value="sandy">Dry</option>
          <option value="loamy">Summer</option>
          <option value="silt">Winter</option>
        </select>

        <label>Region/Location</label>
        <input
          value={location}
          onChange={(e) => updateFields({ location: e.target.value })}
          required
          className="input"
          type="text"
          max={37}
          min={0}
          placeholder="Location"
        />
      </div>
    </div>
  );
};

export default EnvironmentalData;
