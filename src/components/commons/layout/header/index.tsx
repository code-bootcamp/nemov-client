import Link from "next/link";
import LayoutNav from "./nav";
import * as S from "./LayoutHeader.styles";
import CommonModal01 from "../../modals/CommonModal01";
import { useRecoilState } from "recoil";
import { accessTokenState, isEditState, isOpenState } from "../../../../commons/stores";
import PaymentPage from "../../../units/paymentModal/payment";
import { UseQueryFetchLoginUser } from "../../hooks/useQueries/user/UseQueryFetchLoginUser";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const LOGOUT = gql`
  mutation {
    logout
  }
`;

export default function LayoutHeader() {
  const router = useRouter();
  const { data } = UseQueryFetchLoginUser();
  const [, setIsEdit] = useRecoilState(isEditState);
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  const [logout] = useMutation(LOGOUT);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onClickPayment = () => {
    setIsOpen((prev) => !prev);
    setIsEdit(false);
  };

  const paymentPage = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickLogout = () => {
    void logout();
    location.reload();
    setAccessToken("");
    void router.push("/market");
  };
  return (
    <S.Wrapper>
      <Link href="/market">
        <S.Logo>
          <S.LogoImg src="/logo/logo_.png" />
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
        <Link href={data ? "/mypage/orderlist" : "/login"}>
          <S.HeaderMenuItem>{data ? "MYPAGE" : "LOGIN"}</S.HeaderMenuItem>
        </Link>
        <Link href={data ? "/market" : "/signup"}>
          <S.HeaderMenuItem onClick={data && onClickLogout}>
            {data ? "LOGOUT" : "SIGNUP"}{" "}
          </S.HeaderMenuItem>
        </Link>
      </S.HeaderMenu>
    </S.Wrapper>
  );
}
