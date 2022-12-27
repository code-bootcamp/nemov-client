import styled from "@emotion/styled";

export const CategoryWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* gap: 20px; */
`;

export const Category = styled.div`
  padding: 1.2rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  gap: 0.8rem;
  opacity: 30%;
  :hover {
    opacity: 100%;
    background-color: rgba(212, 217, 74, 0.3);
    transition: 300ms linear;
  }
  cursor: pointer;
`;

export const CategoryTitle = styled.span`
  font-family: "SUIT-SemiBold";
  font-size: 1rem;
`;

export const StyledCategoryIcon = styled.object``;
