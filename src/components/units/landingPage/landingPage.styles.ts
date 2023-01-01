import styled from "@emotion/styled";
import { colorBase02 } from "../../../commons/styles/colorBases";

export const Wrapper = styled.main`
  width: 100vw;
  background-color: #222;
`;

export const Arrows = styled.svg`
  width: 15%;
  height: 10%;
  position: absolute;
  left: 50%;
  margin-left: -30px;
  bottom: 2rem;
`;

const Path = styled.path`
  stroke: #fff;
  fill: transparent;
  stroke-width: 2px;
  animation: arrow 2s infinite;
  -webkit-animation: arrow 2s infinite;
  @keyframes arrow {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const Path1 = styled(Path)`
  animation-delay: -1s;
  -webkit-animation-delay: -1s;
`;

export const Path2 = styled(Path)`
  animation-delay: -0.5s;
  -webkit-animation-delay: -0.5s;
`;

export const Path3 = styled(Path)`
  animation-delay: 0s;
  -webkit-animation-delay: 0s;
`;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
  position: relative;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);
  background-attachment: fixed;
  opacity: 0.8;
`;

export const Section1 = styled(Section)`
  background: url(/images/landing/1.jpg) no-repeat 50% 0 fixed;
  background-size: cover;
`;

export const Section2 = styled(Section)`
  background: url(/images/landing/2.jpg) no-repeat 50% 0 fixed;
  background-size: cover;
`;
export const Section3 = styled(Section)`
  background: url(/images/landing/3.jpg) no-repeat 50% 0 fixed;
  background-size: cover;
`;
export const Section4 = styled(Section)`
  background: url(/images/landing/4.jpg) no-repeat 50% 0 fixed;
  background-size: cover;
`;

export const Article = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Article2 = styled(Article)`
  width: 100%;
  max-width: 1300px;
  padding: 0 2rem;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-size: 3vmax;
  font-weight: 900;
  line-height: 1em;
  margin: 25px 0;
  color: #fff;
  line-height: 4vmax;
  text-shadow: rgba(0, 0, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const Sentence = styled.p`
  font-size: 1vmax;
  color: #fff;
  margin-bottom: 3rem;
  text-align: center;
`;

export const Sentence2 = styled(Sentence)`
  text-align: left;
`;

export const Btn = styled.button`
  padding: 1.2% 1.4%;
  ${colorBase02}
  border-radius: 0%;
  font-weight: 900;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
`;
