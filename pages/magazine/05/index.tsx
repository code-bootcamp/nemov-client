import styled from "@emotion/styled";
import { tablet } from "../../../src/commons/styles/breakPoints";
import { GlobalWrapper } from "../../../src/commons/styles/globalStyles";
import { SlideTop } from "../../../src/commons/styles/keyframes";
import BackArrow from "../../../src/components/commons/arrow";

const Wrapper = styled(GlobalWrapper)`
  margin-top: 100px;
  text-align: center;
  animation: ${SlideTop} 0.7s ease-in-out both;
  @media ${tablet} {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-family: "Arita-Thin";
  word-break: keep-all;
  text-align: left;
`;

const Img = styled.img`
  width: 100%;
  transition: all 0.5s 0.2s;
`;

export default function Magazine05() {
  return (
    <Wrapper>
      <Title>제주 비건 다이닝 1부</Title>
      <hr style={{ marginBottom: "30px" }} />
      <Img src="/images/magazine/05/5.webp" />
      <BackArrow />
    </Wrapper>
  );
}
