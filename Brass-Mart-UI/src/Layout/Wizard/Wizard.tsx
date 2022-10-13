import { ArrowBackIcon, ArrowForwardIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Button, Flex, SlideDirection, VStack, Text, Box, HStack } from '@chakra-ui/react';
import React, { useCallback, useContext, useEffect, useState } from 'react';

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

const WizardContext = React.createContext<WizardContextProps>({
  steps: 0,
  setSteps: () => { },
  currentStep: 0,
  setCurrentStep: () => { },
  goNext: () => { },
  goPrev: () => { },
  direction: "left",
  setDirection: () => { },
});

// const WizardContext = React.createContext({})

export const useWizardContext = () => {
  const context = React.useContext(WizardContext);
  if (!context) {
    throw new Error(
      'Oops! '
    )
  }
  return context
};

export const useWizardProgress = () => {
  const { currentStep, steps } = useWizardContext();
  return {
    currentStep,
    steps,
  };
};

interface WizardProps {
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
}

const WizardSteps = ({ children }: WizardProps) => {
  const { setSteps, currentStep } = useContext(WizardContext);
  const pages = React.Children.toArray(children);
  const steps = React.Children.count(children);

  useEffect(() => {
    setSteps(steps);
  }, [steps, setSteps]);

  return <>{pages[currentStep]}</>
};

interface ProgressProps {
  stepItems: string[];
}

const Progress = ({ stepItems }: ProgressProps) => {
  const { currentStep, steps } = useWizardProgress();
  return (
    <Flex
      marginTop={6}
      p={6}
      w="80%"
      maxW="42rem"
      alignItems="center"
      justifyContent="space-between"
    >
      {stepItems?.map((item: string, index: number) => (
        index < stepItems.length-1 ?
          <HStack key={index}>
            <Text
              color={index >= currentStep ? "gray.600" : "green.500"}
              transition="all .3s ease"
            >
              {item}
            </Text>
            <ArrowRightIcon
              boxSize={3}
              color={index >= currentStep ? "gray.600" : "green.500"}
              transition="all .3s ease"
            />
          </HStack>
          :
          <Box key={index}>
            <Text color={index >= currentStep ? "gray.600" : "green.500"}>{item}</Text>
          </Box>
      ))}
    </Flex>
  )
};

interface ButtonProps {
  text: string;
};

function NextButton({
  text
}: ButtonProps) {
  const { goNext } = useWizardContext();
  return (
    <Button
      colorScheme="green"
      rightIcon={text !== "Place Order" ? <ArrowForwardIcon /> : undefined}
      onClick={goNext}
    >
      {text}
    </Button>
  );
};

function PrevButton({
  text
}: ButtonProps) {
  const { goPrev } = useWizardContext();
  return (
    <Button
      leftIcon={<ArrowBackIcon />}
      onClick={goPrev}
    >
      {text}
    </Button>
  );
};

export {
  WizardSteps,
  Progress,
  NextButton,
  PrevButton
};

export default Wizard;
