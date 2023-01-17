import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import * as S from "./MarketMain.styles";
import ItemDisPlay01 from "../categories/list/item-display/ItemDisplay";
import ItemDisPlay02 from "../categories/list/item-display/ItemDisplay02";
import * as IDS from "../categories/list/item-display/ItemDisplay.styles";
import { CustomArrowProps } from "react-slick";
import { UseQueryFetchLoginUser } from "../../../commons/hooks/useQueries/user/UseQueryFetchLoginUser";
import { UseQueryFetchProductsOfBestSelling } from "../../../commons/hooks/useQueries/product/UseQueryFetchProductsOfBestSelling";
import { UseQueryFetchProductsOfRecommend } from "../../../commons/hooks/useQueries/product/UseQueryFetchProductsOfRecommend";
import { FETCH_PRODUCT } from "../../../commons/hooks/useQueries/product/UseQueryFetchProduct";
import { useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { Modal } from "antd";
import CommonModal01 from "../../../commons/modals/CommonModal01";
import CartModal from "../categories/list/CartModalPage";
import { memo, useCallback, useState } from "react";
import { IProduct } from "../../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { FETCH_PRODUCTS } from "../../../commons/hooks/useQueries/product/UseQueryFetchProducts";
import { FETCH_PRODUCT_CATEGORIES } from "../../../commons/hooks/useQueries/product/UseQueryFetchCategories";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";

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

function MarketMain() {
  const router = useRouter();
  const client = useApolloClient();

  const prefetchData = async () => {
    await client.query({
      query: FETCH_PRODUCTS,
      variables: {
        productCategoryId: "",
        veganLevel: 0,
        page: 1,
        search: "",
      },
    });
    await client.query({
      query: FETCH_PRODUCT_CATEGORIES,
    });
  };
  const { data: bestItemData } = UseQueryFetchProductsOfBestSelling();
  const { data: recItemData } = UseQueryFetchProductsOfRecommend();
  const { data: loginUserData } = UseQueryFetchLoginUser();
  const [accessToken] = useRecoilState(accessTokenState);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // 모달 기능
  const [isOpen, setIsOpen] = useState(false);
  const [, setCartModalItemVal] = useState<IProduct>();
  const [curProductData, setCurProductData] = useState<IProduct>();
  const [quantity, setQuantity] = useState(parseInt("1"));

  // 추천 상품 아이템 장바구니 모달 열기
  const onClickToggleCartModal01 = useCallback(
    (id: string) => (e: React.MouseEvent) => {
      e?.stopPropagation();

      if (!accessToken) {
        Modal.error({ content: "로그인이 필요한 서비스입니다." });
      } else {
        setIsOpen((prev) => !prev);
        const cartModalItem = recItemData?.fetchProductsOfRecommend.filter((cur) => {
          if (cur.id === id) {
            return setCurProductData(cur);
          } else {
            return undefined;
          }
        });

        if (cartModalItem === undefined) return;
        setCartModalItemVal(cartModalItem[0]);
      }
    },
    [recItemData]
  );

  // 베스트 상품 아이템 장바구니 모달 열기
  const onClickToggleCartModal02 = useCallback(
    (id: string) => (e: React.MouseEvent) => {
      e?.stopPropagation();

      if (!accessToken) {
        Modal.error({ content: "로그인이 필요한 서비스입니다." });
      } else {
        setIsOpen((prev) => !prev);
        const cartModalItem = bestItemData?.fetchProductsOfBestSelling.filter((cur) => {
          if (cur.id === id) {
            return setCurProductData(cur);
          } else {
            return undefined;
          }
        });

        if (cartModalItem === undefined) return;
        setCartModalItemVal(cartModalItem[0]);
      }
    },
    [bestItemData]
  );

  const modalOnCancel = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickMoveToProductDetail = useCallback(
    (productId: string) => async (event: React.MouseEvent) => {
      event?.preventDefault();
      const result = await client.query({
        query: FETCH_PRODUCT,
        variables: { productId },
      });
      if (result.data.fetchProduct.isOutOfStock !== true) {
        void router.push(`/market/product/${productId}`);
      } else {
        Modal.error({ content: "매진된 상품입니다." });
      }
    },
    [FETCH_PRODUCT]
  );

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <CommonModal01 isOpen={isOpen} onCancel={modalOnCancel} width={500}>
        <CartModal
          curProductData={curProductData}
          onCancel={modalOnCancel}
          setIsOpen={setIsOpen}
          setQuantity={setQuantity}
          quantity={quantity}
        ></CartModal>
      </CommonModal01>

      <GlobalWrapper>
        <S.MarketMainContainer>
          <S.MainItemsWrapper>
            <S.RecommendItemSection01>
              <S.MarketMainHeader01>
                <div>
                  <S.HeaderDiv03>추천상품</S.HeaderDiv03>
                  {accessToken && (
                    <S.HeaderSpan>
                      {!loginUserData ? `` : `${loginUserData.fetchLoginUser.name}님,`}
                    </S.HeaderSpan>
                  )}
                  <div style={{ display: "flex" }}>
                    이런 상품은 어떠신가요?
                    <S.HeaderDiv01>추천상품</S.HeaderDiv01>
                  </div>
                </div>

                <S.ToCategories
                  onClick={() => {
                    void router.push("/market/categories");
                  }}
                  onMouseOver={prefetchData}
                >
                  더보기
                  <S.StyledRightArrow />
                </S.ToCategories>
              </S.MarketMainHeader01>
              <IDS.ItemsWrapper03>
                {recItemData?.fetchProductsOfRecommend.map((rec) => (
                  <ItemDisPlay02
                    key={rec.id}
                    recData={rec}
                    onClickMoveToProductDetail={onClickMoveToProductDetail}
                    onClickToggleCartModal01={onClickToggleCartModal01}
                  />
                ))}
              </IDS.ItemsWrapper03>
            </S.RecommendItemSection01>
            <S.SubBanner onClick={onClickMoveToPage("/signup")}>
              <S.SubBannerImg src="/images/banner/Sub_banner.webp" />
              <S.SubBannerWords>
                <S.SubBannerWord01>네모비 회원가입시 3000 포인트 증정</S.SubBannerWord01>
                <S.SubBannerWord02>지금 네모비에 가입하세요</S.SubBannerWord02>
              </S.SubBannerWords>
            </S.SubBanner>

            <S.MainMarketSection01>
              <S.HeaderDiv04>베스트</S.HeaderDiv04>
              <S.MarketMainHeader02>
                <div style={{ display: "flex" }}>
                  네모비 회원이 선택한 상품
                  <S.HeaderDiv02>베스트</S.HeaderDiv02>
                </div>
                <S.ToCategories
                  onClick={() => {
                    void router.push("/market/categories");
                  }}
                  onMouseOver={prefetchData}
                >
                  더보기
                  <S.StyledRightArrow />
                </S.ToCategories>
              </S.MarketMainHeader02>
              <S.ItemsWrapper02>
                <IDS.StyledSlider02 {...settings}>
                  {bestItemData?.fetchProductsOfBestSelling.map((best) => (
                    <ItemDisPlay01
                      key={best.id}
                      bestData={best}
                      onClickMoveToProductDetail={onClickMoveToProductDetail}
                      onClickToggleCartModal02={onClickToggleCartModal02}
                    ></ItemDisPlay01>
                  ))}
                </IDS.StyledSlider02>
              </S.ItemsWrapper02>
            </S.MainMarketSection01>
          </S.MainItemsWrapper>
          <S.SubBanner02>
            <S.SubBannerWords02 onClick={onClickMoveToPage("/magazine/03")}>
              <S.SubBannerWord03>육류 식단 넘보는 콩고기 진격?</S.SubBannerWord03>
              <S.SubBannerWord02>자세한 내용 보러가기</S.SubBannerWord02>
            </S.SubBannerWords02>
            <S.SubBannerImg02 src="/images/banner/sub-banner02.webp" />
            <S.SubBannerWords03 onClick={onClickMoveToPage("/magazine/02")}>
              <S.SubBannerWord03>실험용으로 태어난 동물은 없다</S.SubBannerWord03>
              <S.SubBannerWord02>자세한 내용 보러가기</S.SubBannerWord02>
            </S.SubBannerWords03>
            <S.SubBannerImg02 src="/images/banner/sub-banner03.webp" />
          </S.SubBanner02>
        </S.MarketMainContainer>
      </GlobalWrapper>
    </>
  );
}

export default memo(MarketMain);
