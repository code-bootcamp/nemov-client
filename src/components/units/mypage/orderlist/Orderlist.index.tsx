import * as S from "./Orderlist.styles";
import { DatePicker, Space } from "antd";
import { useState } from "react";
import { UseQueryFetchProductOrdersByBuyer } from "../../../commons/hooks/useQueries/product/UseQueryFetchProductOrdersByBuyer";

export default function MypageOrderlist() {
  const { RangePicker } = DatePicker;
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { data, refetch } = UseQueryFetchProductOrdersByBuyer({
    startDate,
    endDate,
    page: 1,
  });

  // console.log(data);

  const onChangeDate = (value: any, dateStrings: [string, string]) => {
    setStartDate(dateStrings[0]);
    setEndDate(dateStrings[1]);
  };

  const onClickSearchDate = () => {
    if (data === undefined) return;

    void refetch({ startDate, endDate, page: 1 });
  };

  return (
    <S.ContentsMain>
      <S.ShoppingLookup>
        <Space direction="vertical" size={12} style={{ marginRight: "10px" }}>
          <RangePicker onChange={onChangeDate} />
        </Space>
        <S.ManageBtn onClick={onClickSearchDate}>조회</S.ManageBtn>
      </S.ShoppingLookup>
      <article>
        <S.OrderHistory>
          <S.Date>2023.01.03</S.Date>
          <S.OrderInfo>
            <S.ItemImg src="" />
            <S.ItemName>상품이름</S.ItemName>
            <S.ItemInfo>30000 원</S.ItemInfo>
            <S.ItemInfo>1개</S.ItemInfo>
            <S.ItemInfo>주문완료</S.ItemInfo>
            <S.CancelBtn>주문취소</S.CancelBtn>
          </S.OrderInfo>
        </S.OrderHistory>
      </article>
      <article>
        {data?.fetchProductOrdersByBuyer.length !== 0 ? (
          <>
            {data?.fetchProductOrdersByBuyer.map((order, index) => (
              <S.OrderHistory key={index}>
                <S.Date>{order.createdAt}</S.Date>
                <S.OrderInfo>
                  <S.ItemImg src="" />
                  <S.ItemName>{order.product.name}</S.ItemName>
                  <S.ItemInfo>{order.product.price} 원</S.ItemInfo>
                  <S.ItemInfo>{order.quantity}개</S.ItemInfo>
                  <S.ItemInfo>{order.status}</S.ItemInfo>
                  {order.status === "BOUGHT" ? (
                    <S.CancelBtn>주문취소</S.CancelBtn>
                  ) : (
                    <S.Area></S.Area>
                  )}
                </S.OrderInfo>
              </S.OrderHistory>
            ))}
          </>
        ) : (
          <S.NoOrderText>주문내역이 없습니다.</S.NoOrderText>
        )}
      </article>
    </S.ContentsMain>
  );
}
