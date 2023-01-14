import styled from "@emotion/styled";
import { colorBase01, colorBase02 } from "../../../../commons/styles/colorBases";
import CloseIcon from "@mui/icons-material/Close";
import { mobile, mobile2, tablet } from "../../../../commons/styles/breakPoints";

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
  margin-right: 20px;
`;

export const ItemWrapper = styled.li`
  width: 100%;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;

  @media ${mobile} {
    padding: 30px 0;
  }
`;

export const PickBtn = styled.button`
  width: 130px;
  padding: 10px 35px;
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
    width: 100px;
    padding: 2px;
  }
  @media ${mobile2} {
    width: 50px;
    padding: 5px;
  }
`;

export const BasketBtn = styled.button`
  width: 130px;
  padding: 10px 35px;
  font-size: 1rem;
  ${colorBase01}
  border: 1px solid #ddd;
  border-radius: 5vmax;
  color: white;
  margin-top: 10px;

  @media ${mobile} {
    width: 80px;
    padding: 5px;
  }
  @media ${tablet} {
    width: 100px;
    padding: 2px;
  }
  @media ${mobile2} {
    width: 50px;
    padding: 5px;
  }
`;

export const ItemCheckbox = styled.input`
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
`;

export const ItemImg = styled.img`
  width: 13%;
  aspect-ratio: 5/5;
  margin: 0 20px;
  margin-left: 20px;
`;

export const ItemName = styled.p`
  width: 35%;
  font-size: 1.3rem;
  color: #3a3939;
  font-weight: bold;
  margin-bottom: 0;

  @media ${mobile} {
    width: 25%;
  }
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
`;

export const QuantityWrapper = styled.div`
  width: 15%;
  padding: 1.7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media ${mobile} {
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
    align-items: flex-end;
  }
`;

export const PriceSection = styled.section`
  @media ${mobile} {
    margin: 8px 0;
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
    padding: 14px;
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
  }
`;

export const CancelBtn = styled.button`
  padding: 5px 8px;
  background-color: transparent;
  position: absolute;
  right: -8px;
  top: -33px;

  @media ${mobile} {
    right: -3px;
  }
`;
export const CancelIcon = styled(CloseIcon)`
  font-size: 20px;
`;
