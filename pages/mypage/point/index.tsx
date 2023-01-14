import { useAuth01 } from "../../../src/components/commons/hooks/useAuths/useAuth01";
import MypagePoint from "../../../src/components/units/mypage/point/Point.index";

export default function MypagePointPage() {
  useAuth01();

  return <MypagePoint />;
}
