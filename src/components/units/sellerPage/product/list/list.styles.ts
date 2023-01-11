import styled from "@emotion/styled";
// import { css } from "@emotion/react";
// import { mobile } from "../../../../commons/styles/breakPoints";

export const Title = styled.h1`
  text-align: center;
  margin: 2rem;
  font-size: 1.4rem;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  float: left;
  margin: 0 0 2rem;
`;

export const Thead = styled.thead`
  border-bottom: 3px solid #008cba;
`;

export const Th = styled.th`
  padding: 0.35rem 0 0.35rem;
  font-weight: 400;
  font-size: 1.2rem;
  text-align: center;
`;

export const Tbody = styled.tbody`
  border-bottom: 3px solid #008cba;
`;

export const Tr = styled.tr`
  border-bottom: 2px solid #ddd;
`;

export const Td = styled.td`
  padding: 0.75rem 0;
  text-align: center;
`;

export const Btn1 = styled.button`
  width: 4vmax;
  height: 2vmax;
  font-size: 0.9rem;
  :hover {
    background-color: #999;
    color: #fff;
  }
`;

export const Btn2 = styled.button`
  width: 15vmax;
  font-size: 1rem;
  padding: 2%;
  :hover {
    background-color: #999;
    color: #fff;
  }
`;
