import styled from "@emotion/styled";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

interface ILayoutMobileMenuStyleProps {
  isOpen: boolean;
}

export const HeaderMenu = styled.section`
  width: 80%;
  height: 100vh;
  padding: 10vmax 0 0 5vmax;
  border-top-left-radius: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #648d2a;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 11;
  overflow-y: scroll;
  transform: ${(props: ILayoutMobileMenuStyleProps) => !props.isOpen ?? "translateX(800px);"};
  transition: transform 1s ease-in-out;
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
  margin-bottom: 3rem;
  padding: 0.8rem 2.2rem;
  border: 1px solid #fff;
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

export const HeaderIconItem = styled.div`
  display: flex;
  align-items: center;
  width: 9rem;
  height: 3rem;
  color: #000;
  cursor: pointer;
  border: 1px solid #000;
  padding: 1% 2%;
  background-color: #fff;
`;

export const IconMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const IconName = styled.span`
  font-size: 1.4rem;
`;

export const Payment = styled(CurrencyExchangeIcon)`
  color: #000;
  cursor: pointer;
  font-size: 1.8rem;
  margin-right: 0.5rem;
`;

export const Basket = styled(ShoppingBagOutlinedIcon)`
  color: #000;
  cursor: pointer;
  font-size: 1.8rem;
  margin-right: 0.5rem;
`;

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Menu = styled.span`
  font-size: 1.8rem;
  margin-bottom: 2.4rem;
  margin-right: 1.2rem;
  cursor: pointer;
  color: #fff;
`;
