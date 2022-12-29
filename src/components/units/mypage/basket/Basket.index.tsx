import * as S from "./Basket.styles";

export default function MypageBasket() {
  return (
    <S.ContentsMain>
      <S.Title>장바구니</S.Title>
      {/* map 뿌려주면 됨 */}
      <S.OrderArticle>
        <S.CheckboxWrapper>
          <S.AllCheckbox type="checkbox" />
          전체 선택
        </S.CheckboxWrapper>
        <S.ItemUl>
          <S.ItemWrapper>
            <S.ItemCheckbox type="checkbox" />
            <S.ItemImg src="" />
            <S.ItemName>상품이름</S.ItemName>
            <S.QuantityWrapper>
              <S.MinusBtn>－</S.MinusBtn>1<S.PlusBtn>＋</S.PlusBtn>
            </S.QuantityWrapper>
            <S.ItemPrice>10000 원</S.ItemPrice>
            <S.DeliveryPrice>
              배송비 <br />
              3000 원
            </S.DeliveryPrice>
            <S.BtnWrapper>
              <S.PickBtn>찜하기</S.PickBtn>
              <S.BasketBtn>구매하기</S.BasketBtn>
            </S.BtnWrapper>
          </S.ItemWrapper>
        </S.ItemUl>
      </S.OrderArticle>
      <S.NumWrapper>
        <section>
          <S.Label>총 상품금액</S.Label>
          <S.Num>
            10000 <S.NumSpan>원</S.NumSpan>
          </S.Num>
        </section>
        <S.CalculateIcon>－</S.CalculateIcon>
        <section>
          <S.Label>총 할인금액</S.Label>
          <S.Num>
            0 <S.NumSpan>원</S.NumSpan>
          </S.Num>
        </section>
        <S.CalculateIcon>＋</S.CalculateIcon>
        <section>
          <S.Label>총 배송비</S.Label>
          <S.Num>
            3000 <S.NumSpan>원</S.NumSpan>
          </S.Num>
        </section>
        <S.CalculateIcon>=</S.CalculateIcon>
        <section>
          <S.Label>총 결제금액</S.Label>
          <S.TotalNum>
            13000 <S.NumSpan>원</S.NumSpan>
          </S.TotalNum>
        </section>
      </S.NumWrapper>
      <S.BottomBtnWrapper>
        <S.SelectBtn>선택 삭제</S.SelectBtn>
        <S.SelectBtn>선택상품 주문하기</S.SelectBtn>
        <S.TotalBtn>전체상품 주문하기</S.TotalBtn>
      </S.BottomBtnWrapper>
    </S.ContentsMain>
  );
}
