import styled from "@emotion/styled";
import { tablet } from "../../../../commons/styles/breakPoints";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import { Menu } from "./nav";

export const Basket = styled(ShoppingBagOutlinedIcon)`
  color: #fff;
  cursor: pointer;
`;

export const Payment = styled(AddCardOutlinedIcon)`
  color: #fff;
  cursor: pointer;
`;

export const Wrapper = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), transparent);
  transition: background 0.3s ease-in-out;
  :hover {
    background: #fff;
    div,
    ${Menu}, ${Basket}, ${Payment} {
      color: #000;
    }
  }
`;

export const Logo = styled.h1`
  width: 200px;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100%;
`;

export const HeaderMenu = styled.section`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media ${tablet} {
    display: none;
  }
`;

export const HeaderMenuItem = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
  margin-left: 1.5rem;
  color: #fff;
  cursor: pointer;
`;
