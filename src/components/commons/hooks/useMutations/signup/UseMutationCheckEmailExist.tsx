import { gql, useMutation } from "@apollo/client";

export const CHECK_EMAIL_EXIST = gql`
  mutation checkEmailExist($email: Email!) {
    checkEmailExist(email: $email)
  }
`;

export const UseMutationCheckEmailExist = () => {
  const mutation = useMutation(CHECK_EMAIL_EXIST);

  return mutation;
};
