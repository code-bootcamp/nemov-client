import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import * as S from "./MarketMain.styles";
// import MarketCategory from "../category/MarketCategory";
import * as ID from "../item-display/ItemDisplay";
import * as IDS from "../item-display/ItemDisplay.styles";
import { CustomArrowProps } from "react-slick";
import MarketCategory from "../category/MarketCategory";

const NextArrow = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
  <div {...props}>
    <IDS.NextArrowIcon />
  </div>
);

const PrevArrow = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
  <div {...props}>
    <IDS.PrevArrowIcon />
  </div>
);

export default function MarketMain() {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <GlobalWrapper>
      <S.MarketMainContainer>
        <MarketCategory></MarketCategory>
        <S.MainItemsWrapper>
          <S.PageLine />
          <S.RecommendItemSection01>
            <S.MarketMainHeader01>
              <S.HeaderSpan>name</S.HeaderSpan>님, 이런 상품은 어떠신가요?
              <S.HeaderDiv01>추천상품</S.HeaderDiv01>
            </S.MarketMainHeader01>
            <S.ItemsWrapper01>
              {new Array(3).fill(1).map((_, index) => (
                <ID.ItemDisPlay02 key={index} />
              ))}
            </S.ItemsWrapper01>
          </S.RecommendItemSection01>
          <S.MainMarketSection01>
            <S.MarketMainHeader02>
              네모비 회원이 선택한 상품
              <S.HeaderDiv02>베스트</S.HeaderDiv02>
            </S.MarketMainHeader02>
            <S.ItemsWrapper02>
              <IDS.StyledSlider02 {...settings}>
                {new Array(8).fill(1).map((_, index) => (
                  <ID.ItemDisPlay01 key={index}></ID.ItemDisPlay01>
                ))}
              </IDS.StyledSlider02>
            </S.ItemsWrapper02>
          </S.MainMarketSection01>
        </S.MainItemsWrapper>
      </S.MarketMainContainer>
    </GlobalWrapper>
  );
}
