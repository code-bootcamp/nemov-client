import styled from "@emotion/styled";

export const PageLine = styled.div`
  position: absolute;
  top: 467px;
  z-index: -1;
  width: 100%;
  height: 400px;
  background-color: #255941;
`;

export const InnerWrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

export const MarketMainSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ItemsWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 1rem;
  gap: 30px;
`;

export const ItemDisplay = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 20px;
  background-color: white;
  /* border: 1px solid black; */
  border-radius: 8px;
  gap: 20px;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 18rem;
  background-color: gray;
  border: 1px solid blue;
`;

export const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ItemName = styled.span`
  font-size: 1.25rem;
`;

export const ItemDetailFooter = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemSaledPrice = styled.span`
  font-size: 1rem;
`;

export const ItemOriginPrice = styled.span`
  color: gray;
  font-size: 0.7rem;
  text-decoration: line-through;
`;

export const ItemPrices = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const MarketMainSectionHeader = styled.header`
  font-size: 1.5rem;
  border-bottom: 2px solid black;
  padding-bottom: 1rem;
`;

export const StyledBasketIcon = styled.object`
  cursor: pointer;
`;

export const IconWrappedCircle = styled.div`
  padding: 10px;
  border: none;
  border-radius: 50px;
  :hover {
    background-color: rgba(212, 217, 74, 0.3);
    transition: 300ms linear;
    cursor: pointer;
  }
  cursor: pointer;
`;
