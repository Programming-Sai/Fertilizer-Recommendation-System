import React from "react";

const FarmersInput = ({
  preferedFertilizerType,
  preferedApplicationMethod,
  updateFields,
}) => {
  return (
    <div>
      <h3>
        <span>🌱</span>
        Farmer's Input (Optional)
      </h3>
      <div className="form-control">
        <label>Preferred Fertilizer Type</label>
        <select
          onChange={(e) =>
            updateFields({ preferedFertilizerType: e.target.value })
          }
          value={preferedFertilizerType}
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

        <label>Application Method</label>
        <select
          onChange={(e) =>
            updateFields({ preferedApplicationMethod: e.target.value })
          }
          value={preferedApplicationMethod}
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
  );
};

export default FarmersInput;
