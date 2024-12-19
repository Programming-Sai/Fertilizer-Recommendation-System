import React, { useState } from "react";

const useRecommendationForm = (steps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = () => {
    setCurrentStep((i) => {
      const nextStep = Math.min(i + 1, steps.length - 1); // Ensure we don't exceed the last step
      //   setProgress(((nextStep + 1) / steps.length) * 100); // Calculate progress
      return nextStep;
    });
  };

  const prev = () => {
    setCurrentStep((i) => {
      const prevStep = Math.max(i - 1, 0); // Ensure we don't go below 0
      //   setProgress(((prevStep + 1) / steps.length) * 100); // Calculate progress
      return prevStep;
    });
  };

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
    progress,
    setProgress,
  };
};

export default useRecommendationForm;
