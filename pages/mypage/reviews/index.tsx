import { useAuth01 } from "../../../src/components/commons/hooks/useAuths/useAuth01";
import MypageReviews from "../../../src/components/units/mypage/reviews/Reviews.index";

export default function MypageReviewsPage() {
  useAuth01();

  return <MypageReviews />;
}
