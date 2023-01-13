import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchProductsCountArgs } from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCTS_COUNT = gql`
  query fetchProductsCount($veganLevel: Int!, $productCategoryId: ID!, $search: String!) {
    fetchProductsCount(
      veganLevel: $veganLevel
      productCategoryId: $productCategoryId
      search: $search
    )
  }
`;

export const UseQueryFetchProductsCount = (variables: IQueryFetchProductsCountArgs) => {
  const query = useQuery<Pick<IQuery, "fetchProductsCount">, IQueryFetchProductsCountArgs>(
    FETCH_PRODUCTS_COUNT,
    { variables }
  );

  return query;
};
