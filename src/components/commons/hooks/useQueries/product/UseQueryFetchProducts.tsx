import { gql, useQuery } from "@apollo/client";
import {
  // IProduct_Category_Type,
  IQuery,
  IQueryFetchProductsArgs,
} from "../../../../../commons/types/generated/types";

// 명세서와 playground 다른 args
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

// 추후 백엔드에서 받은 타입 추가해야함
// 추후 백엔드에서 받은 타입이 있으면 에러 메세지 없음
export const UseQueryFetchProducts = (variables: IQueryFetchProductsArgs) => {
  // const category = ["FOOD", "DRINK", "BEAUTY", "LIFE"];
  const query = useQuery<Pick<IQuery, "fetchProducts">, IQueryFetchProductsArgs>(FETCH_PRODUCTS, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  return query;
};
