import React from "react";
import { MinusBtn, PlusBtn } from "./CommonButtons.styles";

interface ICountDownUpButtonsProps {
  disabled?: boolean;
  type?: string;
  onClick: (e: React.MouseEvent) => void;
}

export const CountDownBtn = (props: ICountDownUpButtonsProps) => {
  return (
    <MinusBtn disabled={props.disabled} onClick={props.onClick}>
      -
    </MinusBtn>
  );
};

export const CountUpBtn = (props: ICountDownUpButtonsProps) => {
  return (
    <PlusBtn disabled={props.disabled} onClick={props.onClick}>
      +
    </PlusBtn>
  );
};
