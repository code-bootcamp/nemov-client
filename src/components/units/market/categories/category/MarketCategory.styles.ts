import styled from "@emotion/styled";

export const CategoryWrapper = styled.section`
  width: 50%;
  display: flex;
  flex-direction: row;
  padding-top: 2rem;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  gap: 0.2rem;
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
  margin-bottom: 1rem;
`;

export const StyledCategoryIcon = styled.img`
  width: 80%;
`;

export const StyledCategoryIcon02 = styled.img`
  /* background-image: ; */
`;
