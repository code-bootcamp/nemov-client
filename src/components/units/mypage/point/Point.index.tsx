import { DatePicker, Space } from "antd";
import { useState } from "react";
import { getDate } from "../../../../commons/libraries/utilies";
import { UseQueryFetchPointTransactions } from "../../../commons/hooks/useQueries/point/UseQueryFetchPointTransactions";
import * as S from "./Point.styles";

export default function MypagePoint() {
  const { RangePicker } = DatePicker;

  const date = String(new Date());

  const [startDate, setStartDate] = useState("2023-1-01");
  const [endDate, setEndDate] = useState(getDate(date));

  const { data, refetch } = UseQueryFetchPointTransactions({
    startDate,
    endDate,
    page: 1,
  });

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
      <S.Title>포인트 내역</S.Title>
      <S.ShoppingLookup>
        <div>
          <Space direction="vertical" size={12} style={{ marginRight: "10px" }}>
            <RangePicker onChange={onChangeDate} />
          </Space>
          <S.ManageBtn onClick={onClickSearchDate}>조회</S.ManageBtn>
        </div>
      </S.ShoppingLookup>
      <section>
        <S.TableTop>
          <S.TableTopLi>날짜</S.TableTopLi>
          <S.TableTopContent>내용</S.TableTopContent>
          <S.TableTopLi>충전금액</S.TableTopLi>
          <S.TableTopLi>잔액</S.TableTopLi>
          <S.TableTopSpan></S.TableTopSpan>
        </S.TableTop>
        {data?.fetchPointTransactions.length !== 0 ? (
          <>
            {data?.fetchPointTransactions.map((el, index) => (
              <S.TableBottom key={index}>
                <S.TableBottomLi>{getDate(el.createdAt)}</S.TableBottomLi>
                <S.TableBottomContent>
                  {(el.status === "PAID" && "충전") ||
                    (el.status === "CANCELLED" && "환불") ||
                    (el.status === "BOUGHT" && "구매") ||
                    (el.status === "REFUNDED" && "구매취소")}
                </S.TableBottomContent>
                <S.TableBottomLi>+ {el.amount} 원</S.TableBottomLi>
                <S.TableBottomLi>{el.user.point} 원</S.TableBottomLi>
                <S.RefundBtn>환불</S.RefundBtn>
              </S.TableBottom>
            ))}
          </>
        ) : (
          <S.NopointText>포인트 충전내역이 없습니다.</S.NopointText>
        )}
      </section>
      {/* {data?.fetchPointTransactions.length !== 0 && ( */}
      <section>{/* <Paginations02 /> */}</section>
      {/* )} */}
    </S.ContentsMain>
  );
}
