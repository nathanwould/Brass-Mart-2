import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import calcTotalPrice from '../../utils/calcTotalPrice';
import { formatMoney } from '../../utils/formatMoney';
import CartItem from './components/CartItem';
import CheckoutButton from './components/CheckoutButton';

interface Props {
  user: any;
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
          <VStack spacing={2}>  
            {user?.cartCount > 0 ?
              user.cart.map((item: any) => {
                console.log(item.id)
                const { name, price } = item.product;
                const photo = item.product.photos[0]?.image.publicUrlTransformed || null;
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
              <Text>{formatMoney(calcTotalPrice(user?.cart))}</Text>
            </GridItem>
            <GridItem colSpan={2}>
              <CheckoutButton />
            </GridItem>
          </Grid>
          {/* <SimpleGrid columns={2} spacing={8}>
            <Box>
              <Text>Subtotal:</Text>
            </Box>
            <Box>
              <Text>{formatMoney(calcTotalPrice(user?.cart))}</Text>
            </Box>
            <Box>
              <CheckoutButton />
            </Box>
          </SimpleGrid> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default Cart