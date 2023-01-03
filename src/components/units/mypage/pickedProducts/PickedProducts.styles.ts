import styled from "@emotion/styled";
import { colorBase01 } from "../../../../commons/styles/colorBases";
import CloseIcon from "@mui/icons-material/Close";

export const ContentsMain = styled.section`
  padding: 3% 0;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  line-height: 1.4;
  padding-bottom: 20px;
`;

export const PickedWrapper = styled.ul`
  width: 100%;
  padding: 1.25rem 0;
`;

export const Date = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const PickedItem = styled.li`
  width: 100%;
  padding: 2%;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const PickedImg = styled.img`
  width: 15%;
  aspect-ratio: 5/5;
  border: 1px solid red;
`;

export const PickedCenterWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const Tags = styled.div`
  width: 10%;
  font-family: "SUIT-Light";
  text-align: center;
  padding: 0.5rem;
  border-radius: 2rem;
  ${colorBase01}
`;

export const PickedName = styled.p`
  font-size: 1.2rem;
  margin: 8px 0;
`;

export const PriceDateWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PickedPrice = styled.p`
  font-weight: bold;
  width: 15%;
  border-right: 1px solid black;
`;

export const PickedDate = styled.p`
  width: 15%;
  text-align: center;
  color: #555;
`;

export const BtnWrapper = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BasketBtn = styled.button`
  min-width: 133px;
  height: 36px;
  padding: 0 35px;
  font-size: 1rem;
  line-height: 34px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 18px;
`;

export const BuyBtn = styled.button`
  min-width: 133px;
  height: 36px;
  padding: 0 35px;
  font-size: 1rem;
  text-align: center;
  line-height: 34px;
  color: white;
  ${colorBase01}
  border: 1px solid #ddd;
  border-radius: 18px;
  margin-top: 10px;
`;

export const IconBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const CancelIcon = styled(CloseIcon)`
  position: absolute;
  right: 0;
  top: -30px;
  font-size: 20px;
  cursor: pointer;
`;

export const NoPickedText = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin-top: 40px;
`;
