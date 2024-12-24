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
          <option value="">Choose your prefered fertilizer type</option>
          <option value="organic">Organic Fertilizers</option>
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
          <option value="superphosphate">Superphosphate</option>
          <option value="potassiumNitrate">Potassium Nitrate</option>
          <option value="tripleSuperphosphate">Triple Superphosphate</option>
          <option value="calciumNitrate">Calcium Nitrate</option>
          <option value="slowRelease">Slow-Release Fertilizers</option>
          <option value="controlledRelease">
            Controlled-Release Fertilizers
          </option>
          <option value="waterSoluble">Water-Soluble Fertilizers</option>
          <option value="liquidFertilizer">Liquid Fertilizers</option>
          <option value="foliarFertilizer">Foliar Fertilizers</option>
        </select>

        <label>Application Method</label>
        <select
          onChange={(e) =>
            updateFields({ preferedApplicationMethod: e.target.value })
          }
          value={preferedApplicationMethod}
        >
          <option value="">Choose your prefered application method</option>
          <option value="broadcasting">Broadcasting</option>
          <option value="banding">Banding</option>
          <option value="sideDressing">Side-Dressing</option>
          <option value="foliarApplication">Foliar Application</option>
          <option value="fertigation">Drip Irrigation (Fertigation)</option>
          <option value="topDressing">Top-Dressing</option>
          <option value="liquidFertilizerInjection">
            Liquid Fertilizer Injection
          </option>
          <option value="seedCoating">Seed Coating</option>
          <option value="injection">Injection</option>
        </select>
      </div>
    </div>
  );
};

export default FarmersInput;
