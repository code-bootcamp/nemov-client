import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      name
      email
      phone
      veganLevel
      zipCode
      address
      addressDetail
      bln
      role
      point
    }
  }
`;

export const UseQueryFetchLoginUser = () => {
  const query = useQuery<Pick<IQuery, "fetchLoginUser">>(FETCH_LOGIN_USER);
  return query;
};
