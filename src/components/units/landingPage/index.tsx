import Link from "next/link";
import * as S from "./landingPage.styles";
import { useApolloClient } from "@apollo/client";
import { FETCH_PRODUCTS_OF_BEST_SELLING } from "../../commons/hooks/useQueries/product/UseQueryFetchProductsOfBest";
import { FETCH_PRODUCTS_OF_RECOMMEND } from "../../commons/hooks/useQueries/product/UseQueryFetchProductsOfRecommend";

export default function LandingPage() {
  const client = useApolloClient();

  const prefetchData = async () => {
    await client.query({
      query: FETCH_PRODUCTS_OF_RECOMMEND,
    });
    await client.query({
      query: FETCH_PRODUCTS_OF_BEST_SELLING,
    });
  };

  return (
    <S.Wrapper>
      <S.Section1>
        <S.Article>
          <S.Title>네가 찾는 모든 비건, 네모비</S.Title>
          <S.Sentence>
            건강한 생활, 그리고 지구를 위한 비거니즘(Veganism) 실천
            <br />
            네모비가 함께합니다.
          </S.Sentence>
        </S.Article>
        <S.Arrows>
          <S.Path1 d="M0 0 L30 32 L60 0"></S.Path1>
          <S.Path2 d="M0 20 L30 52 L60 20"></S.Path2>
          <S.Path3 d="M0 40 L30 72 L60 40"></S.Path3>
        </S.Arrows>
      </S.Section1>

      <S.Section2>
        <S.Article2>
          <S.Title>
            아직도 나에게 맞는
            <br /> 비건상품을 찾아 <br />
            여기저기 돌아다니시나요?
          </S.Title>
          <S.Sentence2>
            과거 사람들은 비건을 완전한 채식주의자 정도의 의미로 이해하고 사용했으나, 최근에는
            먹을거리 뿐만 아니라 ‘생활 전반에서 동물성 제품을 사용하지 않는 철학이자 삶의 방식을
            실천하는 사람’이라는 조금 더 넓은 개념으로 이해하기 시작했습니다. 또한 비거니즘의 정의가
            넓어지면서 비거니즘 유형 또한 다양해졌습니다. 우리는 이러한 변화에 맞게 비거니즘을
            따르는 국내 소비자들이 자신의 일상에서 쉽게 비거니즘을 향유할 수 있도록 비거니즘 전용
            E-Commerce 서비스를 기획했습니다.
          </S.Sentence2>
        </S.Article2>
        <S.Arrows>
          <S.Path1 d="M0 0 L30 32 L60 0"></S.Path1>
          <S.Path2 d="M0 20 L30 52 L60 20"></S.Path2>
          <S.Path3 d="M0 40 L30 72 L60 40"></S.Path3>
        </S.Arrows>
      </S.Section2>

      <S.Section4>
        <S.Article2>
          <S.Title02>나와 같은 유형을 만나 취향을 공유하다</S.Title02>
          <S.Sentence2>
            여러분은 어느 유형의 비거니즘을 실천하는 사람인가요?
            <br />
            네모비에서 회원가입을 하고 당신의 비거니즘 유형을 알려주세요.
            <br />
            네모비에서는 나와 같은 유형의 비건인들의 선택을 알려드려요.
            <br />
            편리한 비건 생활, 네모비에서 경험하세요.
          </S.Sentence2>
        </S.Article2>
        <S.Arrows>
          <S.Path1 d="M0 0 L30 32 L60 0"></S.Path1>
          <S.Path2 d="M0 20 L30 52 L60 20"></S.Path2>
          <S.Path3 d="M0 40 L30 72 L60 40"></S.Path3>
        </S.Arrows>
      </S.Section4>

      <S.Section3>
        <S.Article>
          <S.Title02>당신이 일상에서 쉽게 비거니즘을 실천할 수 있도록 네모비로 편리하게</S.Title02>
          <S.Sentence></S.Sentence>
          <Link href="/market">
            <S.Btn onMouseOver={prefetchData}>네모비 베스트 상품 보러가기</S.Btn>
          </Link>
        </S.Article>
      </S.Section3>
    </S.Wrapper>
  );
}
