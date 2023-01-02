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
        <S.BannerImg>
          <S.GlobalWrap>
            <div>
              <h1>
                최대 50%
                <br />
                설날 선물세트 단독 특가
              </h1>
              <p>
                이번 설날 네모비 선물세트와 함께
                <br />
                몸과 마음이 건강한 설을 선물하세요!
              </p>
            </div>
          </S.GlobalWrap>
        </S.BannerImg>
        <S.BannerImg>
          <S.GlobalWrap>
            <div>
              <h1>
                최대 50%
                <br />
                설날 선물세트 단독 특가
              </h1>
              <p>
                이번 설날 네모비 선물세트와 함께
                <br />
                몸과 마음이 건강한 설을 선물하세요!
              </p>
            </div>
          </S.GlobalWrap>
        </S.BannerImg>
        {/* <S.BannerImg src="/images/banner/1.jpg" alt="bannerImg2" />
        <S.BannerImg src="/images/banner/2.jpg" alt="bannerImg1" />
        <S.BannerImg src="/images/banner/slide1.jpg" alt="bannerImg1" /> */}
      </S.StyleSlider>
    </S.Wrapper>
  );
}
