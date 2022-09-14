import { Button } from '@chakra-ui/react';
import { useEffect } from 'react'
import useAddToCart from '../../../requests/mutations/useAddToCart';
import useUser from '../../../requests/queries/useUser';

interface Props {
  id: string;
};

function AddToCartButton({ id }: Props) {
  const { mutate: addToCart, data, isLoading, error } = useAddToCart({ id });
  const { data: user, refetch } = useUser();
  const added = !!user?.authenticatedItem.cart.find((cartItem: any) => cartItem.product.id === id)

  useEffect(() => {
    refetch();
  }, [data, refetch]);
  if (user) {
    return (
      <>
        {added ?
          <Button
            disabled
          >
            Added To Cart
          </Button>
        : <Button
          onClick={() => addToCart()}
        >
          Add To Cart
        </Button>
      }
      </>
    );
  } else {
    return (
      <Button
        as='a'
        href="sign-in"
      ></Button>
    );
  };
};

export default AddToCartButton;