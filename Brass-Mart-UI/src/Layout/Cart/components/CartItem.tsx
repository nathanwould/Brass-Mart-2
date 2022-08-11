import { Stack, Image, Text } from '@chakra-ui/react';
import { formatMoney } from '../../../utils/formatMoney';

type Props = {
  photo: string;
  name: string;
  price: number;
}

export default function CartItem({ photo, name, price}: Props) {
  return (
    <Stack
      direction={{ base: "row" }}
      maxW="100%"
      justifyContent="space-between"
    >
      <Image
        src={photo}
        alt={name}
        w={24}
        h={24}
        objectFit="cover"
      />
      <Stack>
        <Text>{name}</Text>
        <Text>{formatMoney(price)}</Text>
      </Stack>
    </Stack>
  );
};