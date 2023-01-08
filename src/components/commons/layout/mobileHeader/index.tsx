import { SetterOrUpdater } from "recoil";
import { IQuery } from "../../../../commons/types/generated/types";
import Link from "next/link";
import PaymentPage from "../../../units/paymentModal/payment";
import CommonModal01 from "../../modals/CommonModal01";
import * as S from "./mobileHeader.styles";
import { UseQueryFetchCategories } from "../../hooks/useQueries/product/UseQueryFetchCategories";

interface ILayoutMobileMenuProps {
  isOpen: boolean;
  data: Pick<IQuery, "fetchLoginUser"> | undefined;
  onClickPayment: () => void;
  onClickLogout: () => Promise<void>;
  setIsOpen: SetterOrUpdater<boolean>;
  paymentPage: () => void;
}

const categoryArr = ["FOOD", "DRINK", "BEAUTY", "LIFE"];

export default function LayoutMobileMenu(props: ILayoutMobileMenuProps) {
  const { data: category } = UseQueryFetchCategories();

  return (
    <>
      <S.HeaderMenu isOpen={props.isOpen}>
        <S.User>
          <S.UserName>
            <S.UserLevel>비건</S.UserLevel>user 님 안녕하세요
          </S.UserName>
          <S.UserPoint>포인트 :1500P</S.UserPoint>
        </S.User>
        <S.LoginMenu>
          <Link href={props.data ? "/mypage/orderlist" : "/login"}>
            <S.HeaderMenuItem>{props.data ? "MYPAGE" : "LOGIN"}</S.HeaderMenuItem>
          </Link>
          <Link href={props.data ? "/market" : "/signup"}>
            <S.HeaderMenuItem onClick={props.data && props.onClickLogout}>
              {props.data ? "LOGOUT" : "SIGNUP"}{" "}
            </S.HeaderMenuItem>
          </Link>
        </S.LoginMenu>

        {props.data && (
          <>
            <S.HeaderMenuItem>
              <S.Payment onClick={props.onClickPayment} />
              <CommonModal01 isOpen={props.isOpen} onCancel={props.paymentPage} width={200}>
                <PaymentPage setIsOpen={props.setIsOpen} />
              </CommonModal01>
            </S.HeaderMenuItem>
            <Link href="/mypage/basket">
              <S.HeaderMenuItem>
                <S.Basket />
              </S.HeaderMenuItem>
            </Link>
          </>
        )}
        <S.NavWrapper>
          <Link href={"/"}>
            <S.Menu>ABOUT</S.Menu>
          </Link>
          {category?.fetchProductCategories.map((categories, index) => (
            <Link href={`/market/categories/${categories.id}`} key={index}>
              <S.Menu>{categoryArr[index]}</S.Menu>
            </Link>
          ))}
        </S.NavWrapper>
      </S.HeaderMenu>
    </>
  );
}
