import { gql, useMutation } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
    }
  }
`;

export const UseMutationCreateUser = () => {
  const mutation = useMutation(CREATE_USER);

  return mutation;
};
