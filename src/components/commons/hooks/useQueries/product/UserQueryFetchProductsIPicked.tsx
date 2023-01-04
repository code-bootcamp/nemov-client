import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductsIPickedArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCTS_I_PICKED = gql`
  query fetchProductsIPicked($page: Int!) {
    fetchProductsIPicked(page: $page) {
      id
    }
  }
`;

export const UseQueryFetchProductsIPicked = (variables: IQueryFetchProductsIPickedArgs) => {
  const query = useQuery<Pick<IQuery, "fetchProductsIPicked">, IQueryFetchProductsIPickedArgs>(
    FETCH_PRODUCTS_I_PICKED,
    { variables }
  );

  return query;
};
