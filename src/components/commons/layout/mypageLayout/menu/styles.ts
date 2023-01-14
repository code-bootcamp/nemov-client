import styled from "@emotion/styled";
import { mobile } from "../../../../../commons/styles/breakPoints";
import { colorBase01 } from "../../../../../commons/styles/colorBases";

export const MyPageMenu = styled.aside`
  width: 30%;
  padding: 3% 3% 3% 0;
  display: flex;
  flex-direction: column;
  @media ${mobile} {
    flex-direction: row;
    justify-content: space-between;
    background: rgba(205, 209, 201, 0.2);
    border-radius: 20px;
    width: 100%;
    padding: 6% 5% 5% 5%;
  }
`;

export const MenuHeader = styled.article`
  width: 100%;
  margin-bottom: 1.4rem;
  @media ${mobile} {
    width: 25%;
  }
  @media screen and (max-width: 374px) {
    width: 30%;
  }
`;

export const Title = styled.h2`
  font-size: 1.7rem;
  font-weight: 100;
  margin-bottom: 2rem;
`;

export const User = styled.p`
  font-size: 1.3rem;
  width: auto;
  display: inline-block;
`;

export const UserVeganLevel = styled.span`
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: #648d2a;
  margin-top: 15px;
  display: inline;
  color: #fff;
  font-size: 0.9rem;
  width: auto;
  text-align: center;

  span {
    display: inline-block;
    width: auto;
    margin: 4% 10px 4% 10px;
  }
`;

export const UserName = styled.span`
  span {
    font-size: 1.5rem;
    font-weight: 800;
    color: #255941;
    display: inline;
  }
`;

export const FirstLine = styled.div`
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  width: auto;
`;

export const MenuContents = styled.article`
  margin: 3rem 0;
  @media ${mobile} {
    display: flex;
    margin: 0;
    padding-left: 2%;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 75%;
  }
  @media screen and (max-width: 374px) {
    justify-content: flex-end;
    width: 70%;
  }
`;

export const MyShoppingInfo = styled.article`
  margin-bottom: 3rem;
  @media ${mobile} {
    margin-bottom: 0;
  }
  @media screen and (max-width: 374px) {
    margin-bottom: 2rem;
    margin-right: 2rem;
  }
`;

export const Options = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
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
  @media ${mobile} {
    margin-bottom: 0;
  }
`;

export const MyInfo = styled.article`
  margin-bottom: 3rem;

  @media ${mobile} {
    margin-bottom: 0;
  }
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
  margin-left: 0.625rem;
  margin-bottom: 1rem;
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
