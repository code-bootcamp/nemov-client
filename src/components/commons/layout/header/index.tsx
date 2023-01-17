import Link from "next/link";
import LayoutNav from "./nav";
import * as S from "./LayoutHeader.styles";
import CommonModal01 from "../../modals/CommonModal01";
import { useRecoilState } from "recoil";
import { accessTokenState, isEditState } from "../../../../commons/stores";
import PaymentPage from "../../../units/paymentModal/payment";
import {
  FETCH_LOGIN_USER,
  UseQueryFetchLoginUser,
} from "../../hooks/useQueries/user/UseQueryFetchLoginUser";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import LayoutMobileMenu from "../mobileHeader";
import { useState } from "react";
import { UseQueryFetchCartCount } from "../../hooks/useQueries/product/UseQueryFetchCartCount";
import { Modal } from "antd";

const LOGOUT = gql`
  mutation {
    logout
  }
`;

interface ILayoutHeaderProps {
  isShowBanner: boolean;
}

export default function LayoutHeader(props: ILayoutHeaderProps) {
  const router = useRouter();
  const { data } = UseQueryFetchLoginUser();
  const { data: cartCountData } = UseQueryFetchCartCount();
  const [, setIsEdit] = useRecoilState(isEditState);
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logout] = useMutation(LOGOUT, { refetchQueries: [FETCH_LOGIN_USER] });
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const onClickPayment = () => {
    setIsOpen((prev) => !prev);
    setIsEdit(false);
    setMenuOpen(false);
  };

  const paymentPage = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickLogout = async () => {
    try {
      await logout();
      void router.push("/market");
      setAccessToken("");
      setMenuOpen(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const onClickSignup = () => {
    void router.push("/signup");
    setMenuOpen(false);
  };
  return (
    <>
      {props.isShowBanner ? (
        <S.Wrapper>
          <Link href="/market">
            <S.Logo>
              <S.LogoImg src="/logo/logo_.png" alt="마켓 메인 페이지로 이동" />
            </S.Logo>
          </Link>
          <S.LayoutNavWrap>
            <LayoutNav />
          </S.LayoutNavWrap>
          <>
            <S.MobileMenu onClick={onClickMenuToggle}>
              <S.Line1 ismenuOpen={menuOpen}></S.Line1>
              <S.Line2 ismenuOpen={menuOpen}></S.Line2>
              <S.Line3 ismenuOpen={menuOpen}></S.Line3>
            </S.MobileMenu>
            {menuOpen && (
              <LayoutMobileMenu
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                data={data}
                onClickPayment={onClickPayment}
                paymentPage={paymentPage}
                onClickLogout={onClickLogout}
                setMenuOpen={setMenuOpen}
                onClickSignup={onClickSignup}
              />
            )}
          </>
          <S.HeaderMenu>
            {accessToken ? (
              <>
                {data?.fetchLoginUser.role === "BUYER" && (
                  <>
                    <S.HeaderMenuItem isShowBanner={props.isShowBanner}>
                      <S.Payment onClick={onClickPayment} />
                      <CommonModal01 isOpen={isOpen} onCancel={paymentPage} width={450}>
                        <PaymentPage setIsOpen={setIsOpen} data={data} />
                      </CommonModal01>
                    </S.HeaderMenuItem>
                    <Link href="/mypage/basket">
                      <S.HeaderMenuItem isShowBanner={props.isShowBanner}>
                        {cartCountData && (
                          <S.BasketCount>{cartCountData?.fetchCartCount}</S.BasketCount>
                        )}
                        <S.Basket />
                      </S.HeaderMenuItem>
                    </Link>
                  </>
                )}
              </>
            ) : (
              <></>
            )}

            {data?.fetchLoginUser.role === "BUYER" ? (
              <Link href={accessToken ? "/mypage/orderlist" : "/login"}>
                <S.HeaderMenuItem isShowBanner={props.isShowBanner}>
                  {accessToken ? "MYPAGE" : "LOGIN"}
                </S.HeaderMenuItem>
              </Link>
            ) : (
              <Link href={accessToken ? "/seller" : "/login"}>
                <S.HeaderMenuItem isShowBanner={props.isShowBanner}>
                  {accessToken ? "SELLER" : "LOGIN"}
                </S.HeaderMenuItem>
              </Link>
            )}
            <S.HeaderMenuItem
              onClick={accessToken ? onClickLogout : onClickSignup}
              isShowBanner={props.isShowBanner}
            >
              {accessToken ? "LOGOUT" : "SIGNUP"}
            </S.HeaderMenuItem>
          </S.HeaderMenu>
        </S.Wrapper>
      ) : (
        <S.Wrapper02>
          <Link href="/market">
            <S.Logo>
              <S.LogoImg src="/logo/logo_.png" alt="마켓 메인 페이지로 이동" />
            </S.Logo>
          </Link>
          <S.LayoutNavWrap>
            <LayoutNav />
          </S.LayoutNavWrap>
          <>
            <S.MobileMenu onClick={onClickMenuToggle}>
              <S.Line1 ismenuOpen={menuOpen}></S.Line1>
              <S.Line2 ismenuOpen={menuOpen}></S.Line2>
              <S.Line3 ismenuOpen={menuOpen}></S.Line3>
            </S.MobileMenu>
            {menuOpen && (
              <LayoutMobileMenu
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                data={data}
                onClickPayment={onClickPayment}
                paymentPage={paymentPage}
                onClickLogout={onClickLogout}
                setMenuOpen={setMenuOpen}
                onClickSignup={onClickSignup}
              />
            )}
          </>
          <S.HeaderMenu>
            {accessToken ? (
              <>
                {data?.fetchLoginUser.role === "BUYER" && (
                  <>
                    <S.HeaderMenuItem isShowBanner={props.isShowBanner}>
                      <S.Payment onClick={onClickPayment} />
                      <CommonModal01 isOpen={isOpen} onCancel={paymentPage} width={450}>
                        <PaymentPage setIsOpen={setIsOpen} data={data} />
                      </CommonModal01>
                    </S.HeaderMenuItem>
                    <Link href="/mypage/basket">
                      <S.HeaderMenuItem isShowBanner={props.isShowBanner}>
                        {cartCountData && (
                          <S.BasketCount>{cartCountData?.fetchCartCount}</S.BasketCount>
                        )}
                        <S.Basket />
                      </S.HeaderMenuItem>
                    </Link>
                  </>
                )}
              </>
            ) : (
              <></>
            )}

            {data?.fetchLoginUser.role === "BUYER" ? (
              <Link href={accessToken ? "/mypage/orderlist" : "/login"}>
                <S.HeaderMenuItem isShowBanner={props.isShowBanner}>
                  {accessToken ? "MYPAGE" : "LOGIN"}
                </S.HeaderMenuItem>
              </Link>
            ) : (
              <Link href={accessToken ? "/seller" : "/login"}>
                <S.HeaderMenuItem isShowBanner={props.isShowBanner}>
                  {accessToken ? "SELLER" : "LOGIN"}
                </S.HeaderMenuItem>
              </Link>
            )}
            <S.HeaderMenuItem
              onClick={accessToken ? onClickLogout : onClickSignup}
              isShowBanner={props.isShowBanner}
            >
              {accessToken ? "LOGOUT" : "SIGNUP"}{" "}
            </S.HeaderMenuItem>
          </S.HeaderMenu>
        </S.Wrapper02>
      )}
    </>
  );
}
