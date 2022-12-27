// src에 파일을 만들어놨는데 우선 목업만 여기서 작업하겠슴당.
// import MyPage from "../../src/components/units/maPage";

// export default function MyPagePage() {
//   return <MyPage />;
// }
import * as S from "./myPage.styles";

// antd date
import React from "react";
import { DatePicker, Space } from "antd";

export default function MyPagePage() {
  const { RangePicker } = DatePicker;

  return (
    <S.Wrapper>
      <S.MyPageMenu>
        <S.MenuHeader>
          <S.Title>마이페이지</S.Title>
          <S.User>
            <S.UserName>name</S.UserName>님 <br />
            안녕하세요!
          </S.User>
        </S.MenuHeader>
        <hr />
        <S.MenuContents>
          <S.MyShoppingInfo>
            <S.Options>주문/취소 내역</S.Options>
            <S.Option>나의 쇼핑정보</S.Option>
            <S.Option>장바구니</S.Option>
            <S.Option>찜한 상품</S.Option>
          </S.MyShoppingInfo>
          <S.MyShoppingList>
            <S.Options>포인트 내역</S.Options>
            <S.Option>나의 쇼핑내역</S.Option>
            <S.Option>나의 후기</S.Option>
          </S.MyShoppingList>
        </S.MenuContents>
        <S.Management>
          <S.ManageBtn>내 정보 관리</S.ManageBtn>
        </S.Management>
      </S.MyPageMenu>
      <hr />
      <S.MyPageContents>
        <S.ContentsHeader>
          <S.HeaderItem>
            <S.ItemTitle>주문/배송</S.ItemTitle>
            <span>
              <S.ItemValue>0</S.ItemValue>건
            </span>
          </S.HeaderItem>
          <S.HeaderItem>
            <S.ItemTitle>장바구니</S.ItemTitle>
            <span>
              <S.ItemValue>0</S.ItemValue>건
            </span>
          </S.HeaderItem>
          <S.HeaderItem>
            <S.ItemTitle>포인트</S.ItemTitle>
            <span>
              <S.ItemValue>0</S.ItemValue>P
            </span>
          </S.HeaderItem>
        </S.ContentsHeader>
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
              <Space
                direction="vertical"
                size={12}
                style={{ marginRight: "10px" }}
              >
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
              <S.OrderInfo></S.OrderInfo>
              <br />
              <S.Date>2022.12.25</S.Date>
              <S.OrderInfo></S.OrderInfo>
            </S.OrderHistory>
          </article>
        </S.ContentsMain>
      </S.MyPageContents>
    </S.Wrapper>
  );
}
