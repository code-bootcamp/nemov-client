import styled from "@emotion/styled";
import { tablet } from "../../../../commons/styles/breakPoints";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import { Menu } from "./nav";

interface ILayoutMobileMenuStyleProps {
  ismenuOpen: boolean;
}

export const Basket = styled(ShoppingBagOutlinedIcon)`
  color: #fff;
  cursor: pointer;
`;

export const Payment = styled(AddCardOutlinedIcon)`
  color: #fff;
  cursor: pointer;
`;

export const Logo = styled.h1`
  width: 200px;
  cursor: pointer;
  margin: 0;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
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
    ${LogoImg} {
      content: url("/logo/logo_hover.png");
    }
  }
  @media ${tablet} {
    padding: 1rem;
    :hover {
      div,
      ${Menu}, ${Basket}, ${Payment} {
        color: #fff;
      }
    }
  }
`;

export const LayoutNavWrap = styled.div`
  @media ${tablet} {
    display: none;
  }
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

// mobile

export const MobileMenu = styled.nav`
  display: none;
  @media ${tablet} {
    position: absolute;
    top: 36px;
    right: 25px;
    z-index: 99;
    display: block;
    height: 26px;
    width: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    cursor: pointer;
  }
`;

const Line = styled.span`
  display: block;
  height: 3px;
  width: 100%;
  border-radius: 10px;
  background: #000;
`;

export const Line1 = styled(Line)`
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
  transform: ${(props: ILayoutMobileMenuStyleProps) =>
    props.ismenuOpen ? "rotate(45deg)" : "rotate(0deg)"};
  background-color: ${(props: ILayoutMobileMenuStyleProps) => (props.ismenuOpen ? "#fff" : "#000")};
`;

export const Line2 = styled(Line)`
  transition: transform 0.2s ease-in-out;
  width: 80%;
  transform: ${(props: ILayoutMobileMenuStyleProps) =>
    props.ismenuOpen ? "scaleY(0)" : "scaleY(1)"};
  background-color: ${(props: ILayoutMobileMenuStyleProps) => (props.ismenuOpen ? "#fff" : "#000")};
`;

export const Line3 = styled(Line)`
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
  transform: ${(props: ILayoutMobileMenuStyleProps) =>
    props.ismenuOpen ? "rotate(-45deg)" : "rotate(0deg)"};
  background-color: ${(props: ILayoutMobileMenuStyleProps) => (props.ismenuOpen ? "#fff" : "#000")};
`;
