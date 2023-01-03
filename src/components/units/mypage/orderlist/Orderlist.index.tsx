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
            <S.ItemPrice>30000 원</S.ItemPrice>
            <S.ItemNums>1개</S.ItemNums>
            <S.ItemStatus>주문완료</S.ItemStatus>
          </S.OrderInfo>
        </S.OrderHistory>
      </article>
      <article>
        {data?.fetchProductOrdersByBuyer.length !== 0 ? (
          <>
            {data?.fetchProductOrdersByBuyer.map((el, index) => (
              <S.OrderHistory key={index}>
                <S.Date>{el.createdAt}</S.Date>
                <S.OrderInfo>
                  <S.ItemImg src="" />
                  <S.ItemName>{el.product.name}</S.ItemName>
                  <S.ItemPrice>{el.product.price} 원</S.ItemPrice>
                  <S.ItemNums>{el.quantity}개</S.ItemNums>
                  <S.ItemStatus>{el.status}</S.ItemStatus>
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
