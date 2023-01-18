import styled from "@emotion/styled";
import { colorBase01, colorBase02 } from "../../../../commons/styles/colorBases";
import CloseIcon from "@mui/icons-material/Close";
import { mobile, mobile2, tablet } from "../../../../commons/styles/breakPoints";
import * as GS from "../../../../commons/styles/globalStyles";

export const ContentsMain = styled.section`
  padding: 3% 0;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  line-height: 1.4;
  padding-bottom: 20px;

  @media ${mobile} {
    text-align: center;
    padding-bottom: 0;
    margin: 20px 0;
  }
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
  margin-right: 15px;
  appearance: none;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #1f3d31;
  }
`;

export const ItemWrapper = styled.li`
  width: 100%;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px 0;

  @media ${mobile2} {
    flex-direction: column;
  }
`;

export const MobileItemWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const SoldOut = styled.span``;

export const ItemSoldOutDisPlay = styled.div`
  width: 13%;
  left: 20px;
  ${GS.flexCenter}
  position: absolute;
  text-align: center;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  aspect-ratio: 1/1;
  font-size: 1rem;
  color: white;
  :hover ${SoldOut} {
    display: block;
  }
`;

export const MobileBtnWrap = styled.div`
  @media ${mobile2} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 20px;
  }
`;

export const PickBtn = styled.button`
  width: 130px;
  padding: 12px 35px;
  font-size: 1rem;
  text-align: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5vmax;

  @media ${mobile} {
    width: 80px;
    padding: 5px;
  }
  @media ${tablet} {
    width: 75px;
    padding: 5px;
  }
  @media ${mobile2} {
    width: 40%;
    padding: 8px 5px;
  }
`;

export const BasketBtn = styled.button`
  width: 130px;
  padding: 12px 35px;
  font-size: 1rem;
  ${colorBase01}
  border: 1px solid #ddd;
  border-radius: 5vmax;
  color: white;
  margin-top: 10px;

  @media ${mobile} {
    width: 80px;
    padding: 5px 10px;
  }
  @media ${tablet} {
    width: 75px;
    padding: 5px;
  }
  @media ${mobile2} {
    width: 40%;
    padding: 8px 5px;
    margin-top: 0;
  }
`;

export const ItemCheckbox = styled.input`
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  appearance: none;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #1f3d31;
  }
`;

export const CartA = styled.a`
  width: 13%;
  aspect-ratio: 5/5;
  margin: 0 20px;
  cursor: pointer;

  @media ${mobile2} {
    width: 20%;
  }
`;

export const ItemImg = styled.img`
  width: 100%;
  aspect-ratio: 5/5;
`;

export const ItemName = styled.p`
  width: 45%;
  font-size: 1.3rem;
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
  font-size: 1.1rem;
`;

export const DiscountPrice = styled.p`
  text-align: center;
  font-weight: bold;
  margin-bottom: 0;
  font-size: 1.2rem;

  @media ${mobile2} {
    font-size: 1.1rem;
  }
`;

export const DeliveryPrice = styled.p`
  width: 15%;
  text-align: center;
  color: #555;
  margin-bottom: 0;
`;

export const BtnWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;

  @media ${mobile2} {
    width: 100%;
  }
`;

export const QuantityWrapper = styled.div`
  width: 15%;
  padding: 0.7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media ${mobile2} {
    width: 25%;
  }
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

  @media ${mobile} {
    margin: 40px 0;
    flex-direction: column;
  }
`;

export const PriceSection = styled.section`
  @media ${mobile} {
    width: 100%;
    margin: 8px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
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

  @media ${mobile} {
    margin-top: 8px;
  }
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

  @media ${mobile} {
    margin-top: 8px;
  }
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
  font-size: 1rem;
  font-weight: 500;
  padding: 20px 35px;
  font-size: 1.1rem;
  ${colorBase01}
  color: white;
  border-radius: 50px;

  @media ${mobile} {
    width: 98%;
  }
  @media ${mobile2} {
    padding: 14px;
    width: 95%;
  }
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

  @media ${mobile} {
    width: 15px;
    height: 15px;
    line-height: 15px;
    margin: 8px 0;
    display: none;
  }
`;

export const NoBasketText = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin: 40px 0 20px 0;

  @media ${mobile2} {
    text-align: center;
    padding-bottom: 0;
    margin: 20px 0;
  }
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
  font-size: 1rem;
  font-weight: 500;
  padding: 10px 35px;
  font-size: 1rem;
  ${colorBase02}
  border-radius: 50px;
  border: 1px solid #ddd;
  margin: 20px 0;

  @media ${mobile} {
    padding: 10px;
    font-size: 1.2rem;
  }
`;

export const CancelBtn = styled.button`
  padding: 5px 8px;
  background-color: transparent;
  position: absolute;
  right: -6px;
  top: -32px;

  @media ${mobile} {
    right: -3px;
  }
  @media ${mobile2} {
    top: -76px;
    right: 0px;
  }
`;
export const CancelIcon = styled(CloseIcon)`
  font-size: 20px;
`;
