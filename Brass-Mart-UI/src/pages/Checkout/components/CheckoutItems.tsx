

import { Text, Heading, Grid, GridItem } from '@chakra-ui/react';
import CartItem from '../../../Layout/Cart/components/CartItem';
import { ICartItem, IUser } from '../../../types';
import calcTotalPrice from '../../../utils/calcTotalPrice';
import { formatMoney } from '../../../utils/formatMoney';
import { NextButton } from '../../../Layout/Wizard/Wizard';
import CheckoutStepContainer from './components/CheckoutStepContainer';

interface Props {
  user: IUser;
};

function CheckoutItems({ user }: Props) {
  const cart = user?.cart;

  return (
    <CheckoutStepContainer>
      <Heading>Checkout</Heading>
      {user?.cartCount > 0 ?
        cart.map((item: ICartItem) => {
          const { name, price } = item.product;
          const photo = item.product.photos[0]?.image.publicUrlTransformed;
          return (
            <CartItem
              key={item.id}
              id={item.id}
              name={name}
              price={price}
              photo={photo}
            />
          );
        })
        : <Text>Your cart is currently empty.</Text>  
      }
      <Grid
        w="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={1}>
          <Text fontWeight="bold" >Subtotal:</Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Text align="right" fontWeight="bold" >{formatMoney(calcTotalPrice(user?.cart))}</Text>
        </GridItem>
        <GridItem colSpan={2} textAlign="right">
          <NextButton text="Shipping" />
        </GridItem>
      </Grid>
    </CheckoutStepContainer>
  );
}

export default CheckoutItems