import { Heading, Flex } from '@chakra-ui/react';
import React from 'react'
import { NextButton, PrevButton } from '../../../Layout/Wizard/Wizard';
import CheckoutStepContainer from './components/CheckoutStepContainer';

interface Props {}

function PaymentStep({}: Props) {
  return (
    <CheckoutStepContainer>
      <Heading>Payment</Heading>
      <Flex justifyContent="space-between">
        <PrevButton text="Shipping" />
        <NextButton text="Finalize" />
      </Flex>
    </CheckoutStepContainer>
  );
}

export default PaymentStep;