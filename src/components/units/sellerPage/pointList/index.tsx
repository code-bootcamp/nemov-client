import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import { UseQueryFetchProductOrdersBySeller } from "../../../commons/hooks/useQueries/product/UseQueryFetchProductOrdersBySeller";
import * as S from "./pointList.style";

export default function PointList() {
  const { query } = UseQueryFetchProductOrdersBySeller({
    startDate: "",
    endDate: "",
    page: 1,
  });

  console.log(query);

  return (
    <GlobalWrapper style={{ margin: "120px auto" }}>
      <S.Title>판매자 관리 페이지</S.Title>
      <section>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.Th>번호</S.Th>
              <S.Th>상품</S.Th>
              <S.Th>포인트</S.Th>
              <S.Th>총 포인트</S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {query.data?.fetchProductOrdersBySeller.map((el, index) => (
              <S.Tr key={el.id}>
                <S.Td>{index + 1}</S.Td>
                <S.Td>{el.product.name}</S.Td>
                <S.Td>{el.product.price}원</S.Td>
                <S.Td>{el.seller.point}%</S.Td>
              </S.Tr>
            ))}
          </S.Tbody>
        </S.Table>
      </section>
    </GlobalWrapper>
  );
}
