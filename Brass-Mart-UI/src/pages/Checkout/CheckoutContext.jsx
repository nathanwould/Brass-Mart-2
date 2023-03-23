import { useState } from "react"
import { createContext, useContextSelector } from "use-context-selector"
// import { IAddress } from "../../types"

// interface CheckoutContextProps {
//   useShipping: boolean;
//   setUseShipping: (useShipping: boolean) => void;
//   shippingAddress: IAddress;
//   setShippingAddress: (address: IAddress) => void;
//   billingAddress: IAddress;
//   setBillingAddress: (address: IAddress) => void;
// };

const initialAddressState = {
  name: '',
  street: '',
  street2: '',
  city: '',
  state: '',
  zipCode: '',
  country: 'USA',
};

const useStore = () => {
  const [shippingAddress, setShippingAddress] = useState({ ...initialAddressState });
  const [billingAddress, setBillingAddress] = useState({ ...initialAddressState });
  const [useShipping, setUseShipping] = useState(false);

  return {
    shippingAddress,
    billingAddress,
    useShipping,
    setShippingAddress,
    setBillingAddress,
    setUseShipping
  }
};

const StoreContext = createContext();

// interface ProviderProps {
//   children: ReactNode
// };

export const CheckoutContextProvider = ({ children }) => (
  <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
);

export const useShippingAddress = () => useContextSelector(StoreContext, (s) => s.shippingAddress);
export const useBillingAddress = () => useContextSelector(StoreContext, (s) => s.billingAddress);
export const useUseShipping = () => useContextSelector(StoreContext, (s) => s.useShipping);
export const useSetShippingAddress = () => useContextSelector(StoreContext, (s) => s.setShippingAddress);
export const useSetBillingAddress = () => useContextSelector(StoreContext, (s) => s.setBillingAddress);
export const useSetUseShipping = () => useContextSelector(StoreContext, (s) => s.setUseShipping);