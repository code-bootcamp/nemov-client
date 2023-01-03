import * as S from "./ProductDetail.styles";
import * as CS from "../MarketDetailBody.styles";
import { IMarketDetailProps } from "../../../Market.types";

export default function ProductDetail(props: IMarketDetailProps) {
  return (
    <CS.TabContentMain01>
      <S.ProductDetailSection>
        <S.ProductDetailImg src="/images/product-detail-ex02.webp" />
        2023년 계묘년(辛丑年) 검은 토끼의 해가 밝았습니다. 올해도 건강하시고 좋은 일만 가득하시길
        바라겠습니다. 새로운 시작이 있는 날입니다. 희망찬 새해에는 좋은 일만 가득하길 바라며 행복과
        행운이 함께 하시길 빕니다. 올해도 건강하고 행복한 한 해 보내세요! 지난 한 해 동안 베풀어주신
        관심과 사랑에 깊이 감사드립니다. 희망찬 새해에는 모든 소망이 이루어지고 가정에 건강과 행복이
        함께 하시길 기원합니다.
        <S.ProductDetailImg src="/images/product-detail-ex03.webp" />
        <S.ProductDetailImg src="/images/product-detail-ex.webp" />
      </S.ProductDetailSection>
    </CS.TabContentMain01>
  );
}
