import { gql } from "graphql-request";
import { useQuery } from "react-query";
import useRequest from "../../API/request";
import { IFilter, IOrderBy } from "../../types";

const ALL_ORDERS_QUERY = gql`
  query GetOrders(
    $filter: OrderWhereInput!
    $orderBy: [OrderOrderByInput!]
    ) {
    orders(
      where: $filter
      orderBy: $orderBy
      ) {
        id
        total
        items {
          id
          product {
            name
            price
            photos {
              altText
              image {
                publicUrlTransformed
              }
            }
          }
        }
    }
  }
`;

interface UseOrdersOptions {
  filter?: Object;
  orderBy?: IOrderBy;
};

const getOrdersComposer =
  ({filter, orderBy}: UseOrdersOptions) =>
    () => useRequest({
      document: ALL_ORDERS_QUERY,
      variables: { filter, orderBy }
    });

function useOrders({
  filter,
  orderBy,
  ...options
}: UseOrdersOptions) {
  return useQuery({
    queryKey: ['orders', filter, orderBy],
    queryFn: getOrdersComposer({filter, orderBy}),
    ...options,
  });
};

export default useOrders;