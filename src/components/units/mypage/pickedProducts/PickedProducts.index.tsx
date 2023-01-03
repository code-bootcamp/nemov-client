import { UseQueryFetchProductsIPicked } from "../../../commons/hooks/useQueries/product/UserQueryFetchProductsIPicked";
import * as S from "./PickedProducts.styles";

export default function MypagePicked() {
  const { data } = UseQueryFetchProductsIPicked({
    page: 1,
  });

  // console.log(data);

  return (
    <S.ContentsMain>
      <S.Title>찜한 상품</S.Title>
      <S.PickedWrapper>
        <S.Date>2022.12</S.Date>
        <S.PickedItem>
          <S.PickedImg src="" />
          <S.PickedCenterWrapper>
            <S.Tags>비건</S.Tags>
            <S.PickedName>상품 이름</S.PickedName>
            <S.PriceDateWrap>
              <S.PickedPrice>10000 원</S.PickedPrice>
              <S.PickedDate>22.12.29</S.PickedDate>
            </S.PriceDateWrap>
          </S.PickedCenterWrapper>
          <S.IconBtnWrap>
            <S.CancelIcon />
            <S.BtnWrapper>
              <S.BasketBtn>장바구니</S.BasketBtn>
              <S.BuyBtn>구매하기</S.BuyBtn>
            </S.BtnWrapper>
          </S.IconBtnWrap>
        </S.PickedItem>

        {data?.fetchProductsIPicked.length !== 0 ? (
          <>
            {data?.fetchProductsIPicked.map((el, index) => (
              <S.PickedItem key={index}>
                <S.PickedImg src="" />
                <S.PickedCenterWrapper>
                  <S.Tags>비건</S.Tags>
                  <S.PickedName>상품 이름</S.PickedName>
                  <S.PriceDateWrap>
                    <S.PickedPrice>10000 원</S.PickedPrice>
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
