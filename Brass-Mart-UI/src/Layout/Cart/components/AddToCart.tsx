import { Button } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import useAddToCart from '../../../requests/mutations/useAddToCart';
import useUser from '../../../requests/queries/useUser';

interface Props {
  id: string;
};

function AddToCartButton({ id }: Props) {
  const { mutate: addToCart, data, isLoading, error } = useAddToCart({ id });
  const { refetch } = useUser();

  useEffect(() => {
    refetch();
  }, [data, refetch]);
  
  return (
    <Button
      onClick={() => addToCart()}
    >
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;