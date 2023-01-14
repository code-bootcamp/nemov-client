import { useAuth01 } from "../../../src/components/commons/hooks/useAuths/useAuth01";
import MypageMyinfo from "../../../src/components/units/mypage/myinfo/Myinfo.index";

export default function MypageMyinfoPage() {
  useAuth01();

  return <MypageMyinfo />;
}
