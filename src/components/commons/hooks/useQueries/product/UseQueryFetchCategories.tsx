import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCT_CATEGORIES = gql`
  query fetchProductCategories {
    fetchProductCategories {
      id
      name
      image
    }
  }
`;

export const UseQueryFetchCategories = () => {
  const query = useQuery<Pick<IQuery, "fetchProductCategories">>(FETCH_PRODUCT_CATEGORIES, {
    fetchPolicy: "cache-and-network",
  });

  return query;
};
