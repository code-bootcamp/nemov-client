import styled from "@emotion/styled";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

interface ILayoutMobileMenuStyleProps {
  isOpen: boolean;
}

export const HeaderMenu = styled.section`
  width: 60%;
  height: 100vh;
  padding: 100px 0 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  background-color: #648d2a;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 11;
  transform: ${(props: ILayoutMobileMenuStyleProps) => !props.isOpen ?? "translateX(800px);"};
  transition: transform 1s ease-in-out;
`;

export const User = styled.div`
  padding: 2rem;
  border: 1px solid #fff;
  margin-bottom: 2rem;
`;

export const UserLevel = styled.span`
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  background: #fff;
  color: #648d2a;
  font-size: 1rem;
  font-weight: 900;
  margin-right: 10px;
`;

export const UserName = styled.h1`
  display: flex;
  align-items: center;
  color: #fff;
`;

export const UserPoint = styled.p`
  color: #fff;
  text-align: right;
`;

export const HeaderMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #fff;
  cursor: pointer;
  margin-right: 1rem;
`;

export const LoginMenu = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
  text-align: right;
`;

export const Payment = styled(AddCardOutlinedIcon)`
  color: #fff;
  cursor: pointer;
`;

export const Basket = styled(ShoppingBagOutlinedIcon)`
  color: #fff;
  cursor: pointer;
`;

export const NavWrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Menu = styled.span`
  font-size: 2rem;
  margin-bottom: 2vmax;
  cursor: pointer;
  color: #fff;
`;
