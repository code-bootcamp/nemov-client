import styled from "@emotion/styled";

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
  margin-top: 3%;
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
