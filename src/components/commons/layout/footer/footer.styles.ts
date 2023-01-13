import styled from "@emotion/styled";
import { mobile, tablet } from "../../../../commons/styles/breakPoints";
import { bold, GlobalWrapper } from "../../../../commons/styles/globalStyles";

export const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fefefe;
  @media ${mobile} {
    height: auto;
  }
`;

export const InnerWrapper = styled(GlobalWrapper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2% 0;
  @media ${tablet} {
    padding: 3%;
  }
  @media ${mobile} {
    padding: 3% 10%;
  }
`;

export const InnerWrapper1 = styled(InnerWrapper)`
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  @media ${tablet} {
    padding: 0 3%;
  }
  @media ${mobile} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
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

export const RItem = styled.span`
  margin: 0 1.5rem 0 0;
  font-size: 0.7rem;
  font-weight: 600;
  height: 40px;
  cursor: pointer;
  @media ${mobile} {
    margin: 0 1.5rem 0 2rem;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.6rem;
  width: 50%;
  @media ${mobile} {
    width: 100%;
  }
`;

export const FooterLogo = styled.span``;

export const FooterDetail = styled.p`
  color: #999;
  font-size: 0.6rem;
  line-height: 0.8;
`;

export const FooterRight = styled.div`
  @media ${mobile} {
    display: none;
  }
`;

export const LogoImg = styled.img`
  width: 200px;
`;

export const RWrap = styled.div`
  display: flex;
  width: 100%;
  @media ${mobile} {
    flex-direction: row;
  }
`;

export const Call = styled.p`
  width: 25%;
  font-size: 0.8rem;
  color: #555;
  @media ${mobile} {
    margin-right: 1%;
  }
`;

export const Email = styled.p`
  font-size: 0.8rem;
  color: #555;
  @media ${mobile} {
    margin-right: 1%;
  }
`;

export const B = styled.b`
  font-size: 0.8rem;
  color: #444;
  ${bold}
`;
