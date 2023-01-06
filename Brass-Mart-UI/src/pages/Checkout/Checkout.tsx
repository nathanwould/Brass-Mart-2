import { createContext, useContext, useState } from 'react';
import Progress from '../../Layout/Wizard/components/Progress';
import WizardSteps from '../../Layout/Wizard/components/WizardSteps';
import Wizard from '../../Layout/Wizard/Wizard';
import useUser from '../../requests/queries/useUser';
import { IAddress } from '../../types';
import BillingAddressStep from './components/BillingAddressStep';
import CheckoutItems from './components/CheckoutItems';
import PaymentStep from './components/PaymentStep';
import ShippingForm from './components/ShippingStep';

interface CheckoutContextProps {
  shippingAddress: IAddress;
  setShippingAddress: (address: IAddress) => void;
  billingAddress: IAddress;
  setBillingAddress: (address: IAddress) => void;
};

const initialAddressState = {
  name: '',
  street: '',
  street2: '',
  city: '',
  state: '',
  zipCode: '',
  country: 'USA',
}

const CheckoutContext = createContext<CheckoutContextProps>({
  shippingAddress: {
    ...initialAddressState
  },
  setShippingAddress: () => { },
  billingAddress: {
    ...initialAddressState
  },
  setBillingAddress: () => { },
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
  const [shippingAddress, setShippingAddress] = useState<IAddress>({ ...initialAddressState });
  const [billingAddress, setBillingAddress] = useState<IAddress>({ ...initialAddressState });
  const { data  } = useUser();
  const user = data?.authenticatedItem;

  const stepItems = ["Checkout", "Shipping", "Payment", "Place Order"];

  const context = {
    shippingAddress,
    setShippingAddress,
    billingAddress,
    setBillingAddress,
  };
  return (
    <CheckoutContext.Provider value={context}>
      <Wizard>
        <Progress stepItems={stepItems} />
        <WizardSteps>
          <CheckoutItems user={user} />
          <ShippingForm />
          <BillingAddressStep />
          <PaymentStep />
        </WizardSteps>
      </Wizard>
    </CheckoutContext.Provider>
  );
}

export default Checkout;