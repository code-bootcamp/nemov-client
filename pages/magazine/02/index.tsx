import styled from "@emotion/styled";
import { tablet } from "../../../src/commons/styles/breakPoints";
import { GlobalWrapper } from "../../../src/commons/styles/globalStyles";
import { SlideBottom } from "../../../src/commons/styles/keyframes";
import BackArrow from "../../../src/components/commons/arrow";

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
  width: 100%;
`;

export default function Magazine02() {
  return (
    <Wrapper>
      <Title>‘실험용’으로 태어난 동물? 단언컨대 없어요.</Title>
      <hr style={{ marginBottom: "30px" }} />
      <Img src="/images/magazine/02/2.webp" />
      <BackArrow />
    </Wrapper>
  );
}
