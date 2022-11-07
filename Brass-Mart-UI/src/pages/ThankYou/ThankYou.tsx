import { Box, Heading, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import OrderItems from '../../Layout/OrderItems/OrderItems';
import useOrder from '../../requests/queries/useOrder';

function ThankYou() {
  const { id } = useParams();
  const { data, isLoading, error } = useOrder({ id });
  const order = data?.order;

  if (!order && isLoading) {
    return <Box m={6} textAlign="center">Finding your order...</Box>
  };

  if (!order && !isLoading) {
    return <Box m={6}>Oops! Order not found.</Box>
  }

  return (
    <Stack
      m={6}
      marginBottom={12}
      spacing={6}
      align="center"
    >
      <Heading>Thank you for your order!</Heading>
      <Stack>
        <Text fontWeight="bold">Order {<Link color="blue.300">#{id}</Link>} has been received.</Text>
        <Text>You will be emailed shortly with an estimated delivery time.</Text>
      </Stack>
      {order &&
        <OrderItems order={order} />
      }
    </Stack>
  );
}

export default ThankYou;