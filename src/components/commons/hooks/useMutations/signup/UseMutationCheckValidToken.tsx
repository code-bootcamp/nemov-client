import { gql, useMutation } from "@apollo/client";

export const CHECK_VALID_TOKEN = gql`
  mutation checkValidToken($phone: Phone!, $token: String!) {
    checkValidToken(phone: $phone, token: $token)
  }
`;

export const UseMutationCheckValidToken = () => {
  const mutation = useMutation(CHECK_VALID_TOKEN);

  return mutation;
};
