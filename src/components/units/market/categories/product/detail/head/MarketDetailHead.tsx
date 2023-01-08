import React, { memo, useCallback, useState } from "react";
import { getVeganName } from "../../../../../../../commons/libraries/utilies";
import { StyledCommonButton01 } from "../../../../../../commons/buttons/CommonButtons.styles";
import {
  CommonHeartIcon01,
  CommonHeartIcon02,
} from "../../../../../../commons/icons/CommonIcons.styles";
import { VeganLevelTag01 } from "../../../../../../commons/tags/CommonTags.Styles";

import { IMarketDetailProps } from "../../../../Market.types";

import * as S from "./MarketDetailHead.styles";
import Crumbs from "./nav/MarketCrumbs";
import { CountDownBtn, CountUpBtn } from "../../../../../../commons/buttons/CountDownUpButtons";
import { Modal } from "antd";
import { UseMutationToggleProductPick } from "../../../../../../commons/hooks/useMutations/toggleProduct/\bUseMutationToggleProductPick";
import { UseMutationToggleProductToCart } from "../../../../../../commons/hooks/useMutations/toggleProduct/UseMutationToggleProductToCart";

function MarketDetailHead(props: IMarketDetailProps) {
  const { productPick } = UseMutationToggleProductPick();
  const { productToCart } = UseMutationToggleProductToCart();

  const [quantity, setQuantity] = useState(parseInt("1"));
  const [isDisabled, setIsDisabled] = useState(false);
  const [isPicked, setIsPicked] = useState<boolean | undefined>(false);

  const sum = (props.data.data?.fetchProduct.discountedPrice ?? 0) * quantity;

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
  // const onClickBuyProduct = async () => {
  //   try {
  //     await createProductOrders({
  //       variables: {
  //        productOrders: [
  //         productId: props.data.data?.fetchProduct.id,

  //        ],
  //         amount: sum,
  //       },
  //     });
  //     Modal.success({ content: "구매가 완료되었습니다." });
  //   } catch (error) {
  //     if (error instanceof Error) console.log(error.message);
  //   }
  // };

  // 장바구니 담기 기능

  const onClickToggleProductToCart = (productId: string) => async (event: React.MouseEvent) => {
    event?.stopPropagation();

    const result = await productToCart(productId);
    console.log(result);
    const status = result?.data?.toggleProductToCart;
    console.log(status);
    if (status === true) {
      Modal.success({ content: "장바구니에 상품을 담았습니다." });
    } else {
      Modal.error({ content: "해당 상품이 장바구니에서 삭제되었습니다." });
    }
  };

  // 찜하기 기능
  const onClickTogglePick = (productId: string | undefined) => async (event: React.MouseEvent) => {
    event?.stopPropagation();
    try {
      if (productId === undefined) return;
      const result = await productPick(productId);
      const status = result?.data?.toggleProductPick;
      setIsPicked(status);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

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
              {!isPicked ? (
                <CommonHeartIcon01 onClick={onClickTogglePick(props.data.data?.fetchProduct.id)} />
              ) : (
                <CommonHeartIcon02 onClick={onClickTogglePick(props.data.data?.fetchProduct.id)} />
              )}
              <StyledCommonButton01
                onClick={onClickToggleProductToCart(String(props.data.data?.fetchProduct.id))}
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
