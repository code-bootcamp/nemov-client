import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchProductsArgs } from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCTS = gql`
  query fetchProducts($page: Int!, $veganLevel: Int!, $productCategoryId: ID!, $search: String!) {
    fetchProducts(
      page: $page
      veganLevel: $veganLevel
      productCategoryId: $productCategoryId
      search: $search
    ) {
      id
      name
      image
      veganLevel
      price
      discountRate
      discountedPrice
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
  const { data, fetchMore, client, refetch } = useQuery<
    Pick<IQuery, "fetchProducts">,
    IQueryFetchProductsArgs
  >(FETCH_PRODUCTS, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  return { data, fetchMore, client, refetch };
};
