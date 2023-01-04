import { Modal } from "antd";
import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { UseMutationDeleteProduct } from "../../../commons/hooks/useMutations/product/UseMutationDeleteProduct";
import { UseQueryFetchProductsBySeller } from "../../../commons/hooks/useQueries/product/UseQueryFetchProductsBySeller";
import * as S from "./list.styles";

export default function ProductList() {
  const { onClickMoveToPage } = useMoveToPage();
  const { data } = UseQueryFetchProductsBySeller({
    page: 1,
  });
  const [deleteProduct] = UseMutationDeleteProduct();

  console.log(deleteProduct);

  const onClickDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await deleteProduct({
      variables: { productId: e.currentTarget.id },
    });
    Modal.success({ content: "삭제가 완료되었습니다." });
  };

  return (
    <GlobalWrapper style={{ margin: "120px auto" }}>
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
              <S.Th>수정</S.Th>
              <S.Th>삭제</S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {data?.fetchProductsBySeller.map((el, index) => (
              <S.Tr key={el.id}>
                <S.Td>{index + 1}</S.Td>
                <S.Td>{el.name}</S.Td>
                <S.Td>{el.price}원</S.Td>
                <S.Td>{el.discount}%</S.Td>
                <S.Td>{el.quantity}개</S.Td>
                <S.Td>{el.quantity === 0 ? "매진" : "판매중"}</S.Td>
                <S.Td>{el.category}</S.Td>
                <S.Td>{el.veganLevel}</S.Td>
                <S.Td>
                  <S.Btn1 onClick={onClickMoveToPage("/seller/[event.target.id]/edit]")}>
                    수정
                  </S.Btn1>
                </S.Td>
                <S.Td>
                  <S.Btn1 id={el.id} onClick={onClickDelete}>
                    삭제
                  </S.Btn1>
                </S.Td>
              </S.Tr>
            ))}
          </S.Tbody>
        </S.Table>
        <S.Btn2 onClick={onClickMoveToPage("/seller/new")}>상품 등록하기</S.Btn2>
      </section>
    </GlobalWrapper>
  );
}
