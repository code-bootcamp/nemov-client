import styled from "@emotion/styled";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { amazon, pastelGray, white } from "../../../commons/styles/colorPalettes";
import { colorBase03, colorBase04 } from "../../../commons/styles/colorBases";

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
  width: 2.6rem;
  height: 2.6rem;
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
`;

// 찜하기 아이콘 공통 스타일
export const CommonHeartIcon01 = styled(FavoriteBorderIcon)`
  width: 2.8rem;
  height: 2.8rem;
  color: ${amazon};
  border: 1px solid ${pastelGray};
  border-radius: 10px;
  padding: 7px;
  cursor: pointer;
`;
