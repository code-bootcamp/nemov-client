import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { colorBase01, colorBase02 } from "../../../../commons/styles/colorBases";
import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import CountDown from "../../../commons/count/Conut.index";
import { UseMutationFindPassword } from "../../../commons/hooks/useMutations/login/UseMutationFindPassword";
import { UseMutationGetTokenForPassword } from "../../../commons/hooks/useMutations/login/UseMutationGetTokenForPassword";
import { FindPwSchema } from "./FindPassword.validation";

export interface IFormFindPasswordData {
  email: string;
  phone: string;
  password: string;
  prevPassword: string;
}

export default function FindPassword() {
  const [token, setToken] = useState("");

  const onChangeToken = (e: ChangeEvent<HTMLInputElement>) => {
    setToken(e.currentTarget.value);
  };

  // 인증번호 받기 / 확인
  const { getTokenForPasswordFunction, checkValidTokenForPasswordFunction, time } =
    UseMutationGetTokenForPassword();

  const onClickGetTokenForPassword = () => {
    const phone = getValues("phone");
    void getTokenForPasswordFunction(phone);
  };

  const onClickConfirmToken = () => {
    const phone = getValues("phone");
    const data = { phone, token };
    void checkValidTokenForPasswordFunction(data);
  };

  // Form
  const { findPasswordSubmit } = UseMutationFindPassword();

  const { register, handleSubmit, formState, getValues, setValue, watch } =
    useForm<IFormFindPasswordData>({
      resolver: yupResolver(FindPwSchema),
      mode: "onChange",
    });

  const onSubmitForm = (data: IFormFindPasswordData) => {
    const { prevPassword, ...value } = data;
    void findPasswordSubmit(value);
  };

  // 휴대폰 번호 형식 변환
  useEffect(() => {
    if (watch("phone").length === 11 && !watch("phone").includes("-")) {
      const Number = watch("phone");
      setValue("phone", Number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
    }
  }, [watch("phone")]);

  return (
    <Global>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <Line>
          <H2>비밀번호 재설정</H2>
        </Line>
        <InputWrapper>
          <Label>아이디</Label>
          <Input type="text" placeholder="아이디를 입력해주세요." {...register("email")} />
          <Error>{formState.errors.email?.message}</Error>
          <Label>현재 비밀번호</Label>
          <Input
            type="password"
            placeholder="현재 비밀번호를 입력해주세요."
            {...register("prevPassword")}
          />
          <Error>{formState.errors.prevPassword?.message}</Error>
          <Label>새로운 비밀번호</Label>
          <Input
            type="password"
            placeholder="변경할 비밀번호를 입력해주세요."
            {...register("password")}
          />
          <Error>{formState.errors.password?.message}</Error>
          <Label>휴대폰 번호</Label>
          <Input
            type="text"
            placeholder="휴대폰 번호를 입력해주세요. ( - 제외)"
            {...register("phone")}
          />
          <Error>{formState.errors.phone?.message}</Error>
          <TokenBtn type="button" onClick={onClickGetTokenForPassword}>
            인증번호 받기
          </TokenBtn>
          <ConfirmWrap>
            <ConfirmInput
              type="text"
              placeholder="인증번호를 입력해주세요."
              onChange={onChangeToken}
            />
            <ConfirmTime>{time && <CountDown min={3} sec={0} />}</ConfirmTime>
          </ConfirmWrap>
          <TokenBtn type="button" onClick={onClickConfirmToken}>
            인증번호 확인
          </TokenBtn>
          <FindBtn>비밀번호 변경하기</FindBtn>
        </InputWrapper>
      </Form>
    </Global>
  );
}

const Global = styled(GlobalWrapper)`
  height: 120vh;
  padding: 10% 0 5% 0;
`;

const Line = styled.div`
  width: 170px;
  border-bottom: 2px solid #1f3d31;
  text-align: center;
`;

const H2 = styled.h2`
  margin-bottom: 0.3rem;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.div`
  max-width: 400;
  padding: 1.25rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  width: 28%;
`;

const Input = styled.input`
  width: 100%;
  height: 46px;
  padding: 0px 11px 1px 15px;
  border: 1px solid #ddd;
  margin: 1rem 0 1rem 0;
`;

const ConfirmWrap = styled.div`
  width: 100%;
  position: relative;
`;

const ConfirmInput = styled.input`
  width: 100%;
  height: 46px;
  padding: 0px 11px 1px 15px;
  border: 1px solid #ddd;
  margin: 1rem 0 2rem 0;
`;

const ConfirmTime = styled.span`
  margin-right: 20px;
  font-size: 1rem;
  color: #436f59;
  font-weight: bold;
  position: absolute;
  top: 30px;
  right: 10px;
`;

const TokenBtn = styled.button`
  padding: 0px 10px;
  width: 400px;
  height: 52px;
  border: 1px solid #222;
  ${colorBase02}
  margin-bottom: 20px;
`;

const FindBtn = styled.button`
  padding: 0px 10px;
  width: 400px;
  height: 52px;
  color: rgb(255, 255, 255);
  ${colorBase01}
`;

const Error = styled.p`
  margin-bottom: 15px;
  color: red;
`;
