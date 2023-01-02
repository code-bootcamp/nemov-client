import styled from "@emotion/styled";
import Slider from "react-slick";
import { tablet } from "../../../../commons/styles/breakPoints";
import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const Wrapper = styled.section`
  width: 100%;
  height: auto;
`;

export const StyleSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  .slick-prev {
    left: 30px;
    z-index: 1;
  }
  .slick-prev:before {
    /* content: ""; */
  }
  .slick-next {
    right: 30px;
  }
  .slick-dots {
    bottom: 20px;
    color: rgba(255, 255, 255, 0.5);
  }
  .slick-dots li {
    width: 2.5rem;
    margin: 0;
    padding: 0;
  }
  .slick-dots li button:before {
    content: "";
    width: 100%;
    height: 2px;

    background-color: #555;
  }
`;

export const BannerImg = styled.div`
  width: 100%;
  height: 70vh;
  vertical-align: center;
  object-fit: cover;
  object-position: center;
  background: url("/images/banner/11.png") no-repeat center;
  background-size: cover;
  @media ${tablet} {
    background: url("/images/banner/22.png") no-repeat center;
    background-size: cover;
    width: 100%;
    height: 80vh;
  }
`;

export const GlobalWrap = styled(GlobalWrapper)`
  padding: 3%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 3rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media ${tablet} {
    padding: 8%;
    justify-content: flex-end;
  }
`;
