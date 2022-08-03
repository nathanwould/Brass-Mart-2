import { QueryClientProvider } from "react-query";
import useClient from "./useClient";

interface Props {
  children: React.ReactNode;
};

function ApiProvider({ children }: Props) {
  const { client } = useClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default ApiProvider;