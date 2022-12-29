import styled from "@emotion/styled";

export const ContentsMain = styled.section`
  padding: 3% 0;
`;

export const ShoppingLookup = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

export const ManageBtn = styled.button`
  background-color: rgba(38, 90, 65, 0.3);
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
  margin-right: 0.5rem;
  color: #555;
`;

export const MenuSelectWrap = styled.div`
  margin-bottom: 2.5rem;
`;

export const MenuSelect = styled.button`
  border: none;

  background-color: #fff;
  padding: 0.5rem 1rem;
  color: #555;
  margin-right: 1rem;
`;

export const OrderHistory = styled.div``;

export const Date = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
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
  border: 1px solid green;
`;

export const ItemName = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;

export const ItemPrice = styled.p`
  color: #555;
`;

export const ItemNums = styled.p`
  color: #555;
`;

export const ItemStatus = styled.p`
  color: #555;
`;
