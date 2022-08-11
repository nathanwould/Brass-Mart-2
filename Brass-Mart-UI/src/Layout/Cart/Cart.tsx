import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import CartItem from './components/CartItem';

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
                const { name, price } = item.product;
                const photo = item.product.photos[0]?.image.publicUrlTransformed || null;
                return (
                  <CartItem
                    key={item.id}
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
        <DrawerFooter>
          Total Price and Checkout
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default Cart