import React, { memo, useCallback, useEffect, useState } from "react";
import { getVeganName } from "../../../../../../../commons/libraries/utilies";
import {
  StyledCommonButton01,
  StyledCommonButton02,
} from "../../../../../../commons/buttons/CommonButtons.styles";
import { CommonHeartIcon01 } from "../../../../../../commons/icons/CommonIcons.styles";
import { VeganLevelTag01 } from "../../../../../../commons/tags/CommonTags.Styles";

import { IMarketDetailProps } from "../../../../Market.types";

import * as S from "./MarketDetailHead.styles";
import MarketDetailHeadCrumbs from "./nav/MarketDetailHeadCrumbs";
import { CountDownBtn, CountUpBtn } from "../../../../../../commons/buttons/CountDownUpButtons";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT_ORDER } from "../../../../../../commons/hooks/useMutations/product/UseMutationCreateProductOrder";
import {
  IMutation,
  IMutationCreateProductOrderArgs,
} from "../../../../../../../commons/types/generated/types";
import { Modal } from "antd";

function MarketDetailHead(props: IMarketDetailProps) {
  // 할인율 적용된 가격

  const [createProductOrder] = useMutation<
    Pick<IMutation, "createProductOrder">,
    IMutationCreateProductOrderArgs
  >(CREATE_PRODUCT_ORDER);

  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmountAmount] = useState(1);

  const sum = (props.data.data?.fetchProduct.discountedPrice ?? 0) * quantity;

  console.log(quantity, totalAmount);

  // 수량 버튼
  const onClickQuantityDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (props.data.data?.fetchProduct.discountedPrice === undefined) return;

      setQuantity((prev) => prev - 1);

      setTotalAmountAmount(sum);
    },
    [quantity]
  );

  const onClickQuantityUp = useCallback(
    (e: React.MouseEvent) => {
      console.log("클릭");
      e.preventDefault();
      if (props.data.data?.fetchProduct.discountedPrice === undefined) return;

      setQuantity((prev) => prev + 1);
      setTotalAmountAmount(sum);
    },
    [quantity]
  );

  // 구매 버튼 함수
  const onClickBuyProduct = async () => {
    try {
      await createProductOrder({
        variables: {
          productId: String(props.data.data?.fetchProduct.id),
          amount: totalAmount,
          quantity,
        },
      });
      Modal.success({ content: "구매가 완료되었습니다." });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  useEffect(() => {
    if (props.data.data?.fetchProduct.discountedPrice !== undefined) {
      setTotalAmountAmount(sum);
      setQuantity(quantity);
    }
  }, [props.data]);

  return (
    <>
      <MarketDetailHeadCrumbs />
      <S.MarketDetailPageHead>
        {props.data.data?.fetchProduct.image !== undefined ? (
          <S.ProductDetailImage01 src={`${props.data.data?.fetchProduct.image}`} />
        ) : (
          <S.ProductDetailImage01 src="/images/best2.jpg" />
        )}
        <S.ProductDetailAside01>
          <S.ProductDetailHeader01>
            <S.ProductBrandName01>{props.data.data?.fetchProduct.user.name}</S.ProductBrandName01>
            <S.ProductName01>{props.data.data?.fetchProduct.name}</S.ProductName01>
          </S.ProductDetailHeader01>
          <S.ProductDetailLevelSection>
            <VeganLevelTag01>
              {getVeganName(props.data.data?.fetchProduct.veganLevel)}
            </VeganLevelTag01>
          </S.ProductDetailLevelSection>
          <S.ProductPriceDetail01>
            <S.PriceDetailSection01>
              <S.ProductDiscount01>
                {props.data.data?.fetchProduct.discountRate}%
              </S.ProductDiscount01>
              <span>{props.data.data?.fetchProduct.discountedPrice}원</span>
              <S.ProductOriginalPrice01>
                {props.data.data?.fetchProduct.price}원
              </S.ProductOriginalPrice01>
            </S.PriceDetailSection01>
            <S.PriceDetailSection01>
              <S.DetailInfoTitle01>배송비</S.DetailInfoTitle01>
              <S.DetailInfoContent01>30000원 이상 구매시, 배송비 무료</S.DetailInfoContent01>
            </S.PriceDetailSection01>
          </S.ProductPriceDetail01>
          <S.ProductDetailFooter01>
            <S.PQuantitySelectSection>
              <S.DetailInfoTitle01>{props.data.data?.fetchProduct.name}</S.DetailInfoTitle01>
              <S.PQRightButtons>
                <span>{sum}원</span>
                <CountDownBtn type="button" onClick={onClickQuantityDown} />
                <span>{quantity}</span>
                <CountUpBtn type="button" onClick={onClickQuantityUp} />
              </S.PQRightButtons>
            </S.PQuantitySelectSection>
            <S.PriceSumSection01>
              <S.DetailInfoTitle01>총 상품 금액</S.DetailInfoTitle01>
              <S.PriceSumDetail01>{sum}원</S.PriceSumDetail01>
            </S.PriceSumSection01>
            <S.ButtonsWrapper01>
              <CommonHeartIcon01 />
              <StyledCommonButton02>장바구니</StyledCommonButton02>
              <StyledCommonButton01 onClick={onClickBuyProduct}>구매하기</StyledCommonButton01>
            </S.ButtonsWrapper01>
          </S.ProductDetailFooter01>
        </S.ProductDetailAside01>
      </S.MarketDetailPageHead>
    </>
  );
}
export default memo(MarketDetailHead);
