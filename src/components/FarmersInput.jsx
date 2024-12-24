import React from "react";

const FarmersInput = ({
  preferedFertilizerType,
  preferedApplicationMethod,
  updateFields,
}) => {
  return (
    <div>
      <h3>
        <span>🚜</span>
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
          <option value="organic">Organic Fertilizers</option>
          <option value="NPK">NPK</option>
          <option value="inorganic">Inorganic Fertilizers</option>
          <option value="specialty">Specialty Fertilizers</option>
          <option value="compostedManure">Composted Manure</option>
          <option value="boneMeal">Bone Meal</option>
          <option value="fishMeal">Fish Meal</option>
          <option value="bloodMeal">Blood Meal</option>
          <option value="greenManure">Green Manure</option>
          <option value="compost">Compost</option>
          <option value="vermicompost">Vermicompost</option>
          <option value="seaweedExtract">Seaweed Extract</option>
          <option value="urea">Urea</option>
          <option value="ammoniumNitrate">Ammonium Nitrate</option>
        </select>

        <label>Application Method</label>
        <select
          onChange={(e) =>
            updateFields({ preferedApplicationMethod: e.target.value })
          }
          value={preferedApplicationMethod}
        >
          <option value="broadcasting">Broadcasting</option>
          <option value="sideDressing">Side-Dressing</option>
          <option value="fertigation">Drip Irrigation (Fertigation)</option>
          <option value="seedCoating">Seed Coating</option>
        </select>
      </div>
    </div>
  );
};

export default FarmersInput;
