import { useAuth01 } from "../../../src/components/commons/hooks/useAuths/useAuth01";
import MypageQna from "../../../src/components/units/mypage/qna/Qna.index";

export default function MypageQnaPage() {
  useAuth01();

  return <MypageQna />;
}
