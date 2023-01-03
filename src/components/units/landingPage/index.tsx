import Link from "next/link";
import * as S from "./landingPage.styles";
import EastIcon from "@mui/icons-material/East";

export default function LandingPage() {
  return (
    <S.Wrapper>
      <S.Section1>
        <S.Article>
          <S.Title>네가 찾는 모든 비건, 네모비</S.Title>
          <S.Sentence>
            건강한 비건 생활을 위해, 건강한 나를 위해 비건을 실천하는 모든 사람들을 위한 네모비와
            함께하세요.
          </S.Sentence>
          <Link href="/market">
            <S.Btn>네모비 베스트 상품 보러가기</S.Btn>
          </Link>
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
            좀 더 편하고 즐거운 비건 생활을 도울 수 있는 방법을 찾아보다가 '네모비'를 만들었습니다.
            <br />
            네모비에서 원하는 비건 상품과 다른 비건인들의 선택을 보며 원하는 비건 상품을 구매하고
            다른 회원들에게 솔직한 후기를 남겨주세요. 우리는 물건보다 경험을 팝니다.
          </S.Sentence2>
          <S.Btn>
            <Link href="/market">비건상품 스토어 바로가기</Link>
            <EastIcon />
          </S.Btn>
        </S.Article2>
        <S.Arrows>
          <S.Path1 d="M0 0 L30 32 L60 0"></S.Path1>
          <S.Path2 d="M0 20 L30 52 L60 20"></S.Path2>
          <S.Path3 d="M0 40 L30 72 L60 40"></S.Path3>
        </S.Arrows>
      </S.Section2>

      <S.Section4>
        <S.Article>
          <S.Title>나와 같은 유형을 만나 취향을 공유하다</S.Title>
          <S.Sentence>
            비건도 다 같은 비건이 아니듯 유형에 따라 선호하는 식품과 물건이 다를 수 밖에요. <br />
            네모비에서는 나와 같은 유형의 비건인들의 Pick을 알려드려요. 재밌고 편리한 비건 생활,
            네모비가 함께할게요
          </S.Sentence>
          <Link href="/signup">
            <S.Btn>네모비 회원가입</S.Btn>
          </Link>
        </S.Article>
        <S.Arrows>
          <S.Path1 d="M0 0 L30 32 L60 0"></S.Path1>
          <S.Path2 d="M0 20 L30 52 L60 20"></S.Path2>
          <S.Path3 d="M0 40 L30 72 L60 40"></S.Path3>
        </S.Arrows>
      </S.Section4>

      <S.Section3>
        <S.Article>
          <S.Title>네가 찾는 모든 비건, 네모비에서 빠르고 편리하게</S.Title>
          <S.Sentence></S.Sentence>
        </S.Article>
      </S.Section3>
    </S.Wrapper>
  );
}
