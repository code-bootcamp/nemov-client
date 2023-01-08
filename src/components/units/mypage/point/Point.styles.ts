import styled from "@emotion/styled";
import { colorBase01 } from "../../../../commons/styles/colorBases";

export const ContentsMain = styled.section`
  padding: 3% 0;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  line-height: 1.4;
`;

export const TableTop = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 1.25rem 0;
  border-top: 1px solid #555;
  border-bottom: 1px solid #555;
  margin-bottom: 0;
`;

export const TableTopSpan = styled.span`
  width: 50px;
`;

export const TableTopLi = styled.li`
  width: 20%;
  font-weight: bold;
`;

export const TableTopContent = styled.li`
  width: 20%;
  font-weight: bold;
`;

export const TableBottom = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 1.25rem 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 0;
`;

export const TableBottomLi = styled.li`
  width: 20%;
`;

export const SpanDiv = styled.div`
  width: 50px;
`;

export const RefundBtn = styled.button`
  width: 50px;
  padding: 8px;
  border-radius: 50px;
  ${colorBase01}
`;

export const TableBottomContent = styled.li`
  width: 20%;
`;

export const NopointText = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin-top: 40px;
`;

// date-picker
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
  margin-bottom: 0;
`;

export const SelectTermItem = styled.li`
  font-size: 0.9rem;
  color: #555;
  border: 1px solid #eee;
  padding: 14px;
`;
