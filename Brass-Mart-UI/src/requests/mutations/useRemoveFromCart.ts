import { gql } from "graphql-request";
import { useMutation, UseMutationOptions } from "react-query";
import request from "../../API/request";

const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(where: { id: $id }) {
      id
    }
  }
`;

interface removeFromCartOptions {
  id: string;
};

const removeFromCartComposer = ({
  id
}: removeFromCartOptions) => () => request({
  document: REMOVE_FROM_CART_MUTATION,
  variables: { id }
});

function useRemoveFromCart({
  id
}: removeFromCartOptions,
  options?: UseMutationOptions) {
  return useMutation({
    mutationKey: 'removeFromCart',
    mutationFn: removeFromCartComposer({ id }),
    ...options,
  });
};

export default useRemoveFromCart;