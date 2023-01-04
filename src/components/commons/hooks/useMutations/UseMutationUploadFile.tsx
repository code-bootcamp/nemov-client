import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationUploadFileArgs } from "../../../../commons/types/generated/types";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

export const UseMutationUploadFile = () => {
  const mutation = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE);

  return mutation;
};
