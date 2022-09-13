import { CloseIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
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
  <IconButton
    isLoading={isLoading}
    onClick={() => removeFromCart()}
    aria-label="remove item"
    icon={<CloseIcon />}
    colorScheme="red"
    p={0}
    h={6}
    minW={6}
    fontSize={10}
  />
);
}

export default RemoveFromCart;