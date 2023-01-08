import styled from "@emotion/styled";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

interface ILayoutMobileMenuStyleProps {
  isOpen: boolean;
}

export const HeaderMenu = styled.section`
  width: 60%;
  height: 100vh;
  padding: 10vmax 5vmax;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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
  width: auto;
  height: auto;
  padding: 5px;
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
  font-size: 1.6rem;
  margin-bottom: 2vmax;
`;

export const UserPoint = styled.p`
  color: #fff;
  text-align: right;
`;

export const HeaderMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  margin-right: 1rem;
  color: #fff;
  cursor: pointer;
`;

export const LoginMenu = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: right;
  color: #fff;
  margin-right: 0;
`;

export const IconMenu = styled.div`
  display: flex;
  justify-content: flex-end;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Menu = styled.span`
  font-size: 2rem;
  margin-bottom: 2vmax;
  cursor: pointer;
  color: #fff;
`;
