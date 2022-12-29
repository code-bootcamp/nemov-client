import * as S from "./Basket.styles";

export default function MypageBasket() {
  return (
    <S.ContentsMain>
      <h2>장바구니</h2>
      <article>
        {/* map 뿌려주면 됨 */}
        <S.OrderHistory>
          <S.CheckboxWrapper>
            <S.AllCheckbox type="checkbox" />
            전체 선택
          </S.CheckboxWrapper>
          <S.Table>
            <thead>
              <S.TableHeaderTr>
                <S.TableHeaderTitle>상품정보</S.TableHeaderTitle>
                <S.TableHeaderBasic>수량</S.TableHeaderBasic>
                <S.TableHeaderBasic>상품 금액</S.TableHeaderBasic>
                <S.TableHeaderBasic>배송비</S.TableHeaderBasic>
                <S.TableHeaderBasic></S.TableHeaderBasic>
              </S.TableHeaderTr>
            </thead>
            <tbody>
              <tr>
                <S.TableBodyTitle>
                  <S.ItemCheckbox type="checkbox" />
                  <S.ItemImg src="" />
                  <S.ItemName>상품이름</S.ItemName>
                </S.TableBodyTitle>
                <S.TableBodyBasic>
                  <S.QuantityWrapper>
                    <S.MinusBtn>－</S.MinusBtn>1<S.PlusBtn>＋</S.PlusBtn>
                  </S.QuantityWrapper>
                </S.TableBodyBasic>
                <S.TableBodyBasic>10000 원</S.TableBodyBasic>
                <S.TableBodyBasic>3000 원</S.TableBodyBasic>
                <S.TableBodyBasic>
                  <S.PickBtn>찜하기</S.PickBtn>
                  <S.BasketBtn>구매하기</S.BasketBtn>
                </S.TableBodyBasic>
              </tr>
              <tr>
                <S.TableBodyTitle>
                  <S.ItemCheckbox type="checkbox" />
                  <S.ItemImg src="" />
                  <S.ItemName>상품이름</S.ItemName>
                </S.TableBodyTitle>
                <S.TableBodyBasic>
                  <S.QuantityWrapper>
                    <S.MinusBtn>－</S.MinusBtn>1<S.PlusBtn>＋</S.PlusBtn>
                  </S.QuantityWrapper>
                </S.TableBodyBasic>
                <S.TableBodyBasic>10000 원</S.TableBodyBasic>
                <S.TableBodyBasic>3000 원</S.TableBodyBasic>
                <S.TableBodyBasic>
                  <S.PickBtn>찜하기</S.PickBtn>
                  <S.BasketBtn>구매하기</S.BasketBtn>
                </S.TableBodyBasic>
              </tr>
            </tbody>
          </S.Table>
        </S.OrderHistory>
      </article>
    </S.ContentsMain>
  );
}
