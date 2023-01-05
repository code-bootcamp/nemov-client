import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationLoginArgs } from "../../../../../commons/types/generated/types";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const UseMutationLogin = () => {
  const mutation = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(LOGIN);

  return mutation;
};
