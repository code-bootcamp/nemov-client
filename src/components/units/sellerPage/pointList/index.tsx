import { getDate } from "../../../../commons/libraries/utilies";
import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import {
  UseQueryFetchPointTransactionsCount,
  UseQueryFetchPointTransactions,
} from "../../../commons/hooks/useQueries/point/UseQueryFetchPointTransactions";
import Pagination from "../../../commons/paginations/Pagination.index";
import * as S from "./pointList.style";

export default function PointList() {
  const { data, refetch } = UseQueryFetchPointTransactions({
    page: 1,
  });
  const { data: countPoint } = UseQueryFetchPointTransactionsCount();

  return (
    <GlobalWrapper style={{ margin: "60px auto" }}>
      <S.Title>판매자 포인트 관리 페이지</S.Title>
      <section style={{ display: "flex", flexDirection: "column" }}>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.Th>날짜</S.Th>
              <S.Th>상태</S.Th>
              <S.Th>입출금 내역</S.Th>
              <S.Th>포인트 합계</S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {data?.fetchPointTransactions.map((el, index) => (
              <S.Tr key={el.id}>
                <S.Td>{getDate(el.createdAt)}</S.Td>
                <S.Td>{el.status}</S.Td>
                <S.Td>{el.amount}원</S.Td>
                <S.Td>{el.balance}원</S.Td>
              </S.Tr>
            ))}
          </S.Tbody>
        </S.Table>
        {countPoint?.fetchPointTransactionsCount !== 0 && (
          <Pagination refetch={refetch} count={countPoint?.fetchPointTransactionsCount} />
        )}
      </section>
    </GlobalWrapper>
  );
}
