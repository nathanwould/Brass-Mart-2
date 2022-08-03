import { gql } from "graphql-request";
import { useMutation } from "react-query";
import request from "../../API/request";

export const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
      endSession
  }
`;

const signOutComposer = () => () => request({
  document: SIGN_OUT_MUTATION,
});

function useSignOut({...options}) {
  return useMutation({
    mutationKey: 'endSession',
    mutationFn: signOutComposer(),
    ...options
  });
}

export default useSignOut;