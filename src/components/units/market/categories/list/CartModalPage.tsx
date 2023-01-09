import { Modal } from "antd";
import { useState } from "react";
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

export default function CartModal(props: ICartModalProps) {
  const accessToken = useRecoilValue(accessTokenState);

  const [isDisabled, setIsDisabled] = useState(false);
  const { toggleProductToCart } = UseMutationToggleProductToCart();
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

  console.log("선택수량", props.quantity, "총 상품 금액", sum);

  const onClickToggleProductToCart = (productId: string) => async (event: React.MouseEvent) => {
    // event?.stopPropagation();
    try {
      const result = await toggleProductToCart({
        variables: {
          productId,
          count: props.quantity,
        },
      });
      const status = result?.data?.toggleProductToCart;
      console.log(status);
      if (status === true && accessToken) {
        Modal.success({ content: "장바구니에 상품을 담았습니다." });
        props.setIsOpen(false);
        props.setQuantity(1);
      } else if (status === false && accessToken) {
        Modal.error({ content: "해당 상품이 장바구니에서 삭제되었습니다." });
        props.setIsOpen(false);
      }
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({ content: "로그인이 필요한 서비스입니다." });
    }
  };

  return (
    <>
      <section style={{ padding: "1rem" }}>
        <MS.PQuantitySelectSection>
          <MS.DetailInfoTitle01>{props.curProductData?.name}</MS.DetailInfoTitle01>
          <MS.PQRightButtons>
            <span>{sum.toLocaleString()}원</span>
            <CountDownBtn type="button" onClick={onClickQuantityDown} disabled={isDisabled} />
            <span>{props.quantity}</span>
            <CountUpBtn type="button" onClick={onClickQuantityUp} />
          </MS.PQRightButtons>
        </MS.PQuantitySelectSection>
        <MS.PriceSumSection01>
          <MS.DetailInfoTitle01>총 상품 금액</MS.DetailInfoTitle01>
          <MS.PriceSumDetail01>{sum.toLocaleString()}원</MS.PriceSumDetail01>
        </MS.PriceSumSection01>
        <MS.ButtonsWrapper01 style={{ marginTop: "2rem" }}>
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
