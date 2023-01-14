import { useAuth01 } from "../../../src/components/commons/hooks/useAuths/useAuth01";
import MypageOrderlist from "../../../src/components/units/mypage/orderlist/Orderlist.index";

export default function MypageOrderlistPage() {
  useAuth01();

  return <MypageOrderlist />;
}
