import { Heading } from '@chakra-ui/react';
import useOrders from '../../requests/queries/useOrders';
import { IOrder, IUser } from '../../types';
import OrderItems from '../OrderItems/OrderItems';

type Props = {
  user: IUser;
}

function Orders({ user }: Props) {
  const { id } = user;
  const { data } = useOrders({
    filter: { user: { id: { equals: id } } }
  })
  const orders = data?.orders
  return (
    <>
      <Heading>Orders</Heading>
      { orders && orders.map((order: IOrder) => <OrderItems key={order.id} order={order} />)}
    </>
  )
}

export default Orders;