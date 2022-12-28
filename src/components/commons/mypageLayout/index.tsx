import { useRecoilState } from "recoil";
import { isSelectedState } from "../../../commons/stores";
import MypageBasket from "../../units/mypage/basket/Basket.index";
import MypageOrderlist from "../../units/mypage/orderlist/Orderlist.index";
import MypagePicked from "../../units/mypage/pickedProducts/PickedProducts.index";
import MypagePoint from "../../units/mypage/point/Point.index";
import MypageReviews from "../../units/mypage/reviews/Reviews.index";
import MypageLayoutHeader from "./header";
import MyPageMenu from "./menu/index";

export default function MypageLayout() {
  const [isSelected] = useRecoilState(isSelectedState);

  return (
    <>
      <MyPageMenu />
      <div style={{ width: "100%" }}>
        <MypageLayoutHeader />
        {isSelected[0] && <MypageOrderlist />}
        {isSelected[1] && <MypageBasket />}
        {isSelected[2] && <MypagePicked />}
        {isSelected[3] && <MypagePoint />}
        {isSelected[4] && <MypageReviews />}
      </div>
    </>
  );
}
