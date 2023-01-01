import { StyledCommonButton02 } from "./CommonButtons.styles";

interface IOpenModalButton01Props {
  title: string;
  onClick: () => void;
}

export default function OpenModalButton01(props: IOpenModalButton01Props) {
  return (
    <StyledCommonButton02 onClick={props.onClick}>
      {props.title}
    </StyledCommonButton02>
  );
}
