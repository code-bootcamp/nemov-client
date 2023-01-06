import { useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../../commons/types/generated/types";
import { FETCH_PRODUCTS } from "../../../../commons/hooks/useQueries/product/UseQueryFetchProducts";
import * as S from "./MarketCategory.styles";

interface IMarketCategoryProps {
  categoryData?: Pick<IQuery, "fetchProductCategories"> | undefined;
}

export default function MarketCategory(props: IMarketCategoryProps) {
  const router = useRouter();
  const client = useApolloClient();

  const onClickMoveToCategory = (id: string) => async () => {
    const data = await client.query({
      query: FETCH_PRODUCTS,
      variables: {
        productCategoryId: id,
        veganLevel: 0,
        page: 1,
      },
    });
    console.log(data);
    void router.push(`/market/categories/${String(id)}`);
  };

  console.log(props.categoryData?.fetchProductCategories);

  return (
    <>
      <S.CategoryWrapper>
        {props.categoryData?.fetchProductCategories.map((categories) => (
          <S.Category key={categories.id} onClick={onClickMoveToCategory(categories.id)}>
            <S.StyledCategoryIcon src={categories.image} />
            <S.CategoryTitle>{categories.name}</S.CategoryTitle>
          </S.Category>
        ))}
      </S.CategoryWrapper>
    </>
  );
}
