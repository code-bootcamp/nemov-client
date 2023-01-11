import { Modal } from "antd";
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import { SetterOrUpdater } from "recoil";
import { UseMutationCreatePointCharge } from "../../commons/hooks/useMutations/point/UseMutationCreatePointCharge";
import * as S from "./payment.styles";

declare const window: typeof globalThis & {
  IMP: any;
};

interface PaymentProps {
  setIsOpen: SetterOrUpdater<boolean>;
}

export default function PaymentPage(props: PaymentProps) {
  const [point, setPoint] = useState(0);

  const [createPointCharge] = UseMutationCreatePointCharge();

  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp26362375"); // Example: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card", // card, vbank 등
        // merchant_uid: "ORD20180131-0000011", // 중복될 시, 결제 안됨!
        name: "노르웨이 회전 의자",
        amount: point,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/mypage/", // 모바일에서는 결제시, 결제페이지로 사이트가 이동됨
      },
      (rsp: any) => {
        if (rsp.success) {
          console.log(rsp.imp_uid, rsp);
          alert("결제에 성공하셨습니다!");
          try {
            void createPointCharge({
              variables: {
                impUid: rsp.imp_uid,
                amount: point,
              },
            });
          } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });
          }
          props.setIsOpen(false);
        } else {
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
          props.setIsOpen(false);
        }
      }
    );
  };

  const onclickGetValue = (event: any) => {
    // console.log(event.target.id);
    setPoint(Number(event.target.id));
  };

  const onChangePoint = (event: ChangeEvent<HTMLInputElement>) => {
    setPoint(Number(event.currentTarget.value));
    console.log(event.currentTarget.value);
  };

  return (
    <S.Wrapper>
      <h1>네모비 포인트 충전하기</h1>
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
      <S.PaymentBtn onClick={onClickPayment}>충전하기</S.PaymentBtn>
    </S.Wrapper>
  );
}
