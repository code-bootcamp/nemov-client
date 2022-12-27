import styled from "@emotion/styled";
import { colorBase01 } from "../../../commons/styles/colorBases";

interface IOpenModalButton01Props {
  title: string;
  onClick: () => void;
}

const StyledButton01 = styled.button`
  display: flex;
  justify-content: center;
  padding: 20px 50px;
  font-weight: 700;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  ${colorBase01}
`;

export default function OpenModalButton01(props: IOpenModalButton01Props) {
  return <StyledButton01 onClick={props.onClick}>{props.title}</StyledButton01>;
}
