import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchProductsArgs } from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCTS = gql`
  query fetchProducts($page: Int!, $veganLevel: Int!, $categoryId: ID!) {
    fetchProducts(page: $page, veganLevel: $veganLevel, categoryId: $categoryId) {
      id
      name
      image
      veganLevel
      price
      discount
      isOutOfStock
      productCategory {
        id
        name
      }
      user {
        id
        name
      }
    }
  }
`;

// interface ISelfFetchProductArgs {
//   category: string;
//   page: number;
//   veganLevel: number;
// }

export const UseQueryFetchProducts = (variables: IQueryFetchProductsArgs) => {
  const query = useQuery<Pick<IQuery, "fetchProducts">, IQueryFetchProductsArgs>(FETCH_PRODUCTS, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  return query;
};
