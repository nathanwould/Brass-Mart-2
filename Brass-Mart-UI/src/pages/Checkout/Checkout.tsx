
import Progress from '../../Layout/Wizard/components/Progress';
import WizardSteps from '../../Layout/Wizard/components/WizardSteps';
import Wizard from '../../Layout/Wizard/Wizard';
import useUser from '../../requests/queries/useUser';
import { CheckoutContextProvider } from './CheckoutContext';
import BillingAddressStep from './components/BillingAddressStep';
import CheckoutItems from './components/CheckoutItems';
import PaymentStep from './components/PaymentStep';
import ShippingForm from './components/ShippingStep';

function Checkout() {
  const { data  } = useUser();
  const user = data?.authenticatedItem;
  const stepItems = ["Checkout", "Shipping", "Payment", "Place Order"];

  return (
    <CheckoutContextProvider>
      <Wizard>
        <Progress stepItems={stepItems} />
        <WizardSteps>
          <CheckoutItems user={user} />
          <ShippingForm />
          <BillingAddressStep />
          <PaymentStep />
        </WizardSteps>
      </Wizard>
    </CheckoutContextProvider>
  );
}

export default Checkout;