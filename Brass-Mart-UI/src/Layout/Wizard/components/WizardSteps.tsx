import React, { useEffect } from "react";
import { WizardProps } from "../Wizard";
import { useWizardContext } from "./WizardContext";

export default function WizardSteps({ children }: WizardProps) {
  const { setSteps, currentStep } = useWizardContext();
  const pages = React.Children.toArray(children);
  const steps = React.Children.count(children);

  useEffect(() => {
    setSteps(steps);
  }, [steps, setSteps]);

  return <>{pages[currentStep]}</>
};