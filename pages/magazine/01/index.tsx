import styled from "@emotion/styled";
import { mobile, tablet } from "../../../src/commons/styles/breakPoints";
import { GlobalWrapper } from "../../../src/commons/styles/globalStyles";
import { SlideBottom } from "../../../src/commons/styles/keyframes";
import BackButton from "../../../src/components/commons/arrow";

const Wrapper = styled(GlobalWrapper)`
  margin-top: 100px;
  text-align: center;
  animation: ${SlideBottom} 0.7s ease-in-out both;
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
  width: 60%;
  @media ${tablet} {
    width: 90%;
  }
  @media ${mobile} {
    width: 100%;
  }
`;

export default function Magazine01() {
  return (
    <Wrapper>
      <Title>건강한 비건 채식인이 빵을 고르는 방법</Title>
      <hr style={{ marginBottom: "30px" }} />
      <Img src="/images/magazine/01/magazine1.png" />
      <Img src="/images/magazine/01/1.png" />
      <Img src="/images/magazine/01/2.png" />
      <Img src="/images/magazine/01/3.png" />
      <Img src="/images/magazine/01/4.png" />
      <Img src="/images/magazine/01/5.png" />
      <Img src="/images/magazine/01/6.png" />
      <br />
      <BackButton />
    </Wrapper>
  );
}
