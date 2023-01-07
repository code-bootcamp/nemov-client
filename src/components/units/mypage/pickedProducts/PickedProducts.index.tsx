import { UseQueryFetchProductsIPicked } from "../../../commons/hooks/useQueries/product/UserQueryFetchProductsIPicked";
import * as S from "./PickedProducts.styles";

export default function MypagePicked() {
  const { data } = UseQueryFetchProductsIPicked({
    page: 1,
  });

  return (
    <S.ContentsMain>
      <S.Title>찜한 상품</S.Title>
      <S.PickedWrapper>
        {/* <S.Date>2022.12</S.Date> */}

        {data?.fetchProductsIPicked.length !== 0 ? (
          <>
            {data?.fetchProductsIPicked.map((pick, index) => (
              <S.PickedItem key={index}>
                <S.PickedImg src={pick.image} />
                <S.PickedCenterWrapper>
                  <S.Tags>{pick.veganLevel}</S.Tags>
                  <S.PickedName>{pick.name}</S.PickedName>
                  <S.PriceDateWrap>
                    <S.PickedPrice>{pick.price} 원</S.PickedPrice>
                    <S.PickedDate>22.12.29</S.PickedDate>
                  </S.PriceDateWrap>
                </S.PickedCenterWrapper>
                <S.BtnWrapper>
                  <S.BasketBtn>장바구니</S.BasketBtn>
                  <S.BuyBtn>구매하기</S.BuyBtn>
                </S.BtnWrapper>
                <div>X</div>
              </S.PickedItem>
            ))}
          </>
        ) : (
          <S.NoPickedText>찜한 상품이 없습니다.</S.NoPickedText>
        )}
      </S.PickedWrapper>
    </S.ContentsMain>
  );
}
