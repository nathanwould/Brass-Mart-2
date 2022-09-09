import { Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import useRemoveFromCart from '../../../requests/mutations/useRemoveFromCart';
import useUser from '../../../requests/queries/useUser';

type Props = {
  id: string;
};

function RemoveFromCart({ id }: Props) {
  const { mutate: removeFromCart, data, isLoading } = useRemoveFromCart({ id }
  );
  const { refetch } = useUser();

  useEffect(() => {
    refetch();
  }, [data, refetch]);
return (
  <Button
    isLoading={isLoading}
    onClick={() => removeFromCart()}
    p={0}
    h={6}
    minW={6}
    fontSize={12}
  >
    &#10006;
  </Button>
);
}

export default RemoveFromCart;