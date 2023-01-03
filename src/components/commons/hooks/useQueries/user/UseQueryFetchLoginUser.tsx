import { gql, useQuery } from "@apollo/client";

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
      balance
    }
  }
`;

// 추후 백엔드에서 받은 타입 추가해야함
export const UseQueryFetchLoginUser = () => {
  const query = useQuery(FETCH_LOGIN_USER);
  return query;
};
