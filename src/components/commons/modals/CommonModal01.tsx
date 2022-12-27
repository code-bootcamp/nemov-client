import styled from "@emotion/styled";
import { Modal } from "antd";
import { colorBase02 } from "../../../commons/styles/colorBases";

interface IStyledModal01Props {
  isOpen: boolean;
  children: JSX.Element;
  OnToggleModal: () => void;
}

const StyledModal01 = styled(Modal)`
  width: 1000;
  .ant-modal-content {
    ${colorBase02}
    border-radius: 8px;
  }
  .ant-btn {
    display: none;
  }
  .ant-modal-close {
    color: black;
  }
`;

export default function CommonModal01(props: IStyledModal01Props) {
  return (
    <StyledModal01
      open={props.isOpen}
      destroyOnClose={false}
      onCancel={props.OnToggleModal}
    >
      {props.children}
    </StyledModal01>
  );
}
