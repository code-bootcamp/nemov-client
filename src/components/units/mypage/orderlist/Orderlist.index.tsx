import * as S from "./Orderlist.styles";
import { DatePicker, Modal, Space } from "antd";
import React, { useState } from "react";
import {
  UseQueryFetchProductOrdersByBuyer,
  UseQueryFetchProductOrdersCountByBuyer,
} from "../../../commons/hooks/useQueries/product/UseQueryFetchProductOrdersByBuyer";
import { getDate } from "../../../../commons/libraries/utilies";
import Link from "next/link";
import Pagination from "../../../commons/paginations/Pagination.index";
import { UseMutationCancelProductOrder } from "../../../commons/hooks/useMutations/product/UseMutationCancelProductOrder";

export default function MypageOrderlist() {
  const { RangePicker } = DatePicker;

  const date = String(new Date());
  const [startDate] = useState("2023-1-01");
  const [endDate] = useState(getDate(date));
  const [searchStartDate, setSearchStartDate] = useState("");
  const [searchEndDate, setSearchEndDate] = useState("");

  const [cancelProductOrder] = UseMutationCancelProductOrder();
  const { data, refetch } = UseQueryFetchProductOrdersByBuyer({
    startDate,
    endDate,
    page: 1,
  });

  const { data: dataCount, refetch: refetchCount } = UseQueryFetchProductOrdersCountByBuyer({
    startDate,
    endDate,
  });

  const onChangeDate = (value: any, dateStrings: [string, string]) => {
    setSearchStartDate(dateStrings[0]);
    setSearchEndDate(dateStrings[1]);
  };

  const onClickSearchDate = () => {
    void refetch({ startDate: searchStartDate, endDate: searchEndDate, page: 1 });
    void refetchCount({ startDate: searchStartDate, endDate: searchEndDate });
  };

  const onClickCancelOrder = (productOrderId: string) => async (e: React.MouseEvent) => {
    try {
      await cancelProductOrder({
        variables: {
          productOrderId,
        },
      });
      Modal.success({ content: "주문취소가 완료되었습니다." });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <S.ContentsMain>
      <S.Title>주문/취소 내역</S.Title>
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
                <S.Date>
                  {order.updatedAt ? getDate(order.updatedAt) : getDate(order.createdAt)}
                </S.Date>
                <S.OrderInfo>
                  <S.ItemImg src={order.product.image} alt="상품 이미지" />
                  <S.ItemName>{order.product.name}</S.ItemName>
                  <S.ItemInfo>
                    {(order.product.discountedPrice * order.quantity).toLocaleString()} 원
                  </S.ItemInfo>
                  <S.ItemInfo>{order.quantity}개</S.ItemInfo>
                  <S.ItemInfo>{order.status === "BOUGHT" ? "주문완료" : "주문취소"}</S.ItemInfo>
                  {order.status === "BOUGHT" ? (
                    <S.CancelBtn id={order.id} onClick={onClickCancelOrder(order.id)}>
                      주문취소
                    </S.CancelBtn>
                  ) : (
                    <S.Area></S.Area>
                  )}
                </S.OrderInfo>
              </S.OrderHistory>
            ))}
            <Pagination count={dataCount?.fetchProductOrdersCountByBuyer} refetch={refetch} />
          </>
        ) : (
          <>
            <S.NoOrderText>주문내역이 없습니다. 상품을 주문하러 가시겠어요?</S.NoOrderText>
            <S.MoveBtnWrap>
              <Link href="/market">
                <a>
                  <S.MoveBtn>주문하러 가기</S.MoveBtn>
                </a>
              </Link>
            </S.MoveBtnWrap>
          </>
        )}
      </article>
    </S.ContentsMain>
  );
}
