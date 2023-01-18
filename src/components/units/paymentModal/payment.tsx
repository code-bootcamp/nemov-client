import { message } from "antd";
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import { SetterOrUpdater } from "recoil";
import { IQuery } from "../../../commons/types/generated/types";
import { UseMutationCreatePointCharge } from "../../commons/hooks/useMutations/point/UseMutationCreatePointCharge";
import * as S from "./payment.styles";

declare const window: typeof globalThis & {
  IMP: any;
};

interface PaymentProps {
  setIsOpen: SetterOrUpdater<boolean>;
  data?: Pick<IQuery, "fetchLoginUser"> | undefined;
}

export default function PaymentPage(props: PaymentProps) {
  const [point, setPoint] = useState(0);

  const [createPointCharge] = UseMutationCreatePointCharge();

  const [messageApi, contextHolder] = message.useMessage();

  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp26362375");

    IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        name: "네모비 포인트 충전",
        amount: point,
        buyer_email: props.data?.fetchLoginUser.email,
        buyer_name: props.data?.fetchLoginUser.name,
        buyer_tel: props.data?.fetchLoginUser.phone,
        buyer_addr: props.data?.fetchLoginUser.address,
        buyer_postcode: props.data?.fetchLoginUser.zipCode,
        m_redirect_url: "https://nemov.store/mypage/orderlist",
      },
      (rsp: any) => {
        if (rsp.success) {
          try {
            void createPointCharge({
              variables: {
                impUid: rsp.imp_uid,
                amount: point,
              },
            });
            void messageApi.open({
              type: "success",
              content: "결제가 완료되었습니다.",
              duration: 5,
            });
            location.reload();
          } catch (error) {
            if (error instanceof Error) {
              void messageApi.open({
                type: "error",
                content: `${error.message}`,
                duration: 5,
              });
            }
          }
          props.setIsOpen(false);
        } else {
          void messageApi.open({
            type: "error",
            content: "결제를 실패했습니다.",
            duration: 5,
          });
          props.setIsOpen(false);
        }
      }
    );
  };

  const onclickGetValue = (event: any) => {
    setPoint(Number(event.target.id));
  };

  const onChangePoint = (event: ChangeEvent<HTMLInputElement>) => {
    setPoint(Number(event.currentTarget.value));
  };

  return (
    <S.Wrapper>
      <h1 style={{ wordBreak: "keep-all" }}>네모비 포인트 충전하기</h1>
      <Head>
        <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
        ></script>
      </Head>
      <S.PayInput
        type="number"
        value={point}
        onChange={onChangePoint}
        placeholder="충전할 금액을 입력해 주세요"
      />
      <S.SelectBoxWrap>
        <S.SelectBox onClick={onclickGetValue} id="10000">
          +10,000
        </S.SelectBox>
        <S.SelectBox onClick={onclickGetValue} id="20000">
          +20,000
        </S.SelectBox>
        <S.SelectBox onClick={onclickGetValue} id="50000">
          +50,000
        </S.SelectBox>

        <S.SelectBoxLast onClick={onclickGetValue} id="100000">
          +100,000
        </S.SelectBoxLast>
      </S.SelectBoxWrap>
      {contextHolder}
      <S.PaymentBtn onClick={onClickPayment}>충전하기</S.PaymentBtn>
    </S.Wrapper>
  );
}
