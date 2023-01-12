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

  return (
    <>
      <S.HeaderMenu isOpen={props.isOpen}>
        <S.LoginMenu>
          {props.data?.fetchLoginUser.role === "BUYER" ? (
            <Link href={props.data ? "/mypage/orderlist" : "/login"}>
              <a style={{ cursor: "pointer" }}>
                <S.LoginMenuItem
                  onClick={() => {
                    props.setMenuOpen(false);
                  }}
                >
                  {props.data ? "MYPAGE" : "LOGIN"}
                </S.LoginMenuItem>
              </a>
            </Link>
          ) : (
            <Link href={props.data ? "/seller" : "/login"}>
              <a style={{ cursor: "pointer" }}>
                <S.LoginMenuItem
                  onClick={() => {
                    props.setMenuOpen(false);
                  }}
                >
                  {props.data ? "SELLER" : "LOGIN"}
                </S.LoginMenuItem>
              </a>
            </Link>
          )}
          <a style={{ cursor: "pointer" }}>
            <Link href={props.data ? "/market" : "/signup"}>
              <S.LoginMenuItem onClick={props.data && props.onClickLogout}>
                {props.data ? "LOGOUT" : "SIGNUP"}
              </S.LoginMenuItem>
            </Link>
          </a>
        </S.LoginMenu>
        <S.User>
          {props.data ? (
            <>
              <S.UserName>
                {props.data.fetchLoginUser.role === "BUYER" && (
                  <S.UserLevel>
                    {VeganLevels[Number(userInfo?.fetchLoginUser.veganLevel) - 1]}
                  </S.UserLevel>
                )}
                {userInfo?.fetchLoginUser.name}님
              </S.UserName>
              <S.UserPoint>포인트 :{userInfo?.fetchLoginUser.point}P</S.UserPoint>
              {props.data.fetchLoginUser.role === "BUYER" && (
                <S.IconMenu>
                  <S.HeaderMenuItem>
                    <S.Payment onClick={props.onClickPayment} />
                    <S.IconName onClick={props.onClickPayment}>충전하기</S.IconName>
                    <CommonModal01 isOpen={props.isOpen} onCancel={props.paymentPage} width={450}>
                      <PaymentPage setIsOpen={props.setIsOpen} />
                    </CommonModal01>
                  </S.HeaderMenuItem>
                  <Link href="/mypage/basket">
                    <S.HeaderMenuItem
                      onClick={() => {
                        props.setMenuOpen(false);
                      }}
                    >
                      <S.Basket />
                      <S.IconName>장바구니</S.IconName>
                    </S.HeaderMenuItem>
                  </Link>
                </S.IconMenu>
              )}
            </>
          ) : (
            <h1>로그인해주세요</h1>
          )}
        </S.User>
        <S.NavWrapper>
          <Link href={"/"}>
            <S.Menu
              onClick={() => {
                props.setMenuOpen(false);
              }}
            >
              ABOUT
            </S.Menu>
          </Link>
          <Link href={`/market/categories`}>
            <S.Menu
              onClick={() => {
                props.setMenuOpen(false);
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
