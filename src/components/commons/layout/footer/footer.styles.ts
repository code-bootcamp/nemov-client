import styled from "@emotion/styled";
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
  flex-direction: column;
  font-size: 0.6rem;
  @media ${mobile} {
    justify-content: flex-start;
  }
`;

export const FooterLogo = styled.span``;

export const LogoImg = styled.img`
  width: 200px;
`;

export const FooterDetail = styled.p`
  font-size: 0.7rem;
`;

export const FooterRight = styled.div`
  @media ${mobile} {
    display: none;
  }
`;

export const RWrap = styled.div`
  display: flex;
  @media ${mobile} {
    flex-direction: row;
  }
`;

export const Call = styled.p`
  width: 100%;
  margin-right: 5%;
  font-size: 1rem;
`;

export const Email = styled.p`
  width: 100%;
  font-size: 1rem;
`;

export const B = styled.b`
  font-size: 1.2rem;
  color: #648d2a;
  ${bold}
`;
