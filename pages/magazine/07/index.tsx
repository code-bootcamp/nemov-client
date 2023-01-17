import styled from "@emotion/styled";
import { tablet } from "../../../src/commons/styles/breakPoints";
import { GlobalWrapper } from "../../../src/commons/styles/globalStyles";
import BackArrow from "../../../src/components/commons/arrow";

const Wrapper = styled(GlobalWrapper)`
  margin: 100px 0;
  text-align: center;

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
  margin-top: 80px;

  transition: all 0.5s 0.2s;
`;

export default function Magazine07() {
  return (
    <Wrapper>
      <Title>제주 비건 다이닝 4부</Title>
      <hr style={{ marginBottom: "30px" }} />
      <Img src="/images/magazine/07/7.webp" />
      <BackArrow />
    </Wrapper>
  );
}
