import styled from "@emotion/styled";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { css, keyframes } from "@emotion/react";
import { tablet } from "../../../../commons/styles/breakPoints";

interface ILayoutMobileMenuStyleProps {
  isOpen: boolean;
}

const hover = css`
  &:hover {
    &::after {
      content: ">";
      color: #fff;
      position: absolute;
      top: 0;
      right: -20px;
    }
    font-weight: 500;
    cursor: pointer;
  }
`;

const SlideLeft = keyframes`
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
  }
`;

export const HeaderMenu = styled.section`
  display: none;
  @media ${tablet} {
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
    right: -100px;
    z-index: 11;
    overflow-y: scroll;
    transform: ${(props: ILayoutMobileMenuStyleProps) => !props.isOpen ?? "translateX(800px);"};
    animation: ${SlideLeft} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;

export const LoginMenu = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: right;
  color: #fff;
  margin-right: 0;
  cursor: pointer;
  margin-bottom: 3rem;
`;

export const LoginMenuItem = styled.p`
  margin: 0;
  font-size: 1.2rem;
  padding: 0.8rem 2.2rem;
  border: 1px solid #fff;
  color: #fff;
`;

export const LoginMenuItemFirst = styled(LoginMenuItem)`
  border-right: none;
`;

export const Text = styled.h1`
  color: #fff;
  position: relative;
  transition: all 0.5s ease-in-out;
  ${hover}
`;

export const SubTitle = styled.h2`
  font-size: 1rem;
  color: #fff;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const User = styled.div`
  margin-bottom: 3rem;
`;

export const UserLevel = styled.span`
  width: auto;
  height: auto;
  padding: 5px;
  text-align: left;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
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
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  width: 100%;
`;

export const HeaderIconItem = styled.p`
  display: flex;
  align-items: center;
  width: 9rem;
  height: 3rem;
  border: 1px solid #fff;
  padding: 1% 2%;
  color: #fff;
  cursor: pointer;
`;

export const HeaderIconItemFirst = styled(HeaderIconItem)`
  border-right: none;
`;

export const IconName = styled.span`
  font-size: 1.4rem;
`;

export const Payment = styled(CurrencyExchangeIcon)`
  color: #fff;
  font-size: 1.8rem;
  margin-right: 0.5rem;
`;

export const Basket = styled(ShoppingBagOutlinedIcon)`
  color: #fff;
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
  margin-bottom: 3rem;
  margin-right: 1.2rem;
  cursor: pointer;
  color: #fff;
`;
