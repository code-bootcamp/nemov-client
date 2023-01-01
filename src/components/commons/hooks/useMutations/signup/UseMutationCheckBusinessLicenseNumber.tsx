import { gql, useMutation } from "@apollo/client";

export const CHECK_BUSINESS_LICENSE_NUMBER = gql`
  mutation checkBusinessLicenseNumber($bln: BusinessLicenseNumber!) {
    checkBusinessLicenseNumber(bln: $bln)
  }
`;

export const UseMutationCheckBusinessLicenseNumber = () => {
  const mutation = useMutation(CHECK_BUSINESS_LICENSE_NUMBER);

  return mutation;
};
