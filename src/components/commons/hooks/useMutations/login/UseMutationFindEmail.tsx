import { gql, useMutation } from "@apollo/client";

export const FIND_EMAIL = gql`
  mutation findEmail(){
    findEmail(){}
}
`;

export const UseMutationFindEmail = () => {
  const mutation = useMutation(FIND_EMAIL);

  return mutation;
};
