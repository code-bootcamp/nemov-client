import styled from "@emotion/styled";
import { mobile } from "../../../../../commons/styles/breakPoints";
import { colorBase01 } from "../../../../../commons/styles/colorBases";

export const MyPageMenu = styled.aside`
  width: 30%;
  padding: 3% 3% 3% 0;
  display: flex;
  flex-direction: column;
  @media ${mobile} {
    display: none;
  }
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
  @media ${mobile} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5%;
    width: 100%;
  }
`;

export const MyShoppingInfo = styled.article`
  margin-bottom: 3rem;
`;

export const Options = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Option = styled.a`
  display: block;
  font-size: 1.2rem;
  margin-left: 0.625rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const MyShoppingList = styled.article`
  margin-bottom: 3rem;
`;

export const MyInfo = styled.article`
  margin-bottom: 3rem;
`;

export const ManageList = styled.article``;

export const ManageBtn = styled.button`
  background-color: rgba(38, 90, 65, 0.3);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  border: none;
  font-size: 0.8rem;
`;

export const ManageOptions = styled.a`
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const DeleteUserBtn = styled.button`
  ${colorBase01}
  padding: 0.5rem 1rem;
  border: none;
  font-size: 0.8rem;
`;

export const HR = styled.hr`
  @media ${mobile} {
    display: none;
  }
`;
