import { Flex, Heading, FormControl, FormLabel, Input, Select, FormHelperText, Grid, GridItem } from '@chakra-ui/react';
import { NextButton, PrevButton } from '../../../Layout/Wizard/Wizard';
import { useCheckoutContext } from '../Checkout';
import CheckoutStepContainer from './components/CheckoutStepContainer';

function ShippingForm() {
  const { address, setAddress } = useCheckoutContext();

  // console.log(form)
  return (
    <CheckoutStepContainer>
      <Heading>Shipping</Heading>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          value={address.name}
          onChange={(e) => setAddress({...address, name: e.target.value})}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Street</FormLabel>
        <Input
          value={address.street}
          onChange={(e) => setAddress({...address, street: e.target.value})}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Street #2</FormLabel>
        <Input
          value={address.street2}
          onChange={(e) => setAddress({...address, street2: e.target.value})}
        />
      </FormControl>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Input 
              value={address.city}
              onChange={(e) => setAddress({...address, city: e.target.value})}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel>State</FormLabel>
            <Input
              value={address.state}
              onChange={(e) => setAddress({...address, state: e.target.value})}
            />
          </FormControl>
        </GridItem>
      </Grid>
      <FormControl isRequired>
        <FormLabel>Country</FormLabel>
        <Select
          value={address.country}
          onChange={(e) => setAddress({ ...address, country: e.target.value })}
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