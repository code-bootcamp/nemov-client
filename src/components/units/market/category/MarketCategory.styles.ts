import styled from "@emotion/styled";

export const CategoryWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* gap: 20px; */
`;

export const Category = styled.div`
  padding: 1% 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  gap: 0.8rem;
  opacity: 70%;
  :hover {
    opacity: 100%;
    background-color: rgba(153, 153, 153, 0.1);
    transition: 300ms linear;
  }
  cursor: pointer;
`;

export const CategoryTitle = styled.span`
  font-family: "SUIT-SemiBold";
  font-size: 1rem;
`;

export const StyledCategoryIcon = styled.img`
  width: 100%;
`;

export const StyledCategoryIcon02 = styled.img`
  /* background-image: ; */
`;
