import React, { memo, useCallback, useState } from "react";
import { getVeganName } from "../../../../../../../commons/libraries/utilies";
import {
  StyledCommonButton01,
  StyledCommonButton02,
} from "../../../../../../commons/buttons/CommonButtons.styles";
import { CommonHeartIcon01 } from "../../../../../../commons/icons/CommonIcons.styles";
import { VeganLevelTag01 } from "../../../../../../commons/tags/CommonTags.Styles";

import { IMarketDetailProps } from "../../../../Market.types";

import * as S from "./MarketDetailHead.styles";
import Crumbs from "./nav/MarketCrumbs";
import { CountDownBtn, CountUpBtn } from "../../../../../../commons/buttons/CountDownUpButtons";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT_ORDER } from "../../../../../../commons/hooks/useMutations/product/UseMutationCreateProductOrder";
import {
  IMutation,
  IMutationCreateProductOrderArgs,
} from "../../../../../../../commons/types/generated/types";
import { Modal } from "antd";

function MarketDetailHead(props: IMarketDetailProps) {
  const [createProductOrder] = useMutation<
    Pick<IMutation, "createProductOrder">,
    IMutationCreateProductOrderArgs
  >(CREATE_PRODUCT_ORDER);

  const [quantity, setQuantity] = useState(parseInt("1"));
  const [isDisabled, setIsDisabled] = useState(false);

  // 수량 버튼
  const onClickQuantityDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (props.data.data?.fetchProduct.discountedPrice === undefined) return;

      if (quantity <= 1) {
        setQuantity(1);
      } else {
        setIsDisabled(false);
        setQuantity((prev) => prev - 1);
      }
      console.log(quantity);
    },
    [quantity]
  );

  const onClickQuantityUp = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (props.data.data?.fetchProduct.discountedPrice === undefined) return;

      setQuantity((prev) => prev + 1);
    },
    [quantity]
  );

  // 구매 버튼 함수
  const onClickBuyProduct = async () => {
    try {
      await createProductOrder({
        variables: {
          productId: String(props.data.data?.fetchProduct.id),
          amount: sum,
          quantity,
        },
      });
      Modal.success({ content: "구매가 완료되었습니다." });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const sum = (props.data.data?.fetchProduct.discountedPrice ?? 0) * quantity;
  // useEffect(() => {
  //   if (props.data.data?.fetchProduct.discountedPrice !== undefined) {
  //     setTotalAmountAmount(sum);
  //     setQuantity(quantity);
  //   }
  // }, [props.data]);

  console.log("선택수량", quantity, "총 상품 금액", sum);

  return (
    <>
      <S.MarketDetailCrumbsWrapper>
        <Crumbs
          id={props.data.data?.fetchProduct.productCategory.id}
          categoryName={props.data.data?.fetchProduct.productCategory.name}
        />
      </S.MarketDetailCrumbsWrapper>
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
              <span>{props.data.data?.fetchProduct.discountedPrice.toLocaleString()}원</span>
              <S.ProductOriginalPrice01>
                {props.data.data?.fetchProduct.price.toLocaleString()}원
              </S.ProductOriginalPrice01>
            </S.PriceDetailSection01>
            <S.PriceDetailSection01>
              <S.DetailInfoTitle01>배송비</S.DetailInfoTitle01>
              <S.DetailInfoContent01>3,000원</S.DetailInfoContent01>
            </S.PriceDetailSection01>
            <S.PriceDetailSection01>
              <S.DetailInfoContent02>30,000원 이상 구매시 배송비 무료</S.DetailInfoContent02>
            </S.PriceDetailSection01>
          </S.ProductPriceDetail01>
          <S.ProductDetailFooter01>
            <S.PQuantitySelectSection>
              <S.DetailInfoTitle01>{props.data.data?.fetchProduct.name}</S.DetailInfoTitle01>
              <S.PQRightButtons>
                <span>{sum.toLocaleString()}원</span>
                <CountDownBtn type="button" onClick={onClickQuantityDown} disabled={isDisabled} />
                <span>{quantity}</span>
                <CountUpBtn type="button" onClick={onClickQuantityUp} />
              </S.PQRightButtons>
            </S.PQuantitySelectSection>
            <S.PriceSumSection01>
              <S.DetailInfoTitle01>총 상품 금액</S.DetailInfoTitle01>
              <S.PriceSumDetail01>{sum.toLocaleString()}원</S.PriceSumDetail01>
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
