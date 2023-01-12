import * as S from "./ProductDetail.styles";
import * as CS from "../MarketDetailBody.styles";
import { IMarketDetailProps } from "../../../../../Market.types";
import Dompurify from "dompurify";

export default function ProductDetail(props: IMarketDetailProps) {
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
