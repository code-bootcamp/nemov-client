import { getDiscountPrice } from "../../../../../commons/libraries/utilies";
import {
  StyledCommonButton01,
  StyledCommonButton02,
} from "../../../../commons/buttons/CommonButtons.styles";
import { CommonHeartIcon01 } from "../../../../commons/icons/CommonIcons.styles";
import { VeganLevelTag01 } from "../../../../commons/tags/CommonTags.Styles";
import { MinusBtn, PlusBtn } from "../../../mypage/basket/Basket.styles";
import { IMarketDetailProps } from "../../Market.types";
import * as S from "./MarketDetailHead.styles";
import MarketDetailHeadCrumbs from "./nav/MarketDetailHeadCrumbs";

export default function MarketDetailHead(props: IMarketDetailProps) {
  console.log("landing");
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
            <VeganLevelTag01>{props.data.data?.fetchProduct.veganLevel}</VeganLevelTag01>
          </S.ProductDetailLevelSection>
          <S.ProductPriceDetail01>
            <S.PriceDetailSection01>
              <S.ProductDiscount01>{props.data.data?.fetchProduct.discount}</S.ProductDiscount01>
              <span>
                {getDiscountPrice(
                  props.data.data?.fetchProduct.price,
                  props.data.data?.fetchProduct.discount
                )}
              </span>
              <S.ProductOriginalPrice01>
                {props.data.data?.fetchProduct.price}
              </S.ProductOriginalPrice01>
            </S.PriceDetailSection01>
            <S.PriceDetailSection01>
              <S.DetailInfoTitle01>배송비</S.DetailInfoTitle01>
              <S.DetailInfoContent01>
                {props.data.data?.fetchProduct.deliveryFee}
              </S.DetailInfoContent01>
            </S.PriceDetailSection01>
          </S.ProductPriceDetail01>
          <S.ProductDetailFooter01>
            <S.PQuantitySelectSection>
              <S.DetailInfoTitle01>{props.data.data?.fetchProduct.name}</S.DetailInfoTitle01>
              <S.PQRightButtons>
                <span>
                  {getDiscountPrice(
                    props.data.data?.fetchProduct.price,
                    props.data.data?.fetchProduct.discount
                  )}
                </span>
                <MinusBtn>-</MinusBtn>
                <span>1</span>
                <PlusBtn>+</PlusBtn>
              </S.PQRightButtons>
            </S.PQuantitySelectSection>
            <S.PriceSumSection01>
              <S.DetailInfoTitle01>총 상품 금액</S.DetailInfoTitle01>
              <S.PriceSumDetail01>선택한 수량만큼 금액이 합쳐진 값</S.PriceSumDetail01>
            </S.PriceSumSection01>
            <S.ButtonsWrapper01>
              <CommonHeartIcon01 />
              <StyledCommonButton02>장바구니</StyledCommonButton02>
              <StyledCommonButton01>구매하기</StyledCommonButton01>
            </S.ButtonsWrapper01>
          </S.ProductDetailFooter01>
        </S.ProductDetailAside01>
      </S.MarketDetailPageHead>
    </>
  );
}
