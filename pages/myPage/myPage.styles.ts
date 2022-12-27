import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  padding: 100px 0;
`;

export const MyPageMenu = styled.aside`
  width: 30%;
  padding: 3%;
  display: flex;
  flex-direction: column;
`;

export const MenuHeader = styled.article`
  margin-bottom: 3rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 100;
  margin-bottom: 2.5rem;
`;

export const User = styled.p`
  font-size: 1.5rem;
`;

export const UserName = styled.span`
  font-size: 1.8rem;
  font-weight: 800;
  color: #255941;
`;

export const MenuContents = styled.article`
  margin: 3rem 0;
`;

export const MyShoppingInfo = styled.article`
  margin-bottom: 3rem;
`;

export const Options = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Option = styled.p`
  font-size: 1.2rem;
  margin-left: 0.625rem;
  margin-bottom: 1rem;
`;

export const MyShoppingList = styled.article``;

export const Management = styled.div``;

export const ManageBtn = styled.button`
  background-color: rgba(38, 90, 65, 0.3);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  border: none;
  font-size: 0.8rem;
`;

// ===============
export const MyPageContents = styled.section`
  width: 70%;
  padding: 3%;
`;

export const ContentsHeader = styled.header`
  width: 100%;
  height: 180px;
  border: 1px solid rgba(38, 90, 65, 0.5);
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  padding: 4% 6%;
  margin-bottom: 10px;
`;

export const HeaderItem = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  justify-content: space-evenly;
  align-items: center;
`;

export const ItemTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 100;
  color: #555;
`;

export const ItemValue = styled.strong`
  color: rgba(38, 90, 65, 0.7);
  font-size: 2rem;
  font-weight: 600;
  margin-right: 2px;
`;

export const ContentsMain = styled.section`
  padding: 3% 0;
`;

export const ShoppingLookup = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
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
  height: 150px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-radius: 3px;
`;
