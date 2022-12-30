import * as S from "./LayoutBanner.styles";

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <S.Wrapper>
      <S.StyleSlider {...settings}>
        <S.BannerImg src="/images/banner/slide3.png" alt="bannerImg3" />
        <S.BannerImg src="/images/banner/slide1.jpg" alt="bannerImg2" />
        <S.BannerImg src="/images/banner/slide2.jpg" alt="bannerImg1" />
      </S.StyleSlider>
    </S.Wrapper>
  );
}
