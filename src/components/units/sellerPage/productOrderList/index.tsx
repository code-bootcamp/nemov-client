import { getDate } from "../../../../commons/libraries/utilies";
import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import {
  UseQueryFetchProductOrdersBySeller,
  UseQueryFetchProductOrdersCountBySeller,
} from "../../../commons/hooks/useQueries/product/UseQueryFetchProductOrdersBySeller";
import Pagination from "../../../commons/paginations/Pagination.index";
import * as S from "./ProductOrderList.styles";

export default function ProductOrderList() {
  const { data, refetch } = UseQueryFetchProductOrdersBySeller({
    page: 1,
  });

  const { data: productOrdersCount } = UseQueryFetchProductOrdersCountBySeller({});
  return (
    <GlobalWrapper style={{ margin: "60px auto" }}>
      <S.Title>판매자 주문 내역 관리 페이지</S.Title>
      <section style={{ display: "flex", flexDirection: "column" }}>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.Th>날짜</S.Th>
              <S.Th>구매자</S.Th>
              <S.Th>상품</S.Th>
              <S.Th>가격</S.Th>
              <S.Th>상태</S.Th>
              <S.Th>리뷰 유/무</S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {data?.fetchProductOrdersBySeller.map((el) => (
              <S.Tr key={el.id}>
                <S.Td>{getDate(el.createdAt)}</S.Td>
                <S.Td>{el.buyer.name}</S.Td>
                <S.Td>{el.product.name}</S.Td>
                <S.Td>{el.product.price}원</S.Td>
                <S.Td>{el.status}</S.Td>
                <S.Td>{el.review?.title ? "유" : "무"}</S.Td>
              </S.Tr>
            ))}
          </S.Tbody>
        </S.Table>
        <Pagination refetch={refetch} count={productOrdersCount?.fetchProductOrdersCountBySeller} />
      </section>
    </GlobalWrapper>
  );
}
