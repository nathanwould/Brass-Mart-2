import { gql } from "graphql-request";
import { useQuery } from "react-query";
import useRequest from "../../API/request";

const ORDER_QUERY = gql`
  query GetOrder($id: ID!) {
    order(where: { id: $id }) {
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

interface UseOrderOptions {
  id?: string;
};

const getOrderComposer =
  ({ id }: UseOrderOptions) =>
    () => useRequest({
      document: ORDER_QUERY,
      variables: { id }
    });

function useOrder({
  id,
  ...options
}: UseOrderOptions) {
  return useQuery({
    queryKey: ['order', id],
    queryFn: getOrderComposer({id}),
    ...options,
  });
};

export default useOrder;