import { CommonBasketIcon02 } from "./CommonIcons.styles";

interface IBasketButton01Props {
  isActive?: boolean;
  id?: string;
  setIsActive?: (id: string) => void;
  onClick: (e: React.MouseEvent) => void;
}

export default function BasketButton01(props: IBasketButton01Props) {
  return <CommonBasketIcon02 isActive={props.isActive} onClick={props.onClick} />;
}
