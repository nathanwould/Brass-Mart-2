import { SlideDirection } from "@chakra-ui/react";
import React from "react";

export interface WizardContextProps {
  steps: number;
  setSteps: (steps: number) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  goPrev: () => void;
  goNext: () => void;
  direction: SlideDirection;
  setDirection: (direction: SlideDirection) => void;
};

export const WizardContext = React.createContext<WizardContextProps>({
  steps: 0,
  setSteps: () => { },
  currentStep: 0,
  setCurrentStep: () => { },
  goNext: () => { },
  goPrev: () => { },
  direction: "left",
  setDirection: () => { },
});

export const useWizardContext = () => {
  const context = React.useContext(WizardContext);
  if (!context) {
    throw new Error(
      'Oops! '
    )
  }
  return context
};