import styled from "@emotion/styled";
import Slider from "react-slick";

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
  .slick-next {
    right: 30px;
  }
  .slick-dots {
    bottom: 20px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const BannerImg = styled.img`
  width: 100%;
  height: auto;
  vertical-align: center;
  object-fit: cover;
  object-position: center;
`;
