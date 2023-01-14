import { useAuth01 } from "../../../src/components/commons/hooks/useAuths/useAuth01";
import MypageBasket from "../../../src/components/units/mypage/basket/Basket.index";

export default function MypageBasketPage() {
  useAuth01();

  return <MypageBasket />;
}
