import { message, Modal } from "antd";
import React, { useCallback, useState } from "react";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../../../commons/stores";
import { IProduct } from "../../../../../commons/types/generated/types";
import { StyledCommonButton01 } from "../../../../commons/buttons/CommonButtons.styles";
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
  const accessToken = useRecoilValue(accessTokenState);

  const [, setIsDisabled] = useState(false);
  const { toggleProductToCart } = UseMutationToggleProductToCart();
  const [messageApi, contextHolder] = message.useMessage();
  const sum = (props.curProductData?.discountedPrice ?? 0) * props.quantity;

  const onClickQuantityDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (props.curProductData?.discountedPrice === undefined) return;

      if (props.quantity <= 1) {
        props.setQuantity(1);
      } else {
        setIsDisabled(false);
        props.setQuantity((prev) => prev - 1);
      }
    },
    [props.quantity]
  );

  const onClickQuantityUp = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (props.curProductData?.discountedPrice === undefined) return;

      props.setQuantity((prev) => prev + 1);
    },
    [props.quantity]
  );

  const onClickToggleProductToCart = (productId: string) => async (event: React.MouseEvent) => {
    event?.stopPropagation();
    try {
      props.setIsOpen(false);
      const result = await toggleProductToCart({
        variables: {
          productId,
          count: props.quantity,
        },
      });
      const status = result?.data?.toggleProductToCart;

      if (status === true && accessToken) {
        void messageApi.open({
          type: "success",
          content: "????????? ??????????????? ???????????????.",
          duration: 5,
        });
      } else if (status === false && accessToken) {
        void messageApi.open({
          type: "error",
          content: "????????? ?????????????????? ?????????????????????.",
          duration: 5,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: `${error.message}` });
      }
    }
  };

  return (
    <>
      <section style={{ padding: "1rem" }}>
        <MS.PQuantitySelectSection>
          <MS.DetailInfoTitle01>{props.curProductData?.name}</MS.DetailInfoTitle01>
          <MS.PQRightButtons>
            <MS.Number02>{sum.toLocaleString()}???</MS.Number02>
            <CountDownBtn type="button" onClick={onClickQuantityDown} />
            <MS.Number01>{props.quantity}</MS.Number01>
            <CountUpBtn type="button" onClick={onClickQuantityUp} />
          </MS.PQRightButtons>
        </MS.PQuantitySelectSection>
        <MS.PriceSumSection01>
          <MS.DetailInfoTitle02>??? ?????? ??????</MS.DetailInfoTitle02>
          <MS.PriceSumDetail01>{sum.toLocaleString()}???</MS.PriceSumDetail01>
        </MS.PriceSumSection01>
        <MS.ButtonsWrapper01 style={{ marginTop: "2rem" }}>
          {contextHolder}
          <StyledCommonButton01
            style={{ width: "40%" }}
            onClick={onClickToggleProductToCart(String(props.curProductData?.id))}
          >
            ???????????? ??????
          </StyledCommonButton01>
          {/* <StyledCommonButton02 onClick={props.onCancel}>??????</StyledCommonButton02> */}
        </MS.ButtonsWrapper01>
      </section>
    </>
  );
}

export default React.memo(CartModal);
