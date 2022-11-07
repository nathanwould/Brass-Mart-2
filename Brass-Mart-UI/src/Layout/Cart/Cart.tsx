import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  GridItem,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ICartItem, IUser } from '../../types';
import calcTotalPrice from '../../utils/calcTotalPrice';
import { formatMoney } from '../../utils/formatMoney';
import CartItem from './components/CartItem';
import CheckoutButton from './components/CheckoutButton';

interface Props {
  user: IUser;
  refetch: () => void;
  isOpen: boolean;
  onClose: () => void;
};

function Cart({ user, isOpen, onClose }: Props) {
  const firstName = user?.name.split(' ')[0];
  return (
    <Drawer
      placement='right'
      onClose={onClose}
      isOpen={isOpen}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{firstName}'s Cart</DrawerHeader>
        <DrawerBody>
          <VStack spacing={2} divider={<StackDivider borderColor='gray.200' />}>  
            {user?.cartCount > 0 ?
              user.cart.map((item: ICartItem) => {
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
          </VStack>
        </DrawerBody>
        <Divider borderColor="gray.200" />
        <DrawerFooter justifyContent="flex-start">
          <Grid
            w="100%"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={1} colSpan={1}>
              <Text>Subtotal:</Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <Text align="right">{formatMoney(calcTotalPrice(user?.cart))}</Text>
            </GridItem>
            <GridItem colSpan={2}>
              <CheckoutButton id={user?.id} cartCount={user?.cartCount} />
            </GridItem>
          </Grid>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default Cart