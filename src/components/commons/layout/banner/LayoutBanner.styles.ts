import styled from "@emotion/styled";
import Slider from "react-slick";
import { mobile, mobile2, tablet } from "../../../../commons/styles/breakPoints";
import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

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
    background: url("/icons/banner_prev_btn.png") no-repeat;
    width: 60px;
    height: 60px;
    color: "#555";
    &::before {
      display: none;
    }
    :hover {
      color: #000;
    }
  }
  .slick-prev:before {
    /* content: ""; */
  }
  .slick-next {
    right: 30px;
    z-index: 0;
    background: url("/icons/banner_next_btn.png") no-repeat;
    width: 60px;
    height: 60px;
    color: "#555";
    &::before {
      color: #555;
      display: none;
    }
    :hover {
      color: #000;
    }
  }
  .slick-next:before {
    /* content: ""; */
  }
  .slick-dots {
    @media ${mobile} {
      width: auto;
      bottom: 35px;
      right: 50px;
    }
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

const BannerImg = styled.div`
  width: 100%;
  height: 60vh;
  background-size: cover;
  @media ${tablet} {
    width: 100%;
    height: 80vh;
  }
`;

export const BannerImg1 = styled(BannerImg)`
  background: url("/images/banner/1.webp") no-repeat center;
  @media ${tablet} {
    background: url("/images/banner/11.webp") no-repeat center;
    background-size: cover;
  }
`;

export const BannerImg2 = styled(BannerImg)`
  background: url("/images/banner/2.webp") no-repeat center;
  @media ${tablet} {
    background: url("/images/banner/22.webp") no-repeat center;
    background-size: cover;
  }
`;

export const BannerImg3 = styled(BannerImg)`
  background: url("/images/banner/3.webp") no-repeat center;
  @media ${tablet} {
    background: url("/images/banner/33.webp") no-repeat center;
    background-size: cover;
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
    @media ${mobile} {
      font-size: 2.5rem;
    }
    @media ${mobile2} {
      font-size: 2rem;
    }
  }

  div {
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    @media ${mobile} {
      font-size: 1.5rem;
    }
    @media ${mobile2} {
      font-size: 1.2rem;
    }
  }

  @media ${tablet} {
    padding: 8%;
    justify-content: flex-end;
  }
`;

export const NextArrowIcon = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  background: url("/icons/banner_next_btn.png");
  width: 60px;
  height: 60px;
`;

export const PrevArrowIcon = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: url("/icons/banner_prev_btn.png");
  width: 60px;
  height: 60px;
`;
