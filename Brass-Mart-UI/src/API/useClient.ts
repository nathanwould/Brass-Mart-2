import { useToast } from "@chakra-ui/react";
import _ from "lodash";
import { useRef } from "react";
import { QueryClient } from "react-query";

const ERROR_MAPPING: Record<string, string> = {
  BAD_USER_INPUT: 'Something went wrong with the form data.',
  INTERNAL_SERVER_ERROR: 'Something went wrong with the server. Please try again or contact support.',
  FORBIDDEN: `You don't have access to this feature, please log in.`
};

const useClient = () => {
  const toast = useToast();
  const client = useRef(
    new QueryClient({
      defaultOptions: {
        mutations: {
          onError: (error: any) => {
            const errorCode = _.get(error, 'response.errors.0.extensions.code');
            toast({
              title: 'Error',
              description:
                ERROR_MAPPING[errorCode] || ERROR_MAPPING.INTERNAL_SERVER_ERROR,
              status: 'error',
              duration: 2500,
              isClosable: true,
            });
            console.error(error);
          },
        },
      },
    })
  );
  return { client: client.current }
};

export default useClient;
