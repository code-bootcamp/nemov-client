import styled from "@emotion/styled";
import { colorBase01, colorBase03 } from "../../../../commons/styles/colorBases";
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

export const PickedA = styled.a`
  width: 15%;
  aspect-ratio: 5/5;
  cursor: pointer;

  @media ${mobile2} {
    width: 20%;
  }
`;

export const PickedImg = styled.img`
  width: 100%;
  aspect-ratio: 5/5;
`;

export const PickedCenterWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  @media ${mobile2} {
    width: 50%;
    padding: 8px 0;
  }
`;

export const TagsWrap = styled.div`
  margin-bottom: 10px;

  @media ${mobile2} {
    margin-bottom: 0;
  }
`;

export const Tags = styled.span`
  text-align: center;
  padding: 0.4rem 0.7rem;
  border-radius: 2rem;
  ${colorBase03}

  @media ${mobile2} {
    width: 50%;
  }
`;

export const PickedName = styled.p`
  font-size: 1.3rem;
  margin: 8px 0;
`;

export const PriceDateWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PickedPrice = styled.p`
  font-weight: bold;
  width: 20%;
  font-size: 1.2rem;
  margin-bottom: 0;

  @media ${mobile2} {
    width: 30%;
  }
`;

export const PickedDate = styled.p`
  width: 15%;
  text-align: center;
  margin-left: 10px;
  color: #555;
`;

export const BtnWrapper = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const BasketBtn = styled.button`
  width: 133px;
  padding: 13px;
  font-size: 1rem;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 50px;
  margin-top: 10px;

  @media ${mobile} {
    width: 80px;
  }
  @media ${tablet} {
    width: 80px;
  }
  @media ${mobile2} {
    width: 60px;
    margin-right: 10px;
    padding: 8px;
  }
`;

export const BuyBtn = styled.button`
  width: 133px;
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

  @media ${mobile2} {
    width: 70px;
    margin-right: 10px;
  }
`;

export const CancelBtn = styled.button`
  position: absolute;
  padding: 5px 8px;
  background-color: transparent;
  right: -4px;
  top: -40px;

  @media ${mobile} {
    top: -25px;
  }
  @media ${tablet} {
    top: -30px;
  }
  @media ${mobile2} {
    top: -25px;
  }
`;
export const CancelIcon = styled(CloseIcon)`
  right: 0;
  top: -20px;
  font-size: 20px;
  cursor: pointer;
`;

export const NoPickedText = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin-top: 40px;
`;
