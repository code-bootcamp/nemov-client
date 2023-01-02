import styled from "@emotion/styled";
import { mobile } from "../../../../commons/styles/breakPoints";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export const Wrapper = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const Logo = styled.h1`
  width: 120px;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100%;
`;

export const HeaderMenu = styled.section`
  display: flex;
  align-items: center;
  @media ${mobile} {
    display: none;
  }
`;

export const HeaderMenuItem = styled.article`
  width: 100%;
  font-size: 0.9rem;
  margin-left: 1.5rem;
  color: #999;
  cursor: pointer;
`;

export const Basket = styled(ShoppingBagOutlinedIcon)`
  color: #999;
  cursor: pointer;
`;
