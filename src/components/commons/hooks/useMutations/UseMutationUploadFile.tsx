import { gql, useMutation } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file){}
  }
`;

export const UseMutationUploadFile = () => {
  const mutation = useMutation(UPLOAD_FILE);

  return mutation;
};
