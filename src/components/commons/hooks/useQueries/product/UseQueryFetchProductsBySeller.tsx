import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductsBySellerArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCTS_BY_SELLER = gql`
  query fetchProductsBySeller($page: Int!) {
    fetchProductsBySeller(page: $page) {
      id
      name
      # productCategory {
      #   id
      #   name
      #   image
      # }
      description
      image
      veganLevel
      deliveryFee
      price
      discount
      quantity
      isOutOfStock
    }
  }
`;

export const UseQueryFetchProductsBySeller = (variables: IQueryFetchProductsBySellerArgs) => {
  const query = useQuery<Pick<IQuery, "fetchProductsBySeller">, IQueryFetchProductsBySellerArgs>(
    FETCH_PRODUCTS_BY_SELLER,
    { variables, fetchPolicy: "cache-and-network" }
  );
  return query;
};
