import { gql, useMutation } from "@apollo/client";

export const UPDATE_USER_PASSWORD = gql`
    updateUserPassword(
        $password: Password!
    ){
        updateUserPassword(password:$password){
            id
         }
}
`;

export const UseMutationUpdateUserPassword = () => {
  const mutation = useMutation(UPDATE_USER_PASSWORD);

  return mutation;
};
