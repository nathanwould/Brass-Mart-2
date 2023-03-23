import { useState } from 'react'
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Box, Button, Flex } from '@chakra-ui/react';
import { CHECKOUT_MUTATION } from '../../../../requests/mutations/useCheckout';
import { StripeError } from '@stripe/stripe-js';
import { PrevButton } from '../../../../Layout/Wizard/components/Buttons';
import { useNavigate } from 'react-router-dom';
import useUser from '../../../../requests/queries/useUser';
import { useMutation } from 'react-query';
import request from '../../../../API/request';
import { useBillingAddress, useShippingAddress } from '../../CheckoutContext';

interface Props {
  isLoading: boolean;
  setIsLoading: React.SetStateAction<boolean> | any;
  error: StripeError | null;
  setError: any;
};

function PaymentForm({
  isLoading,
  setIsLoading,
  setError
}: Props) {
  const { shippingAddress } = useShippingAddress();
  const { billingAddress } = useBillingAddress();
  const [success, setSuccess] = useState<boolean>(false);
  const { refetch } = useUser();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const mutation = useMutation(['checkout'], (paymentIntent: string) => {
    // console.log(paymentIntent)
    return request({
    document: CHECKOUT_MUTATION,
    variables: { token: paymentIntent, shippingAddress, billingAddress },
  })});

  async function handleSubmit(e: React.SyntheticEvent) {
    // 1. Stop form from causing page reload and turn on loading state
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    };
    // 2. Start page transition
    setIsLoading(true);
    // 3. Create payment method via stripe
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement) || { token: "" },
    });
    // console.log(paymentMethod)
    // 4. Handle any errors from stripe
    if (error) {
      setError(error);
      setIsLoading(false);
      return; //stops checkout from continuing if there's an error
    };
    // 5. Send the token from step 3 to our keystone server
    const order = await mutation.mutate(paymentMethod.id,
      {
        onSuccess: (data: any) => {
          console.log(data);
          setIsLoading(false);
          setSuccess(true)
          refetch();
          navigate(`/thank-you/${data.checkout.id}`);
        },
        onError: (error: any) => {
          setIsLoading(false);
          setError(error);
        },
      }
    );
    // setIsLoading(false)
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box py={8}>
        <CardElement />
      </Box>
      <Flex justifyContent="space-between">
        <PrevButton text="Shipping" />
        {success ?
          <Button colorScheme="green" isDisabled={true}>Order Received!</Button>
          :
          <Button
            type="submit"
            colorScheme="green"
            isLoading={!stripe || isLoading}
          >
            Place Order
          </Button>
        }
      </Flex>
    </form>
  );
};

export default PaymentForm;