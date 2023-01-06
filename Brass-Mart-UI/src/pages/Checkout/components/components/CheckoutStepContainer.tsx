import { Slide, StackDivider, VStack } from '@chakra-ui/react';
import { MotionStyle } from 'framer-motion';
import React from 'react'
import { useWizardContext } from '../../../../Layout/Wizard/components/WizardContext';

interface Props { 
  children: React.ReactNode;
};

const sliderStyles: MotionStyle = {
  position: 'relative',
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  right: undefined,
  top: undefined,
  bottom: undefined,
};

function CheckoutStepContainer({ children }: Props) {
  const { direction } = useWizardContext();
  return (
    <Slide
        in={true}
        direction={direction}
        style={{ ...sliderStyles }}
      >   
      <VStack
        spacing={4}
        p={8}
        m={12}
        marginTop={0}
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        w="80%"
        maxW="42rem"
        align="left"
        divider={<StackDivider borderColor="gray.200" />}
      >
        {children}
      </VStack>
    </Slide>
  );
}

export default CheckoutStepContainer;