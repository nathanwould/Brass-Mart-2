import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';

interface Props {
  user: any;
  isOpen: any;
  onClose: any;
};

function Cart({ user, isOpen, onClose }: Props) {
  const firstName = user?.name.split(' ')[0]
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
          Cart Items go here
        </DrawerBody>
        <DrawerFooter>
          Total Price and Checkout
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default Cart