import { Button } from '@chakra-ui/react';

interface Props {
  id: string
};

function CheckoutButton({ id }: Props) {
  return (
    <Button
      as="a"
      href={`/checkout/${id}`}
      colorScheme="blue"
      minW={100}
    >
      Checkout
    </Button>
  );
}

export default CheckoutButton;