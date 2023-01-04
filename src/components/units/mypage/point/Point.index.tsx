import { DatePicker, Space } from "antd";
import { useState } from "react";
import { UseQueryFetchPointTransactions } from "../../../commons/hooks/useQueries/point/UseQueryFetchPointTransactions";
import Paginations01 from "../../../commons/paginations/01/Paginations01.index";
import * as S from "./Point.styles";

export default function MypagePoint() {
  const { RangePicker } = DatePicker;

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { data, refetch } = UseQueryFetchPointTransactions({
    startDate,
    endDate,
    page: 1,
  });

  // console.log(data?.fetchPointTransactions);

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
        <S.TableBottom>
          <S.TableBottomLi>23.01.03</S.TableBottomLi>
          <S.TableBottomContent>충전</S.TableBottomContent>
          <S.TableBottomLi>4000 원</S.TableBottomLi>
          <S.TableBottomLi>4000 원</S.TableBottomLi>
          <S.RefundBtn>환불</S.RefundBtn>
        </S.TableBottom>
        {data?.fetchPointTransactions.length !== 0 ? (
          <>
            {data?.fetchPointTransactions.map((el, index) => (
              <S.TableBottom key={index}>
                <S.TableBottomLi>{el.createdAt}</S.TableBottomLi>
                <S.TableBottomContent>{el.status}</S.TableBottomContent>
                <S.TableBottomLi>+ {el.balance} 원</S.TableBottomLi>
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
      <section>
        <Paginations01 />
      </section>
      {/* )} */}
    </S.ContentsMain>
  );
}
