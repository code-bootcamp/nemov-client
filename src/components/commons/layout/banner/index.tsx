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
        <S.BannerImg src="#" alt="bannerImg1" />
        <S.BannerImg src="#" alt="bannerImg2" />
        <S.BannerImg src="#" alt="bannerImg3" />
      </S.StyleSlider>
    </S.Wrapper>
  );
}
