import { gql } from "graphql-request";
import { useMutation, UseMutationOptions } from "react-query";
import request from "../../API/request";

const PAYMENT_INTENT_MUTATION = gql`
  mutation {
    createPaymentIntent
  }
`;

const paymentIntentComposer = () => () => request({
  document: PAYMENT_INTENT_MUTATION,
});

function usePaymentIntent(
  options?: UseMutationOptions) {
  return useMutation({
    mutationKey: 'paymentIntent',
    mutationFn: paymentIntentComposer(),
    ...options,
  });
};

export default usePaymentIntent;