import styled from "@emotion/styled";
import Link from "next/link";

export const Wrapper = styled.footer`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  border-top: 1px solid #ddd;
  background-color: #f7f7f7;
`;

export const InnerWrapper = styled.footer`
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.5rem;
`;

export const FooterLogo = styled.span`
  position: relative;
  ::before {
    content: "";
    position: absolute;
    width: 1px;
    height: 70px;
    background-color: rgb(152, 152, 152, 0.5);
    top: -50%;
    right: -2rem;
    display: block;
  }
  margin-right: 3.5rem;
`;

export const FooterDetail = styled.p`
  font-size: 0.5rem;
  letter-spacing: 1px;
  margin-left: 10px;
`;

export const FooterRight = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RWrap = styled.div`
  margin-right: 1rem;
`;

export const Call = styled.p`
  font-size: 0.7rem;
`;

export const Email = styled.p`
  font-size: 0.7rem;
`;

export const B = styled.b`
  font-size: 0.7rem;
  font-weight: 600;
`;

export const RItem = styled.span`
  margin-right: 1rem;
  font-size: 0.6rem;
  font-weight: 600;
`;

export default function LayoutFooter() {
  return (
    <Wrapper>
      <InnerWrapper>
        <FooterLeft>
          <Link href="/market">
            <FooterLogo>
              <img src="/logo/logo1.png" style={{ width: "120px" }} />
            </FooterLogo>
          </Link>
          <hr />
          <div>
            <FooterDetail>상호명:네가 찾는 모든 비건, 네모비</FooterDetail>
            <FooterDetail>
              서울특별시 구로구 디지털로 300(구로동, 지밸리비즈플라자)
            </FooterDetail>
            <FooterDetail>Email:help@nemov.com</FooterDetail>
            <FooterDetail>사업자 등록번호:111-99-33333</FooterDetail>
          </div>
        </FooterLeft>
        <FooterRight>
          <RWrap>
            <Call>
              <B>TEL : </B> 010-0000-0000
            </Call>
            <Email>
              <B>EMAIL : </B> tlsalduszz@gmail.com
            </Email>
          </RWrap>
          <div>
            <RItem>이용약관</RItem>
            <RItem>개인정보취급방침</RItem>
            <RItem>공지사항</RItem>
          </div>
        </FooterRight>
      </InnerWrapper>
    </Wrapper>
  );
}
