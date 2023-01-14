import Link from "next/link";
import * as S from "./footer.styles";

export default function LayoutFooter() {
  return (
    <S.Wrapper>
      <S.Wrap>
        <S.InnerWrapper1>
          <S.RItem>네모비 소개</S.RItem>
          <S.RItem>이용약관</S.RItem>
          <S.RItem>개인정보취급방침</S.RItem>
          <S.RItem>공지사항</S.RItem>
        </S.InnerWrapper1>
      </S.Wrap>
      <S.InnerWrapper>
        <S.FooterLeft>
          <S.RWrap>
            <S.Call>
              <S.B>고객센터 </S.B> 3636-3636
            </S.Call>
            <S.Email>
              <S.B>이메일 문의 </S.B> tlsalduszz@gmail.com
            </S.Email>
          </S.RWrap>
          <>
            <h2 style={{ marginBottom: "1rem" }}>(주)네모비</h2>
            <S.FooterDetail>
              서울특별시 구로구 디지털로 300(구로동, 지밸리비즈플라자)
            </S.FooterDetail>
            <S.FooterDetail>
              Email:help@nemov.com | 상호:네가 찾는 모든 비건, 네모비 | 사업자 등록번호:111-99-33333
            </S.FooterDetail>
            <S.FooterDetail>Copyright © OASIS Corp. All Rights Reserved.</S.FooterDetail>
          </>
        </S.FooterLeft>
        <S.FooterRight>
          <Link href="/market">
            <S.FooterLogo>
              <S.LogoImg src="/logo/nemov_g-footer.png" alt="메인페이지로 이동" />
            </S.FooterLogo>
          </Link>
        </S.FooterRight>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
