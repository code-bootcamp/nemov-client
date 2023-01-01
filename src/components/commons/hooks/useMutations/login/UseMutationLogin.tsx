import { gql, useMutation } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const UseMutationLogin = () => {
  const mutation = useMutation(LOGIN);

  return mutation;
};
