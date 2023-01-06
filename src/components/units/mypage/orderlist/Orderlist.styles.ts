import styled from "@emotion/styled";
import { colorBase01, colorBase02 } from "../../../../commons/styles/colorBases";

export const ContentsMain = styled.section`
  padding: 3% 0;
`;

export const ShoppingLookup = styled.article`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 2.5rem;
`;

export const ManageBtn = styled.button`
  background-color: black;
  color: #fff;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  border: none;
  font-size: 0.8rem;
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
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0;
`;

export const ItemInfo = styled.p`
  color: #555;
  margin-bottom: 0;
`;

export const CancelBtn = styled.button`
  width: 80px;
  padding: 12px 8px;
  border-radius: 50px;
  ${colorBase01}
`;

export const Area = styled.div`
  width: 80px;
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
