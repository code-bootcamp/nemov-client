import { gql, useMutation } from "@apollo/client";

export const CHECK_USER_PASSWORD = gql`
  mutation checkUserPassword($password: Password!) {
    checkUserPassword(password: $password)
  }
`;

export const UseMutationCheckUserPassword = () => {
  const mutation = useMutation(CHECK_USER_PASSWORD);

  return mutation;
};
