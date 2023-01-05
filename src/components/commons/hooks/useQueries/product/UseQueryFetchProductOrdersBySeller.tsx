import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductOrdersBySellerArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_PRODUCT_ORDERS_BY_SELLER = gql`
    query fetchProductOrdersBySeller($startDate:DateTime $endDate:DateTime page:Int!){
        fetchProductOrdersBySeller(startDate:$startDate endDate:$endDate page:$page){
            id
            amount
            quantity
            status
            buyer{
                id
                name
                email
                phone
                role
                point
            }
            seller{
                id
                name
                email
                phone
                role
                point
            }
            product{
                id
                name
                category
                description
                image
                deliveryFee
                price
                discount
                quantity
                isOutOfStock
            }
            review{
                id
                title
                contents
                rating
                product{
                    id
                    name
                    category
                    veganLevel
                    description
                    image
                    deliveryFee
                    price
                    discount
                    quantity
                    isOutOfStock
                }
                user{
                    id
                    name
                    email
                    phone
                    veganLevel
                    zipCode
                    point
                }
            }
            createdAt
            updatedAt
        }
    }
`;

export const UseQueryFetchProductOrdersBySeller = (
  variables: IQueryFetchProductOrdersBySellerArgs
) => {
  const query = useQuery<
    Pick<IQuery, "fetchProductOrdersBySeller">,
    IQueryFetchProductOrdersBySellerArgs
  >(FETCH_PRODUCT_ORDERS_BY_SELLER, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  return { query };
};
