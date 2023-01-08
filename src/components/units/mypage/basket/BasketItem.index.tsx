import React from "react";
import { IProduct } from "../../../../commons/types/generated/types";
import * as S from "./Basket.styles";

interface IMypageBasketItemProps {
  key: string;
  item: IProduct;
  // onChangeProps: (id: string, key: any, value: any) => void;
}

export default function MypageBasketItem(props: IMypageBasketItemProps) {
  // const amountInputHandler = (e: React.MouseEvent) => {
  //   props.onChangeProps(props.item.id, "amount", +e.target.value);
  // };

  const onClickCountUp = (e: React.MouseEvent) => {
    e.preventDefault();
    // props.onChangeProps(props.item.id, "amount", props.item.amount + 1);
  };

  const onClickCountDown = (e: React.MouseEvent) => {
    e.preventDefault();
    // props.onChangeProps(props.item.id, "amount", props.item.amount - 1);
  };

  return (
    <S.ItemWrapper>
      <S.ItemCheckbox
        type="checkbox"
        // name={`select-${checkData[index].id}`}
        // onChange={(e) => handleSingleCheck(e.target.checked, checkData[index].id)}
        // checked={checkItems.includes(checkData[index].id)}
      />
      <S.ItemImg src={props.item.image} />
      <S.ItemName>{props.item.name}</S.ItemName>
      <S.QuantityWrapper>
        <S.MinusBtn onClick={onClickCountDown}>-</S.MinusBtn>
        <S.QuantityInput id={props.item.id} defaultValue="1" />
        <S.PlusBtn onClick={onClickCountUp} id={props.item.id}>
          +
        </S.PlusBtn>
      </S.QuantityWrapper>
      <S.PriceWrap>
        <S.ItemPrice>
          {props.item.price} <span>원</span>
        </S.ItemPrice>
        <S.DiscountPrice>{props.item.discountedPrice} 원</S.DiscountPrice>
      </S.PriceWrap>
      <S.IconBtnWrap>
        {/* <S.CancelBtn>
        <S.CancelIcon />
      </S.CancelBtn> */}
        <S.BtnWrapper>
          <S.PickBtn>찜하기</S.PickBtn>
          <S.BasketBtn>구매하기</S.BasketBtn>
        </S.BtnWrapper>
      </S.IconBtnWrap>
    </S.ItemWrapper>
  );
}
