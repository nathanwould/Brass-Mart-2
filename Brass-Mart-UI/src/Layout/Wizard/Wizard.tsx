import { SlideDirection, VStack } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { WizardContext } from './components/WizardContext';

export interface WizardProps {
  children: React.ReactNode;
  props?: any;
};

function Wizard({
  children,
}: WizardProps) {
  const [steps, setSteps] = useState(0)
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<SlideDirection>("left");

  const goPrev = useCallback(() => {
    setDirection("left");
    setCurrentStep(currentStep - 1);
  }, [currentStep]);

  const goNext = useCallback(() => {
    setDirection("right");
    setCurrentStep(currentStep + 1);
  }, [currentStep]);

  const context = {
    steps,
    setSteps,
    currentStep,
    setCurrentStep,
    goNext,
    goPrev,
    direction,
    setDirection,
  };

  return (
    <WizardContext.Provider value={context}>
      <VStack minW="100%">{children}</VStack>
    </WizardContext.Provider>
  );
};

export default Wizard;
