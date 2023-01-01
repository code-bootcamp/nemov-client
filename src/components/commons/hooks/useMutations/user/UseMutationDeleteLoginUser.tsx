import { gql, useMutation } from "@apollo/client";

export const UPDATE_USER = gql`
    updateUser(
        $updateUserInput: UpdateUserInput!
    ){
        updateUser(updateUserInput:$updateUserInput){
            id
         }
}
`;

export const UseMutationUpdateUser = () => {
  const mutation = useMutation(UPDATE_USER);

  return mutation;
};
