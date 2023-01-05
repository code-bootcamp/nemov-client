import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCheckBusinessLicenseNumberArgs,
} from "../../../../../commons/types/generated/types";

export const CHECK_BUSINESS_LICENSE_NUMBER = gql`
  mutation checkBusinessLicenseNumber($bln: BusinessLicenseNumber!) {
    checkBusinessLicenseNumber(bln: $bln)
  }
`;

export const UseMutationCheckBusinessLicenseNumber = () => {
  const mutation = useMutation<
    Pick<IMutation, "checkBusinessLicenseNumber">,
    IMutationCheckBusinessLicenseNumberArgs
  >(CHECK_BUSINESS_LICENSE_NUMBER);

  return mutation;
};
