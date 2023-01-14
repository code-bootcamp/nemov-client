import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductsIPickedArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCTS_I_PICKED = gql`
  query fetchProductsIPicked($page: Int!) {
    fetchProductsIPicked(page: $page) {
      id
      name
      price
      image
      veganLevel
      createdAt
      updatedAt
      discountedPrice
    }
  }
`;

export const FETCH_PRODUCTS_I_PICKED_COUNT = gql`
  query fetchProductsIPickedCount {
    fetchProductsIPickedCount
  }
`;

export const UseQueryFetchProductsIPicked = (variables: IQueryFetchProductsIPickedArgs) => {
  const query = useQuery<Pick<IQuery, "fetchProductsIPicked">, IQueryFetchProductsIPickedArgs>(
    FETCH_PRODUCTS_I_PICKED,
    { variables }
  );

  return query;
};

export const UseQueryFetchProductsIPickedCount = () => {
  const query = useQuery<Pick<IQuery, "fetchProductsIPickedCount">>(FETCH_PRODUCTS_I_PICKED_COUNT, {
    fetchPolicy: "cache-and-network",
  });

  return query;
};
