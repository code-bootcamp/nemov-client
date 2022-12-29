import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import * as S from "./list.styles";

export default function ProductList() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <GlobalWrapper>
      <S.Title>판매자 관리 페이지</S.Title>
      <section>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.Th>번호</S.Th>
              <S.Th>상품</S.Th>
              <S.Th>가격</S.Th>
              <S.Th>할인률</S.Th>
              <S.Th>남은 수량</S.Th>
              <S.Th>판매 여부</S.Th>
              <S.Th>상품 카테고리</S.Th>
              <S.Th>비건 해당 유형</S.Th>
              <S.Th>상품 수정하기</S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            <S.Tr>
              <S.Td>1</S.Td>
              <S.Td>오렌지 주스</S.Td>
              <S.Td>2,000원</S.Td>
              <S.Td>10%</S.Td>
              <S.Td>15개</S.Td>
              <S.Td>판매중</S.Td>
              <S.Td>DRINK</S.Td>
              <S.Td>FLEX, POLO, PESCO, LACTOOVO, OVO, LACTO, VEGAN</S.Td>
              <S.Td>
                <button>수정하기</button>
              </S.Td>
            </S.Tr>
            <S.Tr>
              <S.Td>2</S.Td>
              <S.Td>비건 수분크림</S.Td>
              <S.Td>32,000원</S.Td>
              <S.Td>10%</S.Td>
              <S.Td>3개</S.Td>
              <S.Td>판매중</S.Td>
              <S.Td>BEAUTY</S.Td>
              <S.Td>FLEX, POLO, PESCO, LACTOOVO, OVO, LACTO, VEGAN</S.Td>
              <S.Td>
                <button>수정하기</button>
              </S.Td>
            </S.Tr>
            <S.Tr>
              <S.Td>3</S.Td>
              <S.Td>크림파스타</S.Td>
              <S.Td>12,000원</S.Td>
              <S.Td>7%</S.Td>
              <S.Td>5개</S.Td>
              <S.Td>판매중</S.Td>
              <S.Td>FOOD</S.Td>
              <S.Td>FLEX, POLO, PESCO, LACTOOVO, LACTO </S.Td>
              <S.Td>
                <button>수정하기</button>
              </S.Td>
            </S.Tr>
            <S.Tr>
              <S.Td>4</S.Td>
              <S.Td>포도 주스</S.Td>
              <S.Td>2,000원</S.Td>
              <S.Td>10%</S.Td>
              <S.Td>0개</S.Td>
              <S.Td>매진</S.Td>
              <S.Td>DRINK</S.Td>
              <S.Td>FLEX, POLO, PESCO, LACTOOVO, OVO, LACTO, VEGAN</S.Td>
              <S.Td>
                <button>수정하기</button>
              </S.Td>
            </S.Tr>
            <S.Tr>
              <S.Td>5</S.Td>
              <S.Td>사과 주스</S.Td>
              <S.Td>2,000원</S.Td>
              <S.Td>10%</S.Td>
              <S.Td>5개</S.Td>
              <S.Td>판매중</S.Td>
              <S.Td>DRINK</S.Td>
              <S.Td>FLEX, POLO, PESCO, LACTOOVO, OVO, LACTO, VEGAN</S.Td>
              <S.Td>
                <button>수정하기</button>
              </S.Td>
            </S.Tr>
            <S.Tr>
              <S.Td>6</S.Td>
              <S.Td>비건 라따뚜이 미트볼</S.Td>
              <S.Td>10,000원</S.Td>
              <S.Td>5%</S.Td>
              <S.Td>2개</S.Td>
              <S.Td>판매중</S.Td>
              <S.Td>FOOD</S.Td>
              <S.Td>FLEX, POLO, PESCO</S.Td>
              <S.Td>
                <button>수정하기</button>
              </S.Td>
            </S.Tr>
          </S.Tbody>
        </S.Table>
        <button onClick={onClickMoveToPage("/seller/new")}>
          상품 등록하기
        </button>
      </section>
    </GlobalWrapper>
  );
}
