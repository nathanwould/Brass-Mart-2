import { Button } from '@chakra-ui/react';
import { useEffect } from 'react'
import useAddToCart from '../../../requests/mutations/useAddToCart';
import useUser from '../../../requests/queries/useUser';
import { ICartItem } from '../../../types';

interface Props {
  id: string;
};

function AddToCartButton({ id }: Props) {
  const { mutate: addToCart, data, isLoading } = useAddToCart({ id });
  const { data: userData, refetch } = useUser();
  const user = userData?.authenticatedItem;
  const added = !!user?.cart?.find((cartItem: ICartItem) => cartItem.product.id === id)

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
            isLoading={isLoading}
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
      >
        Add To Cart
      </Button>
    );
  };
};

export default AddToCartButton;