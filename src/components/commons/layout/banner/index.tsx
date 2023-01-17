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
                여러분의 경험을
                <br />
                리뷰로 남겨주세요!
              </h1>
              <p>
                best 리뷰를 달아주신 분들에게
                <br />
                즐거운 비건 생활을 위한 네모비 3000포인트를 드립니다.
              </p>
            </div>
          </S.GlobalWrap>
        </S.BannerImg1>
        <S.BannerImg2>
          <S.GlobalWrap>
            <div>
              <h1>
                네모비 회원가입 시
                <br />
                3000 포인트 증정
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
                최대 50%
                <br />
                설날 선물세트 하루 특가
              </h1>
              <p>
                선물세트로 올 설에는 마음을 전하고
                <br />
                건강까지 얻어가세요.
              </p>
            </div>
          </S.GlobalWrap>
        </S.BannerImg3>
      </S.StyleSlider>
    </S.Wrapper>
  );
}
