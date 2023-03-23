import { Heading, Flex, FormControl, FormLabel, Input, Grid, GridItem, Checkbox } from '@chakra-ui/react';
import { useEffect } from 'react'
import { PrevButton, NextButton } from '../../../Layout/Wizard/components/Buttons';
import {
  useBillingAddress,
  useSetBillingAddress,
  useSetUseShipping,
  useShippingAddress,
  useUseShipping
} from '../CheckoutContext';
import CheckoutStepContainer from './components/CheckoutStepContainer';
import FormItem from './components/FormItem';

function BillingAddressStep() {
  const shippingAddress = useShippingAddress()
  const billingAddress = useBillingAddress()
  const setBillingAddress = useSetBillingAddress()
  const useShipping = useUseShipping()
  const setUseShipping = useSetUseShipping()

  useEffect(() => {
    !!useShipping ?
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
  }, [useShipping, shippingAddress, setBillingAddress]);

  return (
    <CheckoutStepContainer>
      <Heading>Payment</Heading>
      <Flex justifyContent="space-between">
        <Heading size="lg">Billing Address</Heading>
        <Checkbox
          isChecked={useShipping}
          onChange={() => setUseShipping(!useShipping)}
        >
          Use Shipping Address
        </Checkbox>
      </Flex>
      <FormItem
        name="Name"
        value={billingAddress?.name}
        onChange={(e) => setBillingAddress({ ...billingAddress, name: e.target.value})}
        isRequired={true}
      />
      <FormItem
        name="Street"
        value={billingAddress?.street}
        onChange={(e) => setBillingAddress({ ...billingAddress, street: e.target.value})}
        isRequired={true}
      />
      <FormItem
          name="Street #2"
          value={billingAddress?.street2}
          onChange={(e) => setBillingAddress({ ...billingAddress, street2: e.target.value})}
        />
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem colSpan={2}>
        <FormItem
          name="City"
          value={billingAddress?.city}
          onChange={(e) => setBillingAddress({ ...billingAddress, city: e.target.value})}
          isRequired={true}
        />
        </GridItem>
        <GridItem colSpan={1}>
        <FormItem
          name="State"
          value={billingAddress?.state}
          onChange={(e) => setBillingAddress({ ...billingAddress, state: e.target.value})}
          isRequired={true}
        />
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem colSpan={1}>
        <FormItem
          name="Zip Code"
          value={billingAddress?.zipCode}
          onChange={(e) => setBillingAddress({ ...billingAddress, zipCode: e.target.value})}
          isRequired={true}
        />
        </GridItem>
      </Grid>
      <FormControl isRequired>
        <FormLabel>Country</FormLabel>
        <Input
              value={billingAddress?.country}
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