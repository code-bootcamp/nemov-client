import * as CS from "../MarketDetailBody.styles";
import * as S from "./ProductNoticeInfo.styles";

export default function ProductNoticeInfo() {
  return (
    <CS.TabContentMain01>
      <CS.TabContentHeader01>
        <CS.TabContentTitle01>상품고시정보</CS.TabContentTitle01>
      </CS.TabContentHeader01>
      <S.NoticeInfoTable>
        <S.TbWrapper>
          <S.TableColumnSet>
            <S.TableColumnHead>용량 또는 중량</S.TableColumnHead>
            <S.TableColumContent>
              상품설명 및 상품이미지 참조
            </S.TableColumContent>
            <S.TableColumnHead>제조국</S.TableColumnHead>
            <S.TableColumContent>
              상품설명 및 상품이미지 참조
            </S.TableColumContent>
          </S.TableColumnSet>
          <S.TableColumnSet>
            <S.TableColumnHead>
              제품 주요 사양 (피부타입, 색상(호, 번) 등)
            </S.TableColumnHead>
            <S.TableColumContent>
              상품설명 및 상품이미지 참조
            </S.TableColumContent>
            <S.TableColumnHead>
              화장품법에 따라 기재·표시하여야 하는 모든 성분
            </S.TableColumnHead>
            <S.TableColumContent>
              상품설명 및 상품이미지 참조
            </S.TableColumContent>
          </S.TableColumnSet>
          <S.TableColumnSet>
            <S.TableColumnHead>
              사용기한 또는 개봉 후 사용기간(개봉 후 사용기간을 기재할 경우에는
              제조연월일을 병행표기)
            </S.TableColumnHead>
            <S.TableColumContent>제품 별도 라벨 표기 참조</S.TableColumContent>
            <S.TableColumnHead>
              기능성 화장품의 경우 화장품법에 따른 식품의약품안전처 심사 필 유무
              (미백, 주름개선, 자외선차단,태닝오일, 염색약, 탈모샴푸 등)
            </S.TableColumnHead>
            <S.TableColumContent>해당 사항 없음</S.TableColumContent>
          </S.TableColumnSet>
          <S.TableColumnSet>
            <S.TableColumnHead>사용방법</S.TableColumnHead>
            <S.TableColumContent>
              상품설명 및 상품이미지 참조
            </S.TableColumContent>
            <S.TableColumnHead>사용할 때 주의사항</S.TableColumnHead>
            <S.TableColumContent>
              상품설명 및 상품이미지 참조
            </S.TableColumContent>
          </S.TableColumnSet>
          <S.TableColumnSet>
            <S.TableColumnHead>제조업자 및 제조판매업자</S.TableColumnHead>
            <S.TableColumContent>
              상품설명 및 상품이미지 참조
            </S.TableColumContent>
            <S.TableColumnHead>품질보증기준</S.TableColumnHead>
            <S.TableColumContent>
              본 제품에 이상이 있을 경우 공정거래위원회 고시 소비자 분쟁해결
              기준에 의해 보상해드립니다.
            </S.TableColumContent>
          </S.TableColumnSet>
        </S.TbWrapper>
      </S.NoticeInfoTable>
    </CS.TabContentMain01>
  );
}
