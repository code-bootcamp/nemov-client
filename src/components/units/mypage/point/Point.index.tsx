import { DatePicker, Modal, Space } from "antd";
import React, { useState } from "react";
import { getDate } from "../../../../commons/libraries/utilies";
import { UseMutationCancelPointCharge } from "../../../commons/hooks/useMutations/point/UseMutationCancelPointCharge";
import {
  UseQueryFetchPointTransactions,
  UseQueryFetchPointTransactionsCount,
} from "../../../commons/hooks/useQueries/point/UseQueryFetchPointTransactions";
import Pagination from "../../../commons/paginations/Pagination.index";
import * as S from "./Point.styles";

export default function MypagePoint() {
  const { RangePicker } = DatePicker;

  const date = String(new Date());

  const [startDate] = useState("2023-1-01");
  const [endDate] = useState(getDate(date));
  const [searchStartDate, setSearchStartDate] = useState("");
  const [searchEndDate, setSearchEndDate] = useState("");

  const [cancelPointCharge] = UseMutationCancelPointCharge();
  const { data, refetch } = UseQueryFetchPointTransactions({
    startDate,
    endDate,
    page: 1,
  });

  const { data: dataCount, refetch: refetchCount } = UseQueryFetchPointTransactionsCount();

  const onChangeDate = (value: any, dateStrings: [string, string]) => {
    setSearchStartDate(dateStrings[0]);
    setSearchEndDate(dateStrings[1]);
  };

  const onClickSearchDate = async () => {
    await refetch({ startDate: searchStartDate, endDate: searchEndDate, page: 1 });
    await refetchCount({ startDate: searchStartDate, endDate: searchEndDate });
  };

  const onClickCancelCharge = async (e: React.MouseEvent) => {
    try {
      await cancelPointCharge({
        variables: {
          impUid: String(e.currentTarget.id),
        },
      });
      Modal.success({ content: "포인트 환불이 완료되었습니다." });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <S.ContentsMain>
      <S.Title>포인트 내역</S.Title>
      <S.ShoppingLookup>
        <Space direction="vertical" size={12} style={{ marginRight: "10px" }}>
          <RangePicker onChange={onChangeDate} />
        </Space>
        <S.ManageBtn onClick={onClickSearchDate}>조회</S.ManageBtn>
      </S.ShoppingLookup>
      <section>
        <S.TableTop>
          <S.TableTopLi>날짜</S.TableTopLi>
          <S.TableTopContent>내용</S.TableTopContent>
          <S.TableTopLi>금액</S.TableTopLi>
          <S.TableTopLi>잔액</S.TableTopLi>
          <S.TableTopSpan></S.TableTopSpan>
        </S.TableTop>
        {data?.fetchPointTransactions.length !== 0 ? (
          <>
            {data?.fetchPointTransactions.map((point, index) => (
              <S.TableBottom key={index}>
                <S.TableBottomLi>{getDate(point.createdAt)}</S.TableBottomLi>
                <S.TableBottomContent>
                  {(point.status === "PAID" && "충전") ||
                    (point.status === "CANCELLED" && "환불") ||
                    (point.status === "BOUGHT" && "구매") ||
                    (point.status === "REFUNDED" && "구매취소")}
                </S.TableBottomContent>
                <S.TableBottomLi>{point.amount} 원</S.TableBottomLi>
                <S.TableBottomLi>{point.balance} 원</S.TableBottomLi>
                {point.status === "PAID" ? (
                  <S.RefundBtn id={point.impUid ?? undefined} onClick={onClickCancelCharge}>
                    환불
                  </S.RefundBtn>
                ) : (
                  <S.SpanDiv></S.SpanDiv>
                )}
              </S.TableBottom>
            ))}
          </>
        ) : (
          <S.NopointText>포인트 충전내역이 없습니다.</S.NopointText>
        )}
      </section>
      {data?.fetchPointTransactions.length !== 0 && (
        <section>
          <Pagination count={dataCount?.fetchPointTransactionsCount} refetch={refetch} />
        </section>
      )}
    </S.ContentsMain>
  );
}
