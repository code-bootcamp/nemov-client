import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { colorBase01, colorBase02 } from "../../../../commons/styles/colorBases";
import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import { FindIdSchema } from "./FindId.validtation";

export default function FindId() {
  const { register } = useForm({
    resolver: yupResolver(FindIdSchema),
    mode: "onChange",
  });

  return (
    <Global>
      <Form>
        <Line>
          <H2>아이디 찾기</H2>
        </Line>
        <InputWrapper>
          <Label>이름</Label>
          <Input type="text" placeholder="이름을 입력해주세요." />
          <Label>휴대폰 번호</Label>
          <Input type="text" placeholder="휴대폰 번호를 입력해주세요." {...register("phone")} />
          <TokenBtn type="button">인증번호 받기</TokenBtn>
          <Label>인증번호</Label>
          <ConfirmInput type="text" placeholder="인증번호를 입력해주세요." {...register("token")} />
          <FindBtn>아이디 찾기</FindBtn>
        </InputWrapper>
      </Form>
    </Global>
  );
}

const Global = styled(GlobalWrapper)`
  height: 86vh;
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
  margin: 1rem 0 2rem 0;
`;

const ConfirmInput = styled.input`
  width: 100%;
  height: 46px;
  padding: 0px 11px 1px 15px;
  border: 1px solid #ddd;
  margin: 1rem 0 2rem 0;
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
