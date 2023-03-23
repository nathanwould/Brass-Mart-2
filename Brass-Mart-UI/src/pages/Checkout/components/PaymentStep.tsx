import { Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { loadStripe, StripeError } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from './components/PaymentForm';
import CheckoutStepContainer from './components/CheckoutStepContainer';
// import { useParams } from 'react-router-dom';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_STRIPE_KEY || "pk_test_51JtwWHEwEdDAN2k1YTb19Mkduybh8nmWRAMdNDp6wGWUGys5BGp0e7lfALrpy0EtueHo7QWwfty8zzcQGau60gqn00iuxQSxgr")

function PaymentStep() {
  // const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<StripeError | null>(null);

  return (
    <CheckoutStepContainer>
      <Heading>Payment</Heading>
      {stripePromise ?
        <Elements stripe={stripePromise} >
          <PaymentForm isLoading={isLoading} setIsLoading={setIsLoading} error={error} setError={setError} />
        </Elements>
        :
        <Text>Hold tight...</Text>
      }
    </CheckoutStepContainer>
  );
}

export default PaymentStep;