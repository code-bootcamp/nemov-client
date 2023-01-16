import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, IsPasswordChange } from "../../../../../commons/stores";
import * as S from "./styles";

interface IMypageLayoutMenuProps {
  data: any;
}

const DELETE_LOGIN_USER = gql`
  mutation deleteLoginUser {
    deleteLoginUser
  }
`;

export default function MypageLayoutMenu(props: IMypageLayoutMenuProps) {
  const router = useRouter();
  const [, setIsPasswordChange] = useRecoilState(IsPasswordChange);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [deleteLoginUser] = useMutation(DELETE_LOGIN_USER);

  const VeganLevels = ["플랙시테리언", "폴로", "페스코", "락토오보", "오보", "락토", "비건"];
  const onClickPwChange = () => {
    setIsPasswordChange(true);
  };

  const onClickInfoChange = () => {
    setIsPasswordChange(false);
  };

  const onClickDeleteUser = async () => {
    void deleteLoginUser();
    setAccessToken("");
    await router.push("/market");
    location.reload();
  };

  const [open, setOpen] = useState(false);

  const onToggleModal = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Modal
        open={open}
        title="회원탈퇴"
        onCancel={onToggleModal}
        footer={[
          <S.DeleteUserBtn key="submit" onClick={onClickDeleteUser}>
            탈퇴하기
          </S.DeleteUserBtn>,
        ]}
      >
        <h3 style={{ textAlign: "center", margin: "40px 0" }}>
          회원정보가 삭제됩니다. 정말로 탈퇴하시겠습니까?
        </h3>
      </Modal>

      <S.MyPageMenu>
        <S.MenuHeader>
          <S.Title>마이페이지</S.Title>
          <S.User>
            <S.FirstLine>
              <S.UserName>
                <span>{props.data?.fetchLoginUser.name}</span>님
              </S.UserName>
              안녕하세요!
              <S.UserVeganLevel>
                <span>{VeganLevels[props.data?.fetchLoginUser.veganLevel - 1]}</span>
              </S.UserVeganLevel>
            </S.FirstLine>
          </S.User>
        </S.MenuHeader>
        <S.HR />
        <S.MenuContents>
          <S.MyShoppingInfo>
            <S.Options>나의 쇼핑정보</S.Options>
            <Link href="/mypage/orderlist">
              <S.Option>주문/취소 내역</S.Option>
            </Link>
            <Link href="/mypage/basket">
              <S.Option>장바구니</S.Option>
            </Link>
            <Link href="/mypage/picked">
              <S.Option>찜한 상품</S.Option>
            </Link>
          </S.MyShoppingInfo>
          <S.MyShoppingList>
            <S.Options>나의 쇼핑내역</S.Options>
            <Link href="/mypage/point">
              <S.Option>포인트 내역</S.Option>
            </Link>
            <Link href="/mypage/reviews">
              <S.Option>상품 후기</S.Option>
            </Link>
            <Link href="/mypage/qna">
              <S.ManageOptions>나의 문의내역</S.ManageOptions>
            </Link>
          </S.MyShoppingList>
          <S.MyInfo>
            <S.Options>내 정보 관리</S.Options>
            <Link href="/mypage/myinfo">
              <S.Option onClick={onClickPwChange}>비밀번호 변경</S.Option>
            </Link>
            <Link href="/mypage/myinfo">
              <S.Option onClick={onClickInfoChange}>회원 정보 수정</S.Option>
            </Link>
            <S.ManageOptions onClick={onToggleModal}>회원탈퇴</S.ManageOptions>
          </S.MyInfo>
        </S.MenuContents>
      </S.MyPageMenu>
    </>
  );
}
