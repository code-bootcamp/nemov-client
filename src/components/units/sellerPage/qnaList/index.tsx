import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import { UseQueryFetchQuestionsBySeller } from "../../../commons/hooks/useQueries/questions/UseQueryFetchQuestionsBySeller";
import * as S from "./QnAList.styles";

export default function QnAList() {
  const { data } = UseQueryFetchQuestionsBySeller({
    page: 1,
  });
  return (
    <GlobalWrapper style={{ margin: "60px auto" }}>
      <S.Title>문의 내역 관리 페이지</S.Title>
      <section>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.Th>번호</S.Th>
              <S.Th>상품</S.Th>
              <S.Th>문의</S.Th>
              <S.Th>답변여부</S.Th>
              <S.Th>날짜</S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {data?.fetchQuestionsBySeller.map((el, index) => (
              <S.Tr key={el.id}>
                <S.Td>{index + 1}</S.Td>
                <S.Td>{el.product.name}</S.Td>
                <S.Td>{el.title}</S.Td>
                <S.Td>{el.answer?.contents ? "답변완료" : "미답변"}원</S.Td>
                <S.Td>{el.answer?.createdAt}%</S.Td>
              </S.Tr>
            ))}
          </S.Tbody>
        </S.Table>
      </section>
    </GlobalWrapper>
  );
}
