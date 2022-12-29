import * as S from "./Orderlist.styles";
import { DatePicker, Space } from "antd";

export default function MypageOrderlist() {
  const { RangePicker } = DatePicker;

  return (
    <S.ContentsMain>
      <S.ShoppingLookup>
        <S.SelectTerm>
          <S.SelectTermItem>전체</S.SelectTermItem>
          <S.SelectTermItem>1개월</S.SelectTermItem>
          <S.SelectTermItem>3개월</S.SelectTermItem>
          <S.SelectTermItem>6개월</S.SelectTermItem>
          <S.SelectTermItem>12개월</S.SelectTermItem>
        </S.SelectTerm>
        <div>
          <Space direction="vertical" size={12} style={{ marginRight: "10px" }}>
            <RangePicker />
          </Space>
          <S.ManageBtn>조회</S.ManageBtn>
        </div>
      </S.ShoppingLookup>
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
