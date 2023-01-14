import { useAuth01 } from "../../../src/components/commons/hooks/useAuths/useAuth01";
import MypagePicked from "../../../src/components/units/mypage/pickedProducts/PickedProducts.index";

export default function MypagePickedPage() {
  useAuth01();

  return <MypagePicked />;
}
