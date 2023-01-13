import * as S from "./ProductDetail.styles";
import * as CS from "../MarketDetailBody.styles";
import { IProductDetailProps } from "../../../../../Market.types";
import Dompurify from "dompurify";

export default function ProductDetail(props: IProductDetailProps) {
  console.log("상품 상세 설명", props.data?.data?.fetchProduct.description);
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
    </CS.TabContentMain01>
  );
}
