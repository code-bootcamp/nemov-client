import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationUploadFile1Args } from "../../../../commons/types/generated/types";

export const UPLOAD_FILE = gql`
  mutation uploadFile1($file: Upload!) {
    uploadFile1(file: $file)
  }
`;

export const UseMutationUploadFile1 = () => {
  const mutation = useMutation<Pick<IMutation, "uploadFile1">, IMutationUploadFile1Args>(
    UPLOAD_FILE
  );

  return mutation;
};
