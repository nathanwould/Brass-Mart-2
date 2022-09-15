import { Stack, Image, Text } from '@chakra-ui/react';
import { formatMoney } from '../../../utils/formatMoney';
import RemoveFromCart from './RemoveFromCart';

type Props = {
  id: string;
  photo: string;
  name: string;
  price: number;
}

export default function CartItem({ id, photo, name, price }: Props) {
  return (
    <Stack
      direction={{ base: "row" }}
      maxW="100%"
      minW="100%"
      justifyContent="space-between"
    >
      
      <Image
        src={photo}
        alt={name}
        w={24}
        h={24}
        objectFit="cover"
      />

      <Stack p={2} justifyContent={"center"}>
        <Text>{name}</Text>
        <Text>{formatMoney(price)}</Text>
      </Stack>

      <RemoveFromCart id={id} />

    </Stack>
  );
};