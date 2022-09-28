import { createContext, useContext, useState } from 'react';
import Wizard, { Progress, WizardSteps } from '../../Layout/Wizard/Wizard';
import useUser from '../../requests/queries/useUser';
import { IAddress } from '../../types';
import CheckoutItems from './components/CheckoutItems';
import PaymentStep from './components/PaymentStep';
import ShippingForm from './components/ShippingStep';

interface CheckoutContextProps {
  address: IAddress;
  setAddress: (address: IAddress) => void;
}

const CheckoutContext = createContext<CheckoutContextProps>({
  address: {
    name: '',
    street: '',
    street2: '',
    city: '',
    state: '',
    country: '',
  },
  setAddress: () => { },
});

export const useCheckoutContext = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error(
      'Context not available'
    )
  };
  return context;
};

function Checkout() {
  const [address, setAddress] = useState<IAddress>({
    name: '',
    street: '',
    street2: '',
    city: '',
    state: '',
    country: '',
  });
  const { data  } = useUser();
  const user = data?.authenticatedItem;

  const stepItems = ["Checkout", "Shipping", "Payment", "Place Order"];

  const context = {
    address,
    setAddress,
  };
  return (
    <CheckoutContext.Provider value={context}>
      <Wizard>
        <Progress stepItems={stepItems} />
        <WizardSteps>
          <CheckoutItems user={user} />
          <ShippingForm />
          <PaymentStep />
        </WizardSteps>
      </Wizard>
    </CheckoutContext.Provider>
  );
}

export default Checkout;