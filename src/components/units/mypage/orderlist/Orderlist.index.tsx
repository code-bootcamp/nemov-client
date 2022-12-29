import * as S from "./Orderlist.styles";
import SearchDate from "../../../commons/search-date/SearchDate";

export default function MypageOrderlist() {
  return (
    <S.ContentsMain>
      <SearchDate />
      <S.MenuSelectWrap>
        <S.MenuSelect>전체</S.MenuSelect>
        <S.MenuSelect>주문내역</S.MenuSelect>
        <S.MenuSelect>취소내역</S.MenuSelect>
      </S.MenuSelectWrap>
      <article>
        {/* map 뿌려주면 됨 */}
        <S.OrderHistory>
          <S.Date>2022.12.25</S.Date>
          <S.OrderInfo>
            <S.ItemImg src="" />
            <S.ItemName>상품이름</S.ItemName>
            <S.ItemPrice>10000 원</S.ItemPrice>
            <S.ItemNums>1개</S.ItemNums>
            <S.ItemStatus>주문 완료</S.ItemStatus>
          </S.OrderInfo>
          <br />
          <S.Date>2022.12.25</S.Date>
          <S.OrderInfo>
            <S.ItemImg src="" />
            <S.ItemName>상품이름</S.ItemName>
            <S.ItemPrice>10000 원</S.ItemPrice>
            <S.ItemNums>1개</S.ItemNums>
            <S.ItemStatus>주문 완료</S.ItemStatus>
          </S.OrderInfo>
        </S.OrderHistory>
      </article>
    </S.ContentsMain>
  );
}
