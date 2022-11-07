import { gql } from "graphql-request";
import { useMutation, UseMutationOptions } from "react-query";
import request from "../../API/request";

export const CHECKOUT_MUTATION = gql`
  mutation CHECKOUT_MUTATION(
    $token: String!
    $shippingAddress: AddressCreateInput!
    $billingAddress: AddressCreateInput!
    ) {
    checkout(
      token: $token
      shippingAddress: $shippingAddress,
      billingAddress: $billingAddress
      ) {
      id
      charge
      total
      items {
        id
        product {
          name
        }
      }
    }
  }
`;

interface checkoutOptions {
  token: string;
};

const checkoutComposer = ({
  token
}: checkoutOptions) => () => request({
  document: CHECKOUT_MUTATION,
  variables: { token }
});

function useCheckout({
  token
}: checkoutOptions,
  options?: UseMutationOptions) {
    console.log(token)
  return useMutation({
    mutationKey: 'checkout',
    mutationFn: checkoutComposer({ token }),
    ...options,
  });
};

export default useCheckout;