import { VStack, Text, StackDivider, Heading, Box } from '@chakra-ui/react';
import { IOrder, IOrderItem } from '../../types';
import { formatMoney } from '../../utils/formatMoney';
import OrderItem from './components/OrderItem';

interface Props {
  order: IOrder;
}

function OrderItems({ order }: Props) {
  console.log(order);
  const items = order?.items;
  return (
    <VStack
      p={4}
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      boxShadow="md"
      divider={<StackDivider borderColor='gray.200' />}
      fontWeight="bold"
      alignItems="flex-start"
    >
      <Heading size="lg" textAlign="left">Your Order:</Heading>
      {items && 
        items.map((item: IOrderItem) => (
          <OrderItem item={item} />
        ))
      }
      <Box display="flex" w="100%" textAlign="right">
        <Text w="100%" >Total: {formatMoney(order.total)}</Text>
      </Box>
    </VStack>
  );
}

export default OrderItems;