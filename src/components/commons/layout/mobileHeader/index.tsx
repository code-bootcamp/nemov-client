import { SetterOrUpdater } from "recoil";
import { IQuery } from "../../../../commons/types/generated/types";
import Link from "next/link";
import PaymentPage from "../../../units/paymentModal/payment";
import CommonModal01 from "../../modals/CommonModal01";
import * as S from "./mobileHeader.styles";
import { UseQueryFetchLoginUser } from "../../hooks/useQueries/user/UseQueryFetchLoginUser";
import { Dispatch, SetStateAction } from "react";

interface ILayoutMobileMenuProps {
  isOpen: boolean;
  data: Pick<IQuery, "fetchLoginUser"> | undefined;
  onClickPayment: () => void;
  onClickLogout: () => Promise<void>;
  setIsOpen: SetterOrUpdater<boolean>;
  paymentPage: () => void;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function LayoutMobileMenu(props: ILayoutMobileMenuProps) {
  const { data: userInfo } = UseQueryFetchLoginUser();
  const VeganLevels = ["플랙시테리언", "폴로", "페스코", "락토오보", "오보", "락토", "비건"];

  const { isOpen, data, onClickPayment, onClickLogout, setIsOpen, paymentPage, setMenuOpen } =
    props;

  return (
    <>
      <S.HeaderMenu isOpen={isOpen}>
        <S.LoginMenu>
          {data?.fetchLoginUser.role === "BUYER" ? (
            <Link href={data ? "/mypage/orderlist" : "/login"}>
              <a style={{ cursor: "pointer" }}>
                <S.LoginMenuItem
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  {data ? "MYPAGE" : "LOGIN"}
                </S.LoginMenuItem>
              </a>
            </Link>
          ) : (
            <Link href={data ? "/seller" : "/login"}>
              <a style={{ cursor: "pointer" }}>
                <S.LoginMenuItem
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  {data ? "SELLER" : "LOGIN"}
                </S.LoginMenuItem>
              </a>
            </Link>
          )}
          <a style={{ cursor: "pointer" }}>
            <Link href={data ? "/market" : "/signup"}>
              <S.LoginMenuItem onClick={data && onClickLogout}>
                {data ? "LOGOUT" : "SIGNUP"}
              </S.LoginMenuItem>
            </Link>
          </a>
        </S.LoginMenu>
        <h4>MY</h4>
        <S.User>
          {props.data ? (
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
                  <S.HeaderIconItem>
                    <S.Payment onClick={onClickPayment} />
                    <S.IconName onClick={onClickPayment}>충전하기</S.IconName>
                    <CommonModal01 isOpen={isOpen} onCancel={paymentPage} width={450}>
                      <PaymentPage setIsOpen={setIsOpen} />
                    </CommonModal01>
                  </S.HeaderIconItem>
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
            <h1>로그인해주세요</h1>
          )}
        </S.User>
        <h4>CATEGORY</h4>
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
        </S.NavWrapper>
      </S.HeaderMenu>
    </>
  );
}
