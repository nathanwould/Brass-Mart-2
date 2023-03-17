import { Button } from '@chakra-ui/react';

interface Props {
  id: string;
  cartCount: number;
};

function CheckoutButton({ id, cartCount }: Props) {
  return (
    <Button
      as="a"
      href={`/checkout/${id}`}
      colorScheme="blue"
      minW={100}
      isDisabled={cartCount < 1}
    >
      Checkout
    </Button>
  );
}

export default CheckoutButton;