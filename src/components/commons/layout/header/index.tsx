import Link from "next/link";
import LayoutNav from "./nav";
import * as S from "./LayoutHeader.styles";
import CommonModal01 from "../../modals/CommonModal01";
import { useRecoilState } from "recoil";
import { isEditState, isOpenState } from "../../../../commons/stores";
import PaymentPage from "../../../units/paymentModal/payment";
import { UseQueryFetchLoginUser } from "../../hooks/useQueries/user/UseQueryFetchLoginUser";

export default function LayoutHeader() {
  const { data } = UseQueryFetchLoginUser();
  const [, setIsEdit] = useRecoilState(isEditState);
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  console.log(data);

  const onClickPayment = () => {
    setIsOpen((prev) => !prev);
    setIsEdit(false);
  };

  const paymentPage = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.Wrapper>
      <Link href="/market">
        <S.Logo>
          <S.LogoImg src="/logo/logo-01.png" />
        </S.Logo>
      </Link>
      <LayoutNav />
      <S.HeaderMenu>
        {data && (
          <>
            <S.HeaderMenuItem>
              <S.Payment onClick={onClickPayment} />
              <CommonModal01 isOpen={isOpen} onCancel={paymentPage} width={400}>
                <PaymentPage setIsOpen={setIsOpen} />
              </CommonModal01>
            </S.HeaderMenuItem>
            <Link href="/mypage/basket">
              <S.HeaderMenuItem>
                <S.Basket />
              </S.HeaderMenuItem>
            </Link>
          </>
        )}
        <Link href={data ? "/mypage" : "/login"}>
          <S.HeaderMenuItem>{data ? "MYPAGE" : "LOGIN"}</S.HeaderMenuItem>
        </Link>
        <Link href={data ? "market" : "/signup"}>
          <S.HeaderMenuItem>{data ? "LOGOUT" : "SIGNUP"} </S.HeaderMenuItem>
        </Link>
      </S.HeaderMenu>
    </S.Wrapper>
  );
}
