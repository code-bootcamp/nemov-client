import { IMarketDetail05Props } from "../../../../../Market.types";
import * as CS from "../MarketDetailBody.styles";
import * as S from "./ProductNoticeInfo.styles";

export default function ProductNoticeInfo(props: IMarketDetail05Props) {
  const noticeData = props.data?.data?.fetchProduct.productOption;

  return (
    <S.NoticeInfoSection>
      <CS.TabContentHeader01>
        <CS.TabContentTitle01>상품고시정보</CS.TabContentTitle01>
      </CS.TabContentHeader01>
      <S.NoticeInfoTable>
        <S.TbWrapper>
          <S.TableColumnSet>
            <S.TableColumnHead>품명 및 모델명</S.TableColumnHead>
            <S.TableColumContent>{props.data?.data?.fetchProduct.option1}</S.TableColumContent>
            <S.TableColumnHead>인증/허가 사항</S.TableColumnHead>
            <S.TableColumContent>{props.data?.data?.fetchProduct.option2}</S.TableColumContent>
          </S.TableColumnSet>
          <S.TableColumnSet>
            <S.TableColumnHead>제조국(원산지)</S.TableColumnHead>
            <S.TableColumContent>{props.data?.data?.fetchProduct.option3}</S.TableColumContent>
            <S.TableColumnHead>제조자(수입자)</S.TableColumnHead>
            <S.TableColumContent>{props.data?.data?.fetchProduct.option4}</S.TableColumContent>
          </S.TableColumnSet>
          {!!noticeData && (
            <>
              <S.TableColumnSet>
                <S.TableColumnHead>용량 또는 중량</S.TableColumnHead>
                <S.TableColumContent>{noticeData?.option6}</S.TableColumContent>
                <S.TableColumnHead>제품 주요 사양</S.TableColumnHead>
                <S.TableColumContent>{noticeData?.option7}</S.TableColumContent>
              </S.TableColumnSet>
              <S.TableColumnSet>
                <S.TableColumnHead>화장품법에 따라 기재해야하는 모든 성분</S.TableColumnHead>
                <S.TableColumContent>{noticeData?.option8}</S.TableColumContent>
                <S.TableColumnHead>사용기한 또는 개봉 후 사용기간</S.TableColumnHead>
                <S.TableColumContent>{noticeData?.option9}</S.TableColumContent>
              </S.TableColumnSet>
              <S.TableColumnSet>
                <S.TableColumnHead>사용방법</S.TableColumnHead>
                <S.TableColumContent>{noticeData?.option10}</S.TableColumContent>
                <S.TableColumnHead>품질보증기준</S.TableColumnHead>
                <S.TableColumContent>{noticeData?.option11}</S.TableColumContent>
              </S.TableColumnSet>
            </>
          )}
          <S.TableColumnSet>
            <S.TableColumnHead>소비자상담 관련 전화번호</S.TableColumnHead>
            <S.TableColumContent>{props.data?.data?.fetchProduct.option5}</S.TableColumContent>
            <S.TableColumnHead />
            <S.TableColumContent />
          </S.TableColumnSet>
        </S.TbWrapper>
      </S.NoticeInfoTable>
    </S.NoticeInfoSection>
  );
}
