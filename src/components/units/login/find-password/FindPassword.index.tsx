import styled from "@emotion/styled";
import { colorBase01 } from "../../../../commons/styles/colorBases";
import { GlobalWrapper } from "../../../../commons/styles/globalStyles";

export default function FindPassword() {
  return (
    <Global>
      <InnerWrapper>
        <Line>
          <H2>비밀번호 찾기</H2>
        </Line>
        <InputWrapper>
          <Label>아이디</Label>
          <Input type="text" placeholder="아이디를 입력해주세요." />
          <FindBtn>비밀번호 찾기</FindBtn>
        </InputWrapper>
      </InnerWrapper>
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

const InnerWrapper = styled.div`
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
  margin: 1rem 0 3rem 0;
`;

const FindBtn = styled.button`
  padding: 0px 10px;
  width: 400px;
  height: 52px;
  color: rgb(255, 255, 255);
  ${colorBase01}
`;
