import * as S from "./LayoutBanner.styles";

export default function LayoutBanner() {
  const settings = {
    slide: "div",
    infinite: true,
    dots: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <S.Wrapper>
      <S.StyleSlider {...settings}>
        <S.BannerImg1>
          <S.GlobalWrap>
            <div>
              <h1>
                네모비
                <br />
                회원가입 시 3000 포인트 증정
              </h1>
              <p>
                지금 회원가입 시 3000 포인트를 증정해드립니다.
                <br />
                네모비와 함께 하세요!
              </p>
            </div>
          </S.GlobalWrap>
        </S.BannerImg1>
        <S.BannerImg2>
          <S.GlobalWrap>
            <div>
              <h1>
                네모비
                <br />
                회원가입 시 3000 포인트 증정
              </h1>
              <p>
                지금 회원가입 시 3000 포인트를 증정해드립니다.
                <br />
                네모비와 함께 하세요!
              </p>
            </div>
          </S.GlobalWrap>
        </S.BannerImg2>
        <S.BannerImg3>
          <S.GlobalWrap>
            <div>
              <h1>
                네모비
                <br />
                회원가입 시 3000 포인트 증정
              </h1>
              <p>
                지금 회원가입 시 3000 포인트를 증정해드립니다.
                <br />
                네모비와 함께 하세요!
              </p>
            </div>
          </S.GlobalWrap>
        </S.BannerImg3>
      </S.StyleSlider>
    </S.Wrapper>
  );
}
