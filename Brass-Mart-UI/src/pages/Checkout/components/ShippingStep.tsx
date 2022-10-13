import { Flex, Heading, FormControl, FormLabel, Input, Select, FormHelperText, Grid, GridItem } from '@chakra-ui/react';
import { NextButton, PrevButton } from '../../../Layout/Wizard/Wizard';
import { useCheckoutContext } from '../Checkout';
import CheckoutStepContainer from './components/CheckoutStepContainer';

function ShippingForm() {
  const { shippingAddress, setShippingAddress } = useCheckoutContext();

  // console.log(form)
  return (
    <CheckoutStepContainer>
      <Heading>Shipping</Heading>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          value={shippingAddress.name}
          onChange={(e) => setShippingAddress({ ...shippingAddress, name: e.target.value })}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Street</FormLabel>
        <Input
          value={shippingAddress.street}
          onChange={(e) => setShippingAddress({ ...shippingAddress, street: e.target.value })}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Street #2</FormLabel>
        <Input
          value={shippingAddress.street2}
          onChange={(e) => setShippingAddress({ ...shippingAddress, street2: e.target.value })}
        />
      </FormControl>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Input 
              value={shippingAddress.city}
              onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel>State</FormLabel>
            <Input
              value={shippingAddress.state}
              onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
            />
          </FormControl>
        </GridItem>
      </Grid>
      <FormControl isRequired>
        <FormLabel>Country</FormLabel>
        <Select
          value={shippingAddress.country}
          onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
        >
          <option>United States of America</option>
        </Select>
        <FormHelperText>For shipping outside of the US, please call to place order.</FormHelperText>
      </FormControl>
      <Flex justifyContent="space-between" >
        <PrevButton text="Back" />
        <NextButton text="Payment" />
      </Flex>
    </CheckoutStepContainer>
  );
}

export default ShippingForm;