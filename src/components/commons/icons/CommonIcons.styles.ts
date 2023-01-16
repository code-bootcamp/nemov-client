import styled from "@emotion/styled";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { amazon, pastelGray, white } from "../../../commons/styles/colorPalettes";
import { colorBase03, colorBase04 } from "../../../commons/styles/colorBases";
import { mobile, tablet } from "../../../commons/styles/breakPoints";

interface ICommonBasketIconProps {
  isActive?: boolean;
}

// 장바구니 아이콘 공통 스타일
export const CommonBasketIcon01 = styled(ShoppingBagIcon)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export const CommonBasketIcon02 = styled(ShoppingBagOutlinedIcon)`
  position: absolute;
  bottom: 2%;
  right: 2%;
  font-size: 3rem;
  padding: 7px;
  color: ${(props: ICommonBasketIconProps) => (!props.isActive ? `${amazon}` : `${white}`)};
  background-color: ${(props: ICommonBasketIconProps) =>
    !props.isActive ? `${white}` : `${amazon}`};
  border: none;
  border-radius: 50%;
  :hover {
    transition: all 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  }
  cursor: pointer;

  @media ${tablet} {
    font-size: 3.5rem;
    position: absolute;
    bottom: 5%;
    right: 0%;
  }
  @media ${mobile} {
    font-size: 4rem;
  }
`;

export const CommonBasketIcon03 = styled(ShoppingBagOutlinedIcon)`
  font-size: 2.5rem;
  padding: 0.3rem;
  border-radius: 50%;
  ${colorBase04}
  :hover {
    transition: all 0.5s ease-in-out;
    ${colorBase03}
  }
  cursor: pointer;

  @media ${mobile} {
    font-size: 3rem;
  }
`;

export const CommonBasketIcon04 = styled(ShoppingBagOutlinedIcon)`
  font-size: 2.5rem;
  padding: 0.3rem;
  border-radius: 50%;
  ${colorBase04}
  :hover {
    transition: all 0.5s ease-in-out;
    ${colorBase03}
  }
  cursor: pointer;
  @media ${tablet} {
    font-size: 3rem;
  }
`;

// 찜하기 아이콘 공통 스타일
export const CommonHeartIcon01 = styled(FavoriteBorderIcon)`
  font-size: 3rem;
  color: ${amazon};
  border: 1px solid ${pastelGray};
  border-radius: 10px;
  padding: 7px;
  cursor: pointer;
  @media ${tablet} {
    font-size: 3.5rem;
  }
  @media ${mobile} {
    font-size: 5rem;
  }
`;

export const CommonHeartIcon02 = styled(FavoriteIcon)`
  font-size: 3rem;
  color: ${amazon};
  border: 1px solid ${pastelGray};
  border-radius: 10px;
  padding: 7px;
  cursor: pointer;
  @media ${tablet} {
    font-size: 3.5rem;
  }
  @media ${mobile} {
    font-size: 5rem;
  }
`;
