import { Button } from '@chakra-ui/react';

function CheckoutButton() {
  return (
    <Button
      as="a"
      href="/checkout"
      colorScheme="blue"
      minW={100}
    >
      Checkout
    </Button>
  );
}

export default CheckoutButton;