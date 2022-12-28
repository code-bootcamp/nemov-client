import styled from "@emotion/styled";

export const ContentsMain = styled.section`
  padding: 3% 0;
`;

export const OrderHistory = styled.div``;

export const CheckboxWrapper = styled.label`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AllCheckbox = styled.input`
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableHeaderTr = styled.tr`
  padding: 1.2rem;
  border-bottom: 1px solid #ddd;
  height: 1.2rem;
`;

export const TableHeaderTitle = styled.th`
  width: 40%;
`;

export const TableHeaderBasic = styled.th`
  width: 15%;
`;

export const TableBodyTitle = styled.td`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TableBodyBasic = styled.td`
  width: 15%;
  text-align: center;
  color: #555;
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
  border-radius: 18px;
`;

export const BasketBtn = styled.button`
  min-width: 130px;
  height: 36px;
  padding: 0 35px;
  font-size: 1rem;
  text-align: center;
  line-height: 34px;
  background-color: #255941;
  border: 1px solid #ddd;
  border-radius: 18px;
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
  width: 40%;
  aspect-ratio: 5/5;
  border: 1px solid green;
  margin: 0 20px;
  margin-left: 90px;
`;

export const ItemName = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;

export const PlusBtn = styled.button`
  border: none;
  background-color: transparent;
`;

export const MinusBtn = styled.button`
  border: none;
  background-color: transparent;
`;

export const QuantityWrapper = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
