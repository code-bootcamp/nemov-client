import { SetterOrUpdater, useRecoilState } from "recoil";
import { IQuery } from "../../../../commons/types/generated/types";
import Link from "next/link";
import PaymentPage from "../../../units/paymentModal/payment";
import CommonModal01 from "../../modals/CommonModal01";
import * as S from "./mobileHeader.styles";
import { UseQueryFetchLoginUser } from "../../hooks/useQueries/user/UseQueryFetchLoginUser";
import { Dispatch, SetStateAction } from "react";
import { accessTokenState } from "../../../../commons/stores";

interface ILayoutMobileMenuProps {
  isOpen: boolean;
  data: Pick<IQuery, "fetchLoginUser"> | undefined;
  onClickPayment: () => void;
  onClickLogout: () => Promise<void>;
  setIsOpen: SetterOrUpdater<boolean>;
  paymentPage: () => void;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  onClickSignup: () => void;
}

export default function LayoutMobileMenu(props: ILayoutMobileMenuProps) {
  const { data: userInfo } = UseQueryFetchLoginUser();
  const VeganLevels = ["플랙시테리언", "폴로", "페스코", "락토오보", "오보", "락토", "비건"];
  const [accessToken] = useRecoilState(accessTokenState);

  const {
    isOpen,
    data,
    onClickPayment,
    onClickLogout,
    setIsOpen,
    paymentPage,
    setMenuOpen,
    onClickSignup,
  } = props;

  return (
    <>
      <S.HeaderMenu isOpen={isOpen}>
        <S.LoginMenu>
          {data?.fetchLoginUser.role === "BUYER" ? (
            <Link href={accessToken ? "/mypage/orderlist" : "/login"}>
              <a style={{ cursor: "pointer" }}>
                <S.LoginMenuItemFirst
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  {accessToken ? "MYPAGE" : "LOGIN"}
                </S.LoginMenuItemFirst>
              </a>
            </Link>
          ) : (
            <Link href={accessToken ? "/seller" : "/login"}>
              <a style={{ cursor: "pointer" }}>
                <S.LoginMenuItem
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  {accessToken ? "SELLER" : "LOGIN"}
                </S.LoginMenuItem>
              </a>
            </Link>
          )}
          <a style={{ cursor: "pointer" }}>
            <S.LoginMenuItem onClick={accessToken ? onClickLogout : onClickSignup}>
              {accessToken ? "LOGOUT" : "SIGNUP"}
            </S.LoginMenuItem>
          </a>
        </S.LoginMenu>
        <S.SubTitle>MY</S.SubTitle>
        <S.User>
          {accessToken && props.data ? (
            <>
              <S.UserName>
                {data?.fetchLoginUser.role === "BUYER" && (
                  <S.UserLevel>
                    {VeganLevels[Number(userInfo?.fetchLoginUser.veganLevel) - 1]}
                  </S.UserLevel>
                )}
                {userInfo?.fetchLoginUser.name}님
              </S.UserName>
              <S.UserPoint>포인트 : {userInfo?.fetchLoginUser.point.toLocaleString()}P</S.UserPoint>
              {data?.fetchLoginUser.role === "BUYER" && (
                <S.IconMenu>
                  <S.HeaderIconItemFirst>
                    <S.Payment onClick={onClickPayment} />
                    <S.IconName onClick={onClickPayment}>충전하기</S.IconName>
                    <CommonModal01 isOpen={isOpen} onCancel={paymentPage} width={450}>
                      <PaymentPage setIsOpen={setIsOpen} />
                    </CommonModal01>
                  </S.HeaderIconItemFirst>
                  <Link href="/mypage/basket">
                    <S.HeaderIconItem
                      onClick={() => {
                        setMenuOpen(false);
                      }}
                    >
                      <S.Basket />
                      <S.IconName>장바구니</S.IconName>
                    </S.HeaderIconItem>
                  </Link>
                </S.IconMenu>
              )}
            </>
          ) : (
            <Link href="/login">
              <S.Text
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                로그인해주세요
              </S.Text>
            </Link>
          )}
        </S.User>
        <S.SubTitle>CATEGORY</S.SubTitle>
        <S.NavWrapper>
          <Link href={"/"}>
            <S.Menu
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              ABOUT
            </S.Menu>
          </Link>
          <Link href={`/market/categories`}>
            <S.Menu
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              MARKET
            </S.Menu>
          </Link>
          <Link href={"/magazine"}>
            <S.Menu
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              MAGAZINE
            </S.Menu>
          </Link>
        </S.NavWrapper>
      </S.HeaderMenu>
    </>
  );
}
