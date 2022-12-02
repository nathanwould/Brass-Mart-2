import { gql } from "graphql-request";
import { useMutation, UseMutationOptions } from "react-query";
import request from "../../API/request";

export const SIGN_UP_MUTATION = gql`
  mutation SIGN_UP_MUTATION(
    $name: String!,
    $email: String!,
    $password: String!
  ) {
    createUser(data: {name: $name, email: $email, password: $password}) {
      id
      email
      name
    }
  }
`;

interface SignUpOptions {
  name: string
  email: string;
  password: string;
};

const signUpComposer = ({
  name,
  email,
  password
}: SignUpOptions) => () => request({
  document: SIGN_UP_MUTATION,
  variables: { name, email, password }
});

function useSignUp({
  name,
  email,
  password,
}: SignUpOptions,
  options?: UseMutationOptions) {
  return useMutation({
    mutationKey: 'createUser',
    mutationFn: signUpComposer({ name, email, password }),
    ...options,
  });
}

export default useSignUp;