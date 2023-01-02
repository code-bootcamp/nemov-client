import { gql, useMutation } from "@apollo/client";

export const GET_TOKEN = gql`
  mutation getToken($phone: Phone!) {
    getToken(phone: $phone)
  }
`;

export const UseMutationGetToken = () => {
  const mutation = useMutation(GET_TOKEN);

  return mutation;
};
