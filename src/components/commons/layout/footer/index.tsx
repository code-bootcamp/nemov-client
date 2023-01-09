import styled from "@emotion/styled";
import Link from "next/link";
import { mobile } from "../../../../commons/styles/breakPoints";
import { bold, GlobalWrapper } from "../../../../commons/styles/globalStyles";

export const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media ${mobile} {
    height: auto;
  }
`;

export const InnerWrapper = styled(GlobalWrapper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3% 0;
  @media ${mobile} {
    flex-direction: column;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: center;
`;
export const InnerWrapper1 = styled(InnerWrapper)`
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  @media ${mobile} {
    flex-direction: row;
    justify-content: center;
  }
`;

export const RItem = styled.span`
  margin: 0 1.5rem 0 2rem;
  font-size: 0.7rem;
  font-weight: 600;
  height: 40px;
  cursor: pointer;
  @media ${mobile} {
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.5rem;
  @media ${mobile} {
    justify-content: flex-start;
  }
`;

export const FooterLogo = styled.span`
  position: relative;
  margin-right: 3rem;
  ::before {
    content: "";
    position: absolute;
    width: 1px;
    height: 100px;
    background-color: rgb(152, 152, 152, 0.5);
    top: -9%;
    right: 0;
    display: block;
  }
`;

export const LogoImg = styled.img`
  width: 200px;

  @media ${mobile} {
    width: 200px;
  }
`;

export const FooterDetail = styled.p`
  font-size: 0.7rem;
`;

export const FooterRight = styled.div`
  width: 30%;
  @media ${mobile} {
    width: 100%;
  }
`;

export const RWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 7%;
  @media ${mobile} {
    flex-direction: row;
  }
`;

export const Call = styled.p`
  margin-right: 5%;
  font-size: 1rem;
`;

export const Email = styled.p`
  font-size: 1rem;
`;

export const B = styled.b`
  font-size: 1.2rem;
  color: #648d2a;
  ${bold}
`;

export default function LayoutFooter() {
  return (
    <Wrapper>
      <Wrap>
        <InnerWrapper1>
          <RItem>네모비 소개</RItem>
          <RItem>이용약관</RItem>
          <RItem>개인정보취급방침</RItem>
          <RItem>공지사항</RItem>
        </InnerWrapper1>
      </Wrap>
      <InnerWrapper>
        <FooterLeft>
          <Link href="/market">
            <FooterLogo>
              <LogoImg src="/logo/logo_hover.png" alt="메인페이지로 이동" />
            </FooterLogo>
          </Link>
          <hr />
          <div>
            <h2 style={{ marginBottom: "0.5rem" }}>(주)네모비</h2>
            <FooterDetail>서울특별시 구로구 디지털로 300(구로동, 지밸리비즈플라자)</FooterDetail>
            <FooterDetail>
              Email:help@nemov.com | 상호:네가 찾는 모든 비건, 네모비 | 사업자 등록번호:111-99-33333
            </FooterDetail>
            <FooterDetail>Copyright © OASIS Corp. All Rights Reserved.</FooterDetail>
          </div>
        </FooterLeft>
        <FooterRight>
          <RWrap>
            <Call>
              <B>고객센터 </B>| 3636-3636
            </Call>
            <Email>
              <B>이메일 문의 </B>| tlsalduszz@gmail.com
            </Email>
          </RWrap>
        </FooterRight>
      </InnerWrapper>
    </Wrapper>
  );
}
