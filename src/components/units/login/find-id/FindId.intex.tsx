import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { colorBase01, colorBase02 } from "../../../../commons/styles/colorBases";
import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import { IMutationFindEmailArgs } from "../../../../commons/types/generated/types";
import CountDown from "../../../commons/count/Conut.index";
import { UseMutationFindEmail } from "../../../commons/hooks/useMutations/login/UseMutationFindEmail";
import { UseMutationGetTokenForEmail } from "../../../commons/hooks/useMutations/login/UseMutationGetTokenForEmail";
import { FindIdSchema } from "./FindId.validtation";

export default function FindId() {
  const [token, setToken] = useState("");

  const onChangeToken = (e: ChangeEvent<HTMLInputElement>) => {
    setToken(e.currentTarget.value);
  };

  const { getTokenForEmailFunction, checkValidTokenForEmailFunction, time } =
    UseMutationGetTokenForEmail();

  const onClickGetTokenForEmail = () => {
    const phone = getValues("phone");
    void getTokenForEmailFunction(phone);
  };

  const onClickConfirmToken = () => {
    const phone = getValues("phone");
    const value = { phone, token };
    void checkValidTokenForEmailFunction(value);
  };

  const { findEmailSubmit } = UseMutationFindEmail();

  const { register, handleSubmit, formState, getValues, setValue, watch } =
    useForm<IMutationFindEmailArgs>({
      resolver: yupResolver(FindIdSchema),
      mode: "onSubmit",
    });

  const onSubmitForm = async (data: IMutationFindEmailArgs) => {
    await findEmailSubmit(data);
  };

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
          <H2>아이디 찾기</H2>
        </Line>
        <InputWrapper>
          <Label>이름</Label>
          <Input type="text" placeholder="이름을 입력해주세요." {...register("name")} />
          <Error>{formState.errors.name?.message}</Error>
          <Label>휴대폰 번호</Label>
          <Input
            type="text"
            placeholder="휴대폰 번호를 입력해주세요. ( - 제외 )"
            {...register("phone")}
          />
          <Error>{formState.errors.phone?.message}</Error>
          <TokenBtn type="button" onClick={onClickGetTokenForEmail}>
            인증번호 받기
          </TokenBtn>
          <Label>인증번호</Label>
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
          <FindBtn type="submit">아이디 찾기</FindBtn>
        </InputWrapper>
      </Form>
    </Global>
  );
}

const Global = styled(GlobalWrapper)`
  height: 100vh;
  padding: 8% 0 3% 0;
`;

const Line = styled.div`
  width: 150px;
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
  width: 25%;
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
  ${colorBase01}
`;

const Error = styled.p`
  margin-bottom: 15px;
  color: red;
`;
