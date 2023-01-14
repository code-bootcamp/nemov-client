import styled from "@emotion/styled";
import { mobile } from "../../../../commons/styles/breakPoints";
import { colorBase01, colorBase02 } from "../../../../commons/styles/colorBases";
import { amazon } from "../../../../commons/styles/colorPalettes";

export const ContentsMain = styled.section`
  padding: 3% 1%;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  line-height: 1.4;

  @media ${mobile} {
    text-align: center;
    margin: 20px 0;
  }
`;

export const ShoppingLookup = styled.article`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 2.5rem;

  .ant-picker {
    :hover {
      border-color: #d9d9d9;
      box-shadow: none;
    }

    @media ${mobile} {
      width: 100%;
    }
  }
  .ant-picker-focused {
    border-color: transparent;
    box-shadow: 0 0 0 1px ${amazon};
  }
  .ant-picker-input > input {
    ::placeholder {
    }
    border: none;
  }
  .ant-picker-active-bar {
    background: ${amazon};
  }
  .ant-space-vertical {
    width: 50%;
  }
  @media ${mobile} {
    width: 100%;
  }
`;

export const ManageBtn = styled.button`
  background-color: black;
  color: #fff;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  border: none;
  font-size: 0.9rem;

  @media ${mobile} {
    padding: 1rem 1.5rem;
  }
`;

export const SelectTerm = styled.ul`
  list-style: none;
  display: flex;
`;

export const SelectTermItem = styled.li`
  font-size: 0.9rem;
  color: #555;
  border: 1px solid #eee;
  padding: 14px;
`;

export const MenuSelectWrap = styled.div``;

export const MenuSelect = styled.button`
  border: none;
  background-color: #fff;
  padding: 0.5rem 1rem;
  color: #555;
  margin-right: 1rem;
`;

export const OrderHistory = styled.div`
  margin-top: 10px;
`;

export const Date = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 0.5rem 0;
`;
export const OrderInfo = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ItemImg = styled.img`
  width: 15%;
  aspect-ratio: 5/5;
`;

export const ItemName = styled.p`
  width: 30%;
  font-size: 1.2rem;
  color: #3a3939;
  font-weight: bold;
  margin-bottom: 0;
  text-align: center;
  padding: 0 8px;

  @media ${mobile} {
    font-size: 1.1rem;
  }
`;

export const ItemInfo = styled.p`
  width: 15%;
  text-align: center;
  color: #555;
  margin-bottom: 0;
`;

export const CancelBtn = styled.button`
  width: 80px;
  padding: 12px 8px;
  border-radius: 50px;
  ${colorBase01}

  @media ${mobile} {
    width: 60px;
    padding: 8px 4px;
  }
`;

export const Area = styled.div`
  width: 80px;

  @media ${mobile} {
    width: 60px;
  }
`;

export const NoOrderText = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin-top: 80px;
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

export const SeletctDateWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  .ant-picker {
    :hover {
      border-color: #d9d9d9;
      box-shadow: none;
    }

    @media ${mobile} {
      width: 100%;
    }
  }
  .ant-picker-focused {
    border-color: transparent;
    box-shadow: 0 0 0 1px ${amazon};
  }
  .ant-picker-input > input {
    ::placeholder {
    }
    border: none;
  }
  .ant-picker-active-bar {
    background: ${amazon};
  }
  .ant-space-vertical {
    width: 50%;
  }
  @media ${mobile} {
    width: 100%;
  }
`;
