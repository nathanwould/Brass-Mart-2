import { Heading, Flex, FormControl, FormLabel, Input, Grid, GridItem, Checkbox } from '@chakra-ui/react';
import { useEffect, useState } from 'react'
import { NextButton, PrevButton } from '../../../Layout/Wizard/Wizard';
import { useCheckoutContext } from '../Checkout';
import CheckoutStepContainer from './components/CheckoutStepContainer';

function BillingAddressStep() {
  const [checked, setChecked] = useState(false);
  const { billingAddress, setBillingAddress, shippingAddress } = useCheckoutContext();

  useEffect(() => {
    !!checked ?
      setBillingAddress(shippingAddress)
      : setBillingAddress({
        name: '',
        street: '',
        street2: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'USA',
      })
  }, [checked, shippingAddress, setBillingAddress]);

  return (
    <CheckoutStepContainer>
      <Heading>Payment</Heading>
      <Flex justifyContent="space-between">
        <Heading size="lg">Billing Address</Heading>
        <Checkbox
          isChecked={checked}
          onChange={() => setChecked(!checked)}
        >
          Use Shipping Address
        </Checkbox>
      </Flex>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          value={billingAddress.name}
          onChange={(e) => setBillingAddress({ ...billingAddress, name: e.target.value })}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Street</FormLabel>
        <Input
          value={billingAddress.street}
          onChange={(e) => setBillingAddress({ ...billingAddress, street: e.target.value })}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Street #2</FormLabel>
        <Input
          value={billingAddress.street2}
          onChange={(e) => setBillingAddress({ ...billingAddress, street2: e.target.value })}
        />
      </FormControl>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Input 
              value={billingAddress.city}
              onChange={(e) => setBillingAddress({ ...billingAddress, city: e.target.value })}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel>State</FormLabel>
            <Input
              value={billingAddress.state}
              onChange={(e) => setBillingAddress({ ...billingAddress, state: e.target.value })}
            />
          </FormControl>
        </GridItem>
      </Grid>
      <FormControl isRequired>
        <FormLabel>Country</FormLabel>
        <Input
              value={billingAddress.country}
              onChange={(e) => setBillingAddress({ ...billingAddress, country: e.target.value })}
            />
      </FormControl>
      <Flex justifyContent="space-between">
        <PrevButton text="Shipping" />
        <NextButton text="Finalize" />
      </Flex>
    </CheckoutStepContainer>
  );
}

export default BillingAddressStep;