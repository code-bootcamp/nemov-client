import styled from "@emotion/styled";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

interface ILayoutMobileMenuStyleProps {
  isOpen: boolean;
}

export const HeaderMenu = styled.section`
  width: 60%;
  height: 100vh;
  padding: 10vmax 5vmax;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #648d2a;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 11;
  transform: ${(props: ILayoutMobileMenuStyleProps) => !props.isOpen ?? "translateX(800px);"};
  transition: transform 1s ease-in-out;
`;

export const HeaderMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const LoginMenuItem = styled.div`
  font-size: 1.2rem;
  margin-right: 1.3rem;
  margin-bottom: 3vmax;
`;

export const User = styled.div`
  margin-bottom: 3rem;
`;

export const UserLevel = styled.span`
  width: auto;
  height: auto;
  padding: 5px;
  text-align: left;
  border-radius: 5%;
  background: #fff;
  color: #648d2a;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 10px;
`;

export const UserName = styled.h1`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  margin-bottom: 2vmax;
`;

export const UserPoint = styled.p`
  color: #fff;
  font-size: 15px;
  margin-bottom: 3vmax;
`;

export const IconMenu = styled.div`
  display: flex;
`;

export const IconName = styled.span`
  font-size: 10px;
`;

export const Payment = styled(CurrencyExchangeIcon)`
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const Basket = styled(ShoppingBagOutlinedIcon)`
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const NavWrapper = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Menu = styled.span`
  font-size: 2rem;
  margin-bottom: 3vmax;
  cursor: pointer;
  color: #fff;
`;
