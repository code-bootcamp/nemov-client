import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import { UseQueryFetchPointTransactions } from "../../../commons/hooks/useQueries/point/UseQueryFetchPointTransactions";
import * as S from "./pointList.style";

export default function PointList() {
  const { data } = UseQueryFetchPointTransactions({
    page: 1,
  });

  console.log(data?.fetchPointTransactions);
  return (
    <GlobalWrapper style={{ margin: "60px auto" }}>
      <S.Title>판매자 포인트 관리 페이지</S.Title>
      <section>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.Th>번호</S.Th>
              <S.Th>날짜</S.Th>
              <S.Th>입출금 내역</S.Th>
              <S.Th>포인트 합계</S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {data?.fetchPointTransactions.map((el, index) => (
              <S.Tr key={el.id}>
                <S.Td>{index + 1}</S.Td>
                <S.Td>{el.createdAt}</S.Td>
                <S.Td>{el.amount}</S.Td>
                <S.Td>{el.balance}%</S.Td>
              </S.Tr>
            ))}
          </S.Tbody>
        </S.Table>
      </section>
    </GlobalWrapper>
  );
}
