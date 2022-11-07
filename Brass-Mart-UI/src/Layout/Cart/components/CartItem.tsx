import { Stack, Image, Text, SimpleGrid, Box } from '@chakra-ui/react';
import { formatMoney } from '../../../utils/formatMoney';
import RemoveFromCart from './RemoveFromCart';

interface Props {
  id: string;
  photo: string;
  name: string;
  price: number;
}

export default function CartItem({ id, photo, name, price }: Props) {
  return (
    <SimpleGrid
      key={id}
      columns={3}
      maxW="100%"
      minW="100%"
    >
      <Image
        src={photo}
        alt={name}
        w={24}
        h={24}
        objectFit="cover"
      />
      <Stack
        p={2}
        justify={"center"}
        align="left"
      >
        <Text>{name}</Text>
        <Text>{formatMoney(price)}</Text>
      </Stack>
      <Box textAlign="right">
        <RemoveFromCart id={id} />
      </Box>
    </SimpleGrid>
  );
};