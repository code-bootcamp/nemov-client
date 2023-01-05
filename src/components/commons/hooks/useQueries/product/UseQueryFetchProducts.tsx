import { gql, useQuery } from "@apollo/client";
import {
  // IProduct_Category_Type,
  IQuery,
  IQueryFetchProductsArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCTS = gql`
  query fetchProducts($page: Int!, $veganLevel: Int!, $category: PRODUCT_CATEGORY_TYPE!) {
    fetchProducts(page: $page, veganLevel: $veganLevel, category: $category) {
      id
      name
      category
      description
      image
      veganLevel
      deliveryFee
      price
      discount
      isOutOfStock
    }
  }
`;

// interface ISelfFetchProductArgs {
//   category: string;
//   page: number;
//   veganLevel: number;
// }

export const UseQueryFetchProducts = (variables: IQueryFetchProductsArgs) => {
  // const category = ["FOOD", "DRINK", "BEAUTY", "LIFE"];
  const query = useQuery<Pick<IQuery, "fetchProducts">, IQueryFetchProductsArgs>(FETCH_PRODUCTS, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  return query;
};
