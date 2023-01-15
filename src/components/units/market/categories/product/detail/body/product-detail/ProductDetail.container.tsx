import React from "react";
import * as S from "./ProductDetail.styles";
import * as CS from "../MarketDetailBody.styles";
import { IProductDetailProps } from "../../../../../Market.types";
import Dompurify from "dompurify";
import ProductNoticeInfo from "../product-notice-info/ProductNoticeInfo";

function ProductDetail(props: IProductDetailProps) {
  // console.log("상품 상세 컴포넌트 랜더링");

  return (
    <CS.TabContentMain01>
      <S.ProductDetailSection>
        {typeof window !== "undefined" ? (
          <S.ProductDescription
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(String(props.data?.data?.fetchProduct.description)),
            }}
          />
        ) : (
          <S.ProductDescription></S.ProductDescription>
        )}
      </S.ProductDetailSection>
      <ProductNoticeInfo data={props.data} />
    </CS.TabContentMain01>
  );
}

export default React.memo(ProductDetail);
