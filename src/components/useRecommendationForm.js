import React, { useState, useEffect } from "react";

const useRecommendationForm = (steps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    setCurrentStep((i) => Math.min(i + 1, steps.length - 1)); // Ensure we don't exceed the last step
  };

  const prev = () => {
    setCurrentStep((i) => Math.max(i - 1, 0));
  };

  // Debugging the current step value
  useEffect(() => {
    console.log("Updated current step:", currentStep); // Confirming the update
  }, [currentStep]);

  const goto = (number) => {
    setCurrentStep(number);
  };

  return {
    next,
    prev,
    steps,
    currentStep,
    goto,
    step: steps[currentStep],
  };
};

export default useRecommendationForm;
