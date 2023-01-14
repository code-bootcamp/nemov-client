import React, { memo, useCallback, useState } from "react";
import { getVeganName } from "../../../../../../../commons/libraries/utilies";
import { StyledCommonButton01 } from "../../../../../../commons/buttons/CommonButtons.styles";
import {
  CommonHeartIcon01,
  CommonHeartIcon02,
} from "../../../../../../commons/icons/CommonIcons.styles";
import { VeganLevelTag01 } from "../../../../../../commons/tags/CommonTags.Styles";

import { IMarketDetailHeadProps } from "../../../../Market.types";

import * as S from "./MarketDetailHead.styles";
import Crumbs from "./nav/MarketCrumbs";
import { CountDownBtn, CountUpBtn } from "../../../../../../commons/buttons/CountDownUpButtons";
import { message, Modal } from "antd";
import { UseMutationToggleProductPick } from "../../../../../../commons/hooks/useMutations/toggleProduct/\bUseMutationToggleProductPick";
import { UseMutationToggleProductToCart } from "../../../../../../commons/hooks/useMutations/toggleProduct/UseMutationToggleProductToCart";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../../../commons/stores";

function MarketDetailHead(props: IMarketDetailHeadProps) {
  // console.log("마켓 상세 페이지 헤드 랜더링");
  const { productPick } = UseMutationToggleProductPick();
  const { toggleProductToCart } = UseMutationToggleProductToCart();

  const [accessToken] = useRecoilState(accessTokenState);
  const [messageApi, contextHolder] = message.useMessage();
  const [quantity, setQuantity] = useState(parseInt("1"));
  const [isDisabled, setIsDisabled] = useState(false);
  const [isPicked, setIsPicked] = useState<boolean | undefined>(false);

  const sum = (props.data?.data?.fetchProduct.discountedPrice ?? 0) * quantity;

  // 수량 버튼
  const onClickQuantityDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (props.data?.data?.fetchProduct.discountedPrice === undefined) return;

      if (quantity <= 1) {
        setQuantity(1);
      } else {
        setIsDisabled(false);
        setQuantity((prev) => prev - 1);
      }
      // console.log(quantity);
    },
    [quantity]
  );

  const onClickQuantityUp = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (props.data?.data?.fetchProduct.discountedPrice === undefined) return;

      setQuantity((prev) => prev + 1);
    },
    [quantity]
  );

  // 장바구니 담기 기능
  const onClickToggleProductToCart = (productId: string) => async (event: React.MouseEvent) => {
    event?.stopPropagation();

    if (!accessToken) {
      Modal.error({ content: "로그인이 필요한 서비스입니다." });
    } else {
      try {
        const result = await toggleProductToCart({
          variables: {
            productId,
            count: quantity,
          },
        });
        console.log(result);
        const status = result?.data?.toggleProductToCart;
        // console.log(status);
        if (status === true) {
          void messageApi.open({
            type: "success",
            content: "상품을 장바구니에 담았습니다.",
            duration: 5,
          });
        } else {
          void messageApi.open({
            type: "error",
            content: "상품이 장바구니에서 삭제되었습니다.",
            duration: 5,
          });
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
          Modal.error({ content: `${error.message}` });
        }
      }
    }
  };

  // 찜하기 기능
  const onClickTogglePick = (productId: string | undefined) => async (event: React.MouseEvent) => {
    event?.stopPropagation();
    if (!accessToken) {
      Modal.error({ content: "로그인이 필요한 서비스입니다." });
    } else {
      try {
        if (productId === undefined) return;
        const result = await productPick(productId);
        const status = result?.data?.toggleProductPick;
        setIsPicked(status);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
          Modal.error({ content: `${error.message}` });
        }
      }
    }
  };

  // console.log("선택수량", quantity, "총 상품 금액", sum);

  return (
    <>
      <S.MarketDetailCrumbsWrapper>
        <Crumbs
          id={props.data?.data?.fetchProduct.productCategory.id}
          categoryName={props.data?.data?.fetchProduct.productCategory.name}
        />
      </S.MarketDetailCrumbsWrapper>
      <S.MarketDetailPageHead>
        {props.data?.data?.fetchProduct.image !== undefined ? (
          <S.ProductDetailImage01
            src={`${props.data.data?.fetchProduct.image}`}
            alt="상품 이미지"
          />
        ) : (
          <S.ProductDetailImageAlt />
        )}
        <S.ProductDetailAside01>
          <S.ProductDetailHeader01>
            <S.ProductBrandName01>{props.data?.data?.fetchProduct.user.name}</S.ProductBrandName01>
            <S.ProductName01>{props.data?.data?.fetchProduct.name}</S.ProductName01>
          </S.ProductDetailHeader01>
          <S.ProductDetailLevelSection>
            <VeganLevelTag01>
              {getVeganName(props.data?.data?.fetchProduct.veganLevel)}
            </VeganLevelTag01>
          </S.ProductDetailLevelSection>
          <S.ProductPriceDetail01>
            <S.PriceDetailSection01>
              <S.ProductDiscount01>
                {props.data?.data?.fetchProduct.discountRate}%
              </S.ProductDiscount01>
              <span>{props.data?.data?.fetchProduct.discountedPrice.toLocaleString()}원</span>
              <S.ProductOriginalPrice01>
                {props.data?.data?.fetchProduct.price.toLocaleString()}원
              </S.ProductOriginalPrice01>
            </S.PriceDetailSection01>
            <S.PriceDetailSection01>
              <S.DeliveryFeeTitle>배송비</S.DeliveryFeeTitle>
              <S.DetailInfoContent01>3,000원</S.DetailInfoContent01>
            </S.PriceDetailSection01>
            <S.PriceDetailSection01>
              <S.DetailInfoContent02>50,000원 이상 구매시 배송비 무료</S.DetailInfoContent02>
            </S.PriceDetailSection01>
          </S.ProductPriceDetail01>
          <S.ProductDetailFooter01>
            <S.PQuantitySelectSection>
              <S.DetailInfoTitle01>{props.data?.data?.fetchProduct.name}</S.DetailInfoTitle01>
              <S.PQRightButtons>
                <S.Number02>{sum.toLocaleString()}원</S.Number02>
                <CountDownBtn type="button" onClick={onClickQuantityDown} disabled={isDisabled} />
                <S.Number01>{quantity}</S.Number01>
                <CountUpBtn type="button" onClick={onClickQuantityUp} />
              </S.PQRightButtons>
            </S.PQuantitySelectSection>
            <S.PriceSumSection01>
              <S.DetailInfoTitle02>총 상품 금액</S.DetailInfoTitle02>
              <S.PriceSumDetail01>{sum.toLocaleString()}원</S.PriceSumDetail01>
            </S.PriceSumSection01>
            <S.ButtonsWrapper01>
              {!isPicked ? (
                <CommonHeartIcon01 onClick={onClickTogglePick(props.data?.data?.fetchProduct.id)} />
              ) : (
                <CommonHeartIcon02 onClick={onClickTogglePick(props.data?.data?.fetchProduct.id)} />
              )}
              {contextHolder}
              <StyledCommonButton01
                onClick={onClickToggleProductToCart(String(props.data?.data?.fetchProduct.id))}
              >
                장바구니
              </StyledCommonButton01>
            </S.ButtonsWrapper01>
          </S.ProductDetailFooter01>
        </S.ProductDetailAside01>
      </S.MarketDetailPageHead>
    </>
  );
}

export default memo(MarketDetailHead);
