import { Text, Image, Stack, HStack, Spacer } from '@chakra-ui/react';
import { IOrderItem } from '../../../types';
import { formatMoney } from '../../../utils/formatMoney';

interface Props {
  item: IOrderItem;
};

function OrderItem({ item }: Props) {
  const { name, price, photos, id } = item?.product;
  console.log(photos[0].image.publicUrlTransformed)
  return (
    <HStack
      key={id}
      align="flex-start"
      py={2}
    >
      <Image
        src={photos[0].image.publicUrlTransformed}
        alt={name}
        w={36}
        h={32}
        objectFit="cover"
      />
      <Spacer />
      <Stack>
        <Text>{name}</Text>
        <Text>{formatMoney(price)}</Text>
      </Stack>
    </HStack>
  );
}

export default OrderItem;