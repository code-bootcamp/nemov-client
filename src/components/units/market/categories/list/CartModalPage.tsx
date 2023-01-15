import { message, Modal } from "antd";
import React, { useCallback, useState } from "react";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../../../commons/stores";
import { IProduct } from "../../../../../commons/types/generated/types";
import {
  StyledCommonButton01,
  //   StyledCommonButton02,
} from "../../../../commons/buttons/CommonButtons.styles";
import { CountDownBtn, CountUpBtn } from "../../../../commons/buttons/CountDownUpButtons";
import { UseMutationToggleProductToCart } from "../../../../commons/hooks/useMutations/toggleProduct/UseMutationToggleProductToCart";
import * as MS from "../product/detail/head/MarketDetailHead.styles";

interface ICartModalProps {
  curProductData?: IProduct | undefined;
  quantity: number;
  onCancel?: () => void;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function CartModal(props: ICartModalProps) {
  // console.log("장바구니 페이지가 리랜더링 됩니다.");
  const accessToken = useRecoilValue(accessTokenState);

  const [isDisabled, setIsDisabled] = useState(false);
  const { toggleProductToCart } = UseMutationToggleProductToCart();
  const [messageApi, contextHolder] = message.useMessage();
  const sum = (props.curProductData?.discountedPrice ?? 0) * props.quantity;

  const onClickQuantityDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (props.curProductData?.discountedPrice === undefined) return;

    if (props.quantity <= 1) {
      props.setQuantity(1);
    } else {
      setIsDisabled(false);
      props.setQuantity((prev) => prev - 1);
    }
  };

  const onClickQuantityUp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (props.curProductData?.discountedPrice === undefined) return;

    props.setQuantity((prev) => prev + 1);
  };

  // console.log("선택수량", props.quantity, "총 상품 금액", sum);

  const onClickToggleProductToCart = useCallback(
    (productId: string) => async (event: React.MouseEvent) => {
      event?.stopPropagation();
      try {
        const result = await toggleProductToCart({
          variables: {
            productId,
            count: props.quantity,
          },
        });
        const status = result?.data?.toggleProductToCart;
        // console.log(status);
        if (status === true && accessToken) {
          void messageApi.open({
            type: "success",
            content: "상품을 장바구니에 담았습니다.",
            duration: 5,
          });
          props.setIsOpen(false);
          props.setQuantity(1);
        } else if (status === false && accessToken) {
          void messageApi.open({
            type: "error",
            content: "상품이 장바구니에서 삭제되었습니다.",
            duration: 5,
          });
          props.setIsOpen(false);
        }
      } catch (error) {
        if (error instanceof Error) {
          // console.log(error.message);
          Modal.error({ content: `${error.message}` });
        }
      }
    },
    [props.curProductData]
  );

  return (
    <>
      <section style={{ padding: "1rem" }}>
        <MS.PQuantitySelectSection>
          <MS.DetailInfoTitle01>{props.curProductData?.name}</MS.DetailInfoTitle01>
          <MS.PQRightButtons>
            <MS.Number02>{sum.toLocaleString()}원</MS.Number02>
            <CountDownBtn type="button" onClick={onClickQuantityDown} disabled={isDisabled} />
            <MS.Number01>{props.quantity}</MS.Number01>
            <CountUpBtn type="button" onClick={onClickQuantityUp} />
          </MS.PQRightButtons>
        </MS.PQuantitySelectSection>
        <MS.PriceSumSection01>
          <MS.DetailInfoTitle02>총 상품 금액</MS.DetailInfoTitle02>
          <MS.PriceSumDetail01>{sum.toLocaleString()}원</MS.PriceSumDetail01>
        </MS.PriceSumSection01>
        <MS.ButtonsWrapper01 style={{ marginTop: "2rem" }}>
          {contextHolder}
          <StyledCommonButton01
            style={{ width: "40%" }}
            onClick={onClickToggleProductToCart(String(props.curProductData?.id))}
          >
            장바구니 담기
          </StyledCommonButton01>
          {/* <StyledCommonButton02 onClick={props.onCancel}>취소</StyledCommonButton02> */}
        </MS.ButtonsWrapper01>
      </section>
    </>
  );
}

export default React.memo(CartModal);
