import * as S from "./Orderlist.styles";
import { DatePicker, Space } from "antd";
import { useState } from "react";
import {
  UseQueryFetchProductOrdersByBuyer,
  UseQueryFetchProductOrdersCountByBuyer,
} from "../../../commons/hooks/useQueries/product/UseQueryFetchProductOrdersByBuyer";
import { getDate } from "../../../../commons/libraries/utilies";
import Paginations01 from "../../../commons/paginations/Paginations01.index";

export default function MypageOrderlist() {
  const { RangePicker } = DatePicker;

  const date = String(new Date());
  const [startDate, setStartDate] = useState("2023-1-01");
  const [endDate, setEndDate] = useState(getDate(date));

  const { data, refetch } = UseQueryFetchProductOrdersByBuyer({
    startDate,
    endDate,
    page: 1,
  });

  const { data: dataCount } = UseQueryFetchProductOrdersCountByBuyer({
    startDate,
    endDate,
  });

  console.log(data);
  console.log(dataCount);

  const onChangeDate = (value: any, dateStrings: [string, string]) => {
    setStartDate(dateStrings[0]);
    setEndDate(dateStrings[1]);
  };

  const onClickSearchDate = () => {
    // if (data === undefined) return;

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
        {data?.fetchProductOrdersByBuyer.length !== 0 ? (
          <>
            {data?.fetchProductOrdersByBuyer.map((order, index) => (
              <S.OrderHistory key={index}>
                <S.Date>{getDate(order.createdAt)}</S.Date>
                <S.OrderInfo>
                  <S.ItemImg src="" alt="상품 이미지" />
                  <S.ItemName>{order.product.name}</S.ItemName>
                  <S.ItemInfo>{order.product.price} 원</S.ItemInfo>
                  <S.ItemInfo>{order.quantity}개</S.ItemInfo>
                  <S.ItemInfo>
                    {order.status === "BOUGHT" ? "주문완료" : "주문취소 완료"}
                  </S.ItemInfo>
                  {order.status === "BOUGHT" ? (
                    <S.CancelBtn>주문취소</S.CancelBtn>
                  ) : (
                    <S.Area></S.Area>
                  )}
                </S.OrderInfo>
              </S.OrderHistory>
            ))}
            <Paginations01 count={dataCount} refetch={refetch} />
          </>
        ) : (
          <S.NoOrderText>주문내역이 없습니다.</S.NoOrderText>
        )}
      </article>
    </S.ContentsMain>
  );
}
