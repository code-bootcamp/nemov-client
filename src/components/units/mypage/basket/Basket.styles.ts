import styled from "@emotion/styled";
import { colorBase01, colorBase02 } from "../../../../commons/styles/colorBases";
import CloseIcon from "@mui/icons-material/Close";

export const ContentsMain = styled.section`
  padding: 3% 0;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  line-height: 1.4;
  padding-bottom: 20px;
`;

export const OrderArticle = styled.article`
  padding: 20px 0;
`;

export const ItemUl = styled.ul``;

export const CheckboxWrapper = styled.label`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid black;
`;

export const AllCheckbox = styled.input`
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  margin-right: 20px;
`;

export const ItemWrapper = styled.li`
  width: 100%;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`;

export const PickBtn = styled.button`
  min-width: 130px;
  height: 36px;
  padding: 0 35px;
  font-size: 1rem;
  text-align: center;
  line-height: 34px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5vmax;
`;

export const BasketBtn = styled.button`
  min-width: 130px;
  height: 36px;
  padding: 0 35px;
  font-size: 1rem;
  line-height: 34px;
  ${colorBase01}
  border: 1px solid #ddd;
  border-radius: 5vmax;
  color: white;
  margin-top: 10px;
`;

export const ItemCheckbox = styled.input`
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
`;

export const ItemImg = styled.img`
  width: 10%;
  aspect-ratio: 5/5;
  margin: 0 20px;
  margin-left: 20px;
`;

export const ItemName = styled.p`
  width: 30%;
  font-size: 1.2rem;
  color: #3a3939;
  font-weight: bold;
  margin-bottom: 0;
`;

export const PriceWrap = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`;

export const ItemPrice = styled.p`
  text-align: center;
  text-decoration: line-through;
  margin-bottom: 10px;
`;

export const DiscountPrice = styled.p`
  text-align: center;
  font-weight: bold;
  margin-bottom: 0;
`;

export const DeliveryPrice = styled.p`
  width: 15%;
  text-align: center;
  color: #555;
  margin-bottom: 0;
`;

export const BtnWrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const QuantityWrapper = styled.div`
  width: 15%;
  padding: 1.7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PlusBtn = styled.button`
  width: 28px;
  height: 28px;
  border: 1px solid #ddd;
  background-color: transparent;
  border-radius: 0;
`;

export const MinusBtn = styled.button`
  width: 28px;
  height: 28px;
  border: 1px solid #ddd;
  background-color: transparent;
  border-radius: 0;
`;

export const Quantity = styled.span`
  width: 30px;
  text-align: center;
`;

export const QuantityInput = styled.input`
  width: 30px;
  text-align: center;
  border: 0;
`;

export const NumWrapper = styled.article`
  width: 100%;
  padding: 4rem 1.6rem 0 1.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 80px 0;
  border-top: 1px solid black;
`;

export const Label = styled.label`
  font-size: 1.4rem;
`;

export const Num = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 0;
`;

export const NumSpan = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  color: black;
`;

export const TotalNum = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #255941;
  margin-top: 20px;
  margin-bottom: 0;
`;

export const BottomBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SelectBtn = styled.button`
  min-width: 130px;
  height: 60px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 58px;
  padding: 10px 35px;
  font-size: 1rem;
  line-height: 34px;
  background-color: #fff;
  border: 1px solid #666;
  border-radius: 50px;
  margin-left: 20px;
`;

export const TotalBtn = styled.button`
  min-width: 130px;
  height: 60px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 58px;
  padding: 10px 35px;
  font-size: 1rem;
  line-height: 34px;
  ${colorBase01}
  color: white;
  border-radius: 50px;
  margin-left: 20px;
`;

export const CalculateIcon = styled.div`
  width: 24px;
  height: 24px;
  color: white;
  font-weight: 700;
  background-color: black;
  text-align: center;
  line-height: 25px;
  border-radius: 50%;
`;

export const NoBasketText = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin: 40px 0 20px 0;
`;

export const MoveBtnWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MoveBtn = styled.button`
  min-width: 130px;
  height: 60px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 58px;
  padding: 10px 35px;
  font-size: 1rem;
  line-height: 34px;
  ${colorBase02}
  border-radius: 50px;
  border: 1px solid #ddd;
`;

export const CancelBtn = styled.button`
  padding: 5px 8px;
  background-color: transparent;
`;
export const CancelIcon = styled(CloseIcon)`
  font-size: 20px;
`;
