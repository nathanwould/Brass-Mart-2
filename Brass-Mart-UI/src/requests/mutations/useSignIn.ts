import { gql } from "graphql-request";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import request from "../../API/request";

export const SIGN_IN_MUTATION = gql`
  mutation SIGN_IN_MUTATION(
    $email: String!, 
    $password: String!
    ) {
    authenticateUserWithPassword(
      email: $email, 
      password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;

interface SignInOptions {
  email: string;
  password: string;
}

const signInComposer = ({
  email,
  password
}: SignInOptions) => () => request({
  document: SIGN_IN_MUTATION,
  variables: { email, password }
});

function useSignIn({
  email,
  password,
}: SignInOptions,
{...options}: any) {
  return useMutation({
    mutationKey: 'authenticateUserWithPassword',
    mutationFn: signInComposer({ email, password }),
    ...options,
  });
}

export default useSignIn;