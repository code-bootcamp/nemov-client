import { gql, useMutation } from "@apollo/client";

export const FIND_PASSWORD = gql`
  mutation findPassword(){
    findPassword(){}
}
`;

export const UseMutationFindPassword = () => {
  const mutation = useMutation(FIND_PASSWORD);

  return mutation;
};
