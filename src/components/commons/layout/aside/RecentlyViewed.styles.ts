import styled from "@emotion/styled";
import { tablet } from "../../../../commons/styles/breakPoints";

export const SideBarWrap = styled.main`
  position: fixed;
  top: 40%;
  right: 0;
  width: 150px;
  padding: 2%;
  background-color: #fff;
  outline: none;
  border: none;
  transition: background-color 0.2s;
  box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%),
    0 9px 28px 8px rgb(0 0 0 / 5%);

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${tablet} {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const Contents = styled.section`
  article {
    width: 90px;
    height: 90px;
    background-color: #999;
    margin-bottom: 3px;
  }
`;
