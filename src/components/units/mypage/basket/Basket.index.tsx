// import { useMutation } from "@apollo/client";
// import { Modal } from "antd";
import Link from "next/link";
import React, { useState } from "react";
// import { getDiscountPrice } from "../../../../commons/libraries/utilies";
// import { IMutation, IMutationCreateProductOrderArgs } from "../../../../commons/types/generated/types";
// import { CREATE_PRODUCT_ORDER, UseMutationCreateProductOrder } from "../../../commons/hooks/useMutations/product/UseMutationCreateProductOrder";
// import { CountDownBtn, CountUpBtn } from "../../../commons/buttons/CountDownUpButtons";
// import { UseMutationToggleProductToCart } from "../../../commons/hooks/useMutations/toggleProduct/UseMutationToggleProductToCart";
import { UseQueryFetchCart } from "../../../commons/hooks/useQueries/product/UseQueryFetchCart";
import * as S from "./Basket.styles";
import MypageBasketItem from "./BasketItem.index";

interface IData {
  id: number;
  title: string;
}

export default function MypageBasket() {
  // const [quantity, setQuantity] = useState(1);
  // const [totalAmount, setTotalAmount] = useState(1);

  const { data } = UseQueryFetchCart();
  // const [itemList, setItemList] = useState([data?.fetchCart]);
  // console.log(itemList);

  // const onChangeProps = (id: string, key, value) => {
  //   setItemList((prevState) => {
  //     return prevState.map((obj) => {
  //       if (obj.id === id) {
  //         return { ...obj, [key]: value };
  //       } else {
  //         return { ...obj };
  //       }
  //     });
  //   });
  // };

  // const { productToCart } = UseMutationToggleProductToCart();

  // const [createProductOrder] = useMutation<
  //   Pick<IMutation, "createProductOrder">,
  //   IMutationCreateProductOrderArgs
  // >(CREATE_PRODUCT_ORDER);

  // 구매 버튼 함수
  // const onClickBuyProduct = async (e: React.MouseEvent) => {
  //   try {
  //     await createProductOrder({
  //       variables: {
  //         productId: String(e.currentTarget.id),
  //         amount: totalAmount,
  //         quantity,
  //       },
  //     });
  //     Modal.success({ content: "구매가 완료되었습니다." });
  //   } catch (error) {
  //     if (error instanceof Error) console.log(error.message);
  //   }
  // };

  // console.log(data);

  // 할인율 적용된 가격
  // const productPrice = getDiscountPrice(data?.fetchCart.price, data?.fetchCart.discount);
  // const productPrice = data?.fetchCart.map((cart, index) => {
  //   return getDiscountPrice(cart.price, cart.discount);
  // });

  // console.log(productPrice);

  // 총 상품금액
  let totalPrice = 0;

  data?.fetchCart.map((cart) => {
    totalPrice += cart.price;
    return totalPrice;
  });

  // 총 할인금액
  let totalDiscountPrice = 0;

  data?.fetchCart.map((cart) => {
    totalDiscountPrice += cart.discountedPrice;
    return totalDiscountPrice;
  });

  // 총 결제금액
  // const totalSum = totalPrice - totalDiscountPrice + Number(data?.fetchCart[0].deliveryFee);

  // 수량 버튼
  // const onClickCountUp = (e: React.MouseEvent) => {
  // if (quantity >= 1) {
  // }
  // setTotalAmount(productPrice[0] * count);
  // };

  // console.log(productPrice);

  // const onClickCountDown = (e: React.MouseEvent) => {
  // if (quantity > 1) {
  //   if (productPrice === undefined) {
  //     return;
  //   }
  //   setQuantity((prev) => prev - 1);
  //   // setTotalAmount(productPrice * count);
  // }
  // };

  // 체크박스 기능
  const checkData: IData[] = [
    { id: 0, title: "선택 1" },
    { id: 1, title: "선택 2" },
    { id: 2, title: "선택 3" },
    { id: 3, title: "선택 4" },
  ];

  const [checkItems, setCheckItems] = useState<number[]>([]);

  // const handleSingleCheck = (checked: boolean, id: number) => {
  //   if (checked) {
  //     // 단일 선택 시 체크된 아이템을 배열에 추가
  //     setCheckItems((prev: number[]) => [...prev, id]);
  //   } else {
  //     // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
  //     setCheckItems(checkItems.filter((el: number) => el !== id));
  //   }
  // };

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

  // const onClickDelete = async (e: React.MouseEvent) => {
  //   await productToCart(e.currentTarget.id);
  // };

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
              {data?.fetchCart.map((item, index) => (
                <MypageBasketItem key={item.id} item={item} />
                // <S.ItemWrapper key={index}>
                //   <S.ItemCheckbox
                //     type="checkbox"
                //     name={`select-${checkData[index].id}`}
                //     onChange={(e) => handleSingleCheck(e.target.checked, checkData[index].id)}
                //     checked={checkItems.includes(checkData[index].id)}
                //   />
                //   <S.ItemImg src={cart.image} />
                //   <S.ItemName>{cart.name}</S.ItemName>
                //   <S.QuantityWrapper>
                //     <S.MinusBtn onClick={onClickCountDown}>-</S.MinusBtn>
                //     <S.QuantitySpan id={cart.id}>{quantity}</S.QuantitySpan>
                //     <S.PlusBtn onClick={onClickCountUp} id={cart.id}>
                //       +
                //     </S.PlusBtn>
                //   </S.QuantityWrapper>
                //   <S.PriceWrap>
                //     <S.ItemPrice>
                //       {cart.price} <span>원</span>
                //     </S.ItemPrice>
                //     <S.DiscountPrice>
                //       {getDiscountPrice(cart.price, cart.discount)} 원
                //     </S.DiscountPrice>
                //   </S.PriceWrap>
                //   <S.IconBtnWrap>
                //     {/* <S.CancelBtn>
                //       <S.CancelIcon />
                //     </S.CancelBtn> */}
                //     <S.BtnWrapper>
                //       <S.PickBtn>찜하기</S.PickBtn>
                //       <S.BasketBtn>구매하기</S.BasketBtn>
                //     </S.BtnWrapper>
                //   </S.IconBtnWrap>
                // </S.ItemWrapper>
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
            {totalPrice} <S.NumSpan>원</S.NumSpan>
          </S.Num>
        </section>
        <S.CalculateIcon>－</S.CalculateIcon>
        <section>
          <S.Label>총 할인금액</S.Label>
          <S.Num>
            {totalDiscountPrice} <S.NumSpan>원</S.NumSpan>
          </S.Num>
        </section>
        <S.CalculateIcon>＋</S.CalculateIcon>
        <section>
          <S.Label>총 배송비</S.Label>
          <S.Num>
            {/* {data?.fetchCart[0].deliveryFee}  */}
            <S.NumSpan>원</S.NumSpan>
          </S.Num>
        </section>
        <S.CalculateIcon>=</S.CalculateIcon>
        <section>
          <S.Label>총 결제금액</S.Label>
          <S.TotalNum>
            {/* {totalSum}  */}
            <S.NumSpan>원</S.NumSpan>
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
