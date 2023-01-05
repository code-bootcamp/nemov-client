import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationGetTokenArgs } from "../../../../../commons/types/generated/types";

export const GET_TOKEN = gql`
  mutation getToken($phone: Phone!) {
    getToken(phone: $phone)
  }
`;

export const UseMutationGetToken = () => {
  const mutation = useMutation<Pick<IMutation, "getToken">, IMutationGetTokenArgs>(GET_TOKEN);

  return mutation;
};
