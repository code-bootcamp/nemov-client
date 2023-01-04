import Link from "next/link";
import { useState } from "react";
import { CountDownBtn, CountUpBtn } from "../../../commons/buttons/CountDownUpButtons";
import { UseMutationToggleProductToCart } from "../../../commons/hooks/useMutations/toggleProduct/UseMutationToggleProductToCart";
import { UseQueryFetchCart } from "../../../commons/hooks/useQueries/product/UseQueryFetchCart";
import * as S from "./Basket.styles";

interface IData {
  id: number;
  title: string;
}

export default function MypageBasket() {
  const { data } = UseQueryFetchCart();
  const { productToCart } = UseMutationToggleProductToCart();

  console.log(data);

  const checkData: IData[] = [
    { id: 0, title: "선택 1" },
    { id: 1, title: "선택 2" },
    { id: 2, title: "선택 3" },
    { id: 3, title: "선택 4" },
  ];

  // 체크박스 기능
  const [checkItems, setCheckItems] = useState<number[]>([]);

  const handleSingleCheck = (checked: boolean, id: number) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev: number[]) => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el: number) => el !== id));
    }
  };

  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray: number[] = [];
      checkData.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };

  const onClickCountUp = () => {};

  const onClickCountDown = () => {};

  const onClickDelete = async (e: React.MouseEvent) => {
    await productToCart(e.currentTarget.id);
  };

  return (
    <S.ContentsMain>
      <S.Title>장바구니</S.Title>
      <S.OrderArticle>
        <S.CheckboxWrapper>
          <S.AllCheckbox
            type="checkbox"
            name="select-all"
            onChange={(e) => handleAllCheck(e.target.checked)}
            checked={checkItems.length === checkData.length}
          />
          전체 선택
        </S.CheckboxWrapper>
        {/* <S.ItemCheckbox
          type="checkbox"
          name={`select-${checkData[1].id}`}
          onChange={(e) => handleSingleCheck(e.target.checked, checkData[1].id)}
          checked={checkItems.includes(checkData[1].id)}
        />
        <S.ItemCheckbox
          type="checkbox"
          name={`select-${checkData[2].id}`}
          onChange={(e) => handleSingleCheck(e.target.checked, checkData[2].id)}
          checked={checkItems.includes(checkData[2].id)}
        /> */}
        <S.ItemUl>
          {data?.fetchCart.length !== 0 ? (
            <>
              {data?.fetchCart.map((cart, index) => (
                <S.ItemWrapper key={index}>
                  <S.ItemCheckbox
                    type="checkbox"
                    name={`select-${checkData[index].id}`}
                    onChange={(e) => handleSingleCheck(e.target.checked, checkData[index].id)}
                    checked={checkItems.includes(checkData[index].id)}
                  />
                  <S.ItemImg src={cart.image} />
                  <S.ItemName>{cart.name}</S.ItemName>
                  <S.QuantityWrapper>
                    <CountDownBtn onClick={onClickCountDown} />
                    <S.QuantitySpan>1</S.QuantitySpan>
                    <CountUpBtn onClick={onClickCountUp} />
                  </S.QuantityWrapper>
                  <S.ItemPrice>{cart.price} 원</S.ItemPrice>
                  <S.IconBtnWrap>
                    <S.CancelBtn onClick={onClickDelete}>
                      <S.CancelIcon />
                    </S.CancelBtn>
                    <S.BtnWrapper>
                      <S.PickBtn>찜하기</S.PickBtn>
                      <S.BasketBtn>구매하기</S.BasketBtn>
                    </S.BtnWrapper>
                  </S.IconBtnWrap>
                </S.ItemWrapper>
              ))}
            </>
          ) : (
            <>
              <S.NoBasketText>
                현재 장바구니에 담긴 상품이 없습니다. 추천 상품을 보러 가시겠어요?
              </S.NoBasketText>
              <S.MoveBtnWrap>
                <Link href="/market">
                  <a>
                    <S.MoveBtn>추천 상품 보러가기</S.MoveBtn>
                  </a>
                </Link>
              </S.MoveBtnWrap>
            </>
          )}
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
