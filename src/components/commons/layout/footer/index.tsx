import styled from "@emotion/styled";

export const Wrapper = styled.footer`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  border-top: 1px solid #ddd;
`;

export const InnerWrapper = styled.footer`
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.5rem;
`;

export const RWrap = styled.div`
  margin-right: 1rem;
`;

export const Call = styled.p`
  font-size: 0.6rem;
`;

export const Email = styled.p`
  font-size: 0.6rem;
`;

export const B = styled.b`
  font-size: 0.6rem;
  font-weight: 600;
`;

export const FooterDetail = styled.p`
  font-size: 0.5rem;
  letter-spacing: 1px;
`;

export const FooterLeft = styled.div``;

export const LItem = styled.span`
  margin-left: 1rem;
  font-size: 0.5rem;
  font-weight: 600;
`;

export default function LayoutFooter() {
  return (
    <Wrapper>
      <InnerWrapper>
        <FooterRight>
          <RWrap>
            <Call>
              <B>TEL : </B> 010-0000-0000
            </Call>
            <Email>
              <B>EMAIL : </B> tlsalduszz@gmail.com
            </Email>
          </RWrap>
          <hr style={{ marginRight: "1rem" }} />
          <div>
            <FooterDetail>상호명:네가 찾는 모든 비건, 네모비</FooterDetail>
            <FooterDetail>
              서울특별시 구로구 디지털로 300(구로동, 지밸리비즈플라자)
            </FooterDetail>
            <FooterDetail>Email:help@nemov.com</FooterDetail>
            <FooterDetail>사업자 등록번호:111-99-33333</FooterDetail>
          </div>
        </FooterRight>
        <FooterLeft>
          <LItem>이용약관</LItem>
          <LItem>개인정보취급방침</LItem>
          <LItem>공지사항</LItem>
        </FooterLeft>
      </InnerWrapper>
    </Wrapper>
  );
}
