import { gql } from "graphql-request";
import { useMutation, UseMutationOptions } from "react-query";
import request from "../../API/request";

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;

interface addToCartOptions {
  id: string;
};

const addToCartComposer = ({
  id
}: addToCartOptions) => () => request({
  document: ADD_TO_CART_MUTATION,
  variables: { id }
});

function useAddToCart({
  id
}: addToCartOptions,
  options?: UseMutationOptions) {
  return useMutation({
    mutationKey: 'addToCart',
    mutationFn: addToCartComposer({ id }),
    ...options,
  });
};

export default useAddToCart;