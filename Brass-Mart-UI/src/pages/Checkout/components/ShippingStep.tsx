import { Flex, Heading, FormControl, FormLabel, Select, FormHelperText, Grid, GridItem } from '@chakra-ui/react';
import { PrevButton, NextButton } from '../../../Layout/Wizard/components/Buttons';
import { useSetShippingAddress, useShippingAddress } from '../CheckoutContext';
import CheckoutStepContainer from './components/CheckoutStepContainer';
import FormItem from './components/FormItem';

function ShippingForm() {
  const shippingAddress = useShippingAddress();
  const setShippingAddress = useSetShippingAddress();
  return (
    <CheckoutStepContainer>

      <Heading>Shipping</Heading>

      <FormItem
        name="Name"
        value={shippingAddress?.name}
        onChange={(e) => setShippingAddress({ ...shippingAddress, name: e.target.value})}
        isRequired={true}
      />

      <FormItem
        name="Street"
        value={shippingAddress?.street}
        onChange={(e) => setShippingAddress({ ...shippingAddress, street: e.target.value})}
        isRequired={true}
      />

      <FormItem
          name="Street #2"
          value={shippingAddress?.street2}
          onChange={(e) => setShippingAddress({ ...shippingAddress, street2: e.target.value})}
      />
      
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>

        <GridItem colSpan={2}>
          <FormItem
            name="City"
            value={shippingAddress?.city}
            onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value})}
            isRequired={true}
          />
        </GridItem>

        <GridItem colSpan={1}>
          <FormItem
            name="State"
            value={shippingAddress?.state}
            onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value})}
            isRequired={true}
          />
        </GridItem>

      </Grid>

      <Grid templateColumns="repeat(3, 1fr)" gap={4}>

        <GridItem colSpan={1}>
          <FormItem
            name="Zip Code"
            value={shippingAddress?.zipCode}
            onChange={(e) => setShippingAddress({ ...shippingAddress, zipCode: e.target.value})}
            isRequired={true}
          />
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel>Country</FormLabel>
            <Select
              value={shippingAddress?.country}
              onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
            >
              <option>USA</option>
            </Select>
            <FormHelperText>For shipping outside of the US, please call to place order.</FormHelperText>
          </FormControl>
        </GridItem>

      </Grid>

      <Flex justifyContent="space-between" >
        <PrevButton text="Back" />
        <NextButton text="Payment" />
      </Flex>

    </CheckoutStepContainer>
  );
}

export default ShippingForm;