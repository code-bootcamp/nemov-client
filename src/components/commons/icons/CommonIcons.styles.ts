import styled from "@emotion/styled";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { amazon, pastelGray } from "../../../commons/styles/colorPalettes";
import { colorBase04 } from "../../../commons/styles/colorBases";

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
  ${colorBase04}
  border: none;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  :hover {
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
