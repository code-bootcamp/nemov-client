import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationUpdateUserArgs } from "../../../../../commons/types/generated/types";

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
  const mutation = useMutation<Pick<IMutation, "updateUser">, IMutationUpdateUserArgs>(UPDATE_USER);

  return mutation;
};
