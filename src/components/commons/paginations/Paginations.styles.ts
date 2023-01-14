import styled from "@emotion/styled";
import { amazon } from "../../../commons/styles/colorPalettes";

interface IPaginationsStylesProps {
  isActive?: boolean;
}

export const PageWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PageLi = styled.div`
  width: 34px;
  height: 34px;
  text-align: center;
  border-width: 1px 1px 1px 0px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-top-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-bottom-color: rgb(221, 221, 221);
  border-image: initial;
  border-left-style: initial;
  border-left-color: initial;
  border-radius: 0;
  color: ${(props: IPaginationsStylesProps) => (props.isActive ? "white" : "black")};
  background-color: ${(props: IPaginationsStylesProps) => (props.isActive ? `${amazon}` : "white")};
  line-height: 30px;
  cursor: pointer;
`;

export const PagePrevBtn = styled.button`
  width: 34px;
  height: 34px;
  border: 1px solid rgba(221, 221, 221);
  background-color: #fff;
  border-radius: 0;
`;

export const PageNextBtn = styled.button`
  width: 34px;
  height: 34px;
  text-align: center;
  background-color: #fff;
  line-height: 30px;
  border-width: 1px 1px 1px 0px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-top-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-bottom-color: rgb(221, 221, 221);
  border-radius: 0;
`;
