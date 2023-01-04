import { yupResolver } from "@hookform/resolvers/yup";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { isOpenState } from "../../../../../commons/stores";
import { UseMutationUpdateUser } from "../../../../commons/hooks/useMutations/user/UseMutationUpdateUser";
import { UseMutationUpdateUserPassword } from "../../../../commons/hooks/useMutations/user/UseMutationUpdateUserPassword";
import { UseQueryFetchLoginUser } from "../../../../commons/hooks/useQueries/user/UseQueryFetchLoginUser";
import CommonModal01 from "../../../../commons/modals/CommonModal01";
import * as S from "./Modify.styles";
import { IFormUpdateData } from "./Modify.types";
import { UpdateSchema } from "./Modify.validation";

export default function MypageMyinfoModify() {
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  const { updateUserPasswordFunction } = UseMutationUpdateUserPassword();
  const { updateUserFunction } = UseMutationUpdateUser();
  const { data: loginUserData } = UseQueryFetchLoginUser();

  // Form
  const { register, handleSubmit, formState, getValues, setValue, trigger } = useForm({
    resolver: yupResolver(UpdateSchema),
    mode: "onChange",
  });

  const onSubmitUpdate: SubmitHandler<IFormUpdateData> = (data: IFormUpdateData) => {
    const { password, newPassword, ...value } = data;
    value.veganLevel = Number(value.veganLevel);
    void updateUserFunction(value);
    void updateUserPasswordFunction(getValues("password"));
  };

  // 주소 모달
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onComplete = (address: Address) => {
    onToggleModal();
    setValue("zipCode", address.zonecode);
    setValue("address", address.address);

    void trigger(["zipCode", "address"]);
  };

  return (
    <>
      {isOpen && (
        <CommonModal01 isOpen={isOpen} onCancel={onToggleModal} width={800}>
          <DaumPostcodeEmbed onComplete={onComplete} />
        </CommonModal01>
      )}
      <S.ContentsMain>
        <S.Title>회원 정보 수정</S.Title>
        <S.Form onSubmit={handleSubmit(onSubmitUpdate)}>
          <S.InnerWrapper>
            <S.InputWrapper>
              <S.Label>아이디</S.Label>
              <S.EditInput
                type="text"
                disabled={true}
                defaultValue={loginUserData?.fetchLoginUser.email}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>기존 비밀번호</S.Label>
              <S.InputErrorWrapper>
                <S.EditPasswordInput type="password" {...register("password")} />
                <S.Error>{formState.errors.password?.message}</S.Error>
              </S.InputErrorWrapper>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>새로운 비밀번호</S.Label>
              <S.InputErrorWrapper>
                <S.EditPasswordInput type="password" {...register("newPassword")} />
                <S.Error>{formState.errors.newPassword?.message}</S.Error>
              </S.InputErrorWrapper>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>이름</S.Label>
              <S.EditInput
                type="text"
                defaultValue={loginUserData?.fetchLoginUser.name}
                {...register("name")}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>휴대폰 번호</S.Label>
              <S.EditInput type="text" defaultValue={loginUserData?.fetchLoginUser.phone} />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>비건 단계</S.Label>
              <S.Select
                placeholder="비건 레벨"
                defaultValue={loginUserData?.fetchLoginUser.veganLevel}
                {...register("veganLevel")}
              >
                <option value="">단계를 선택해주세요.</option>
                <option value="1">1단계: 플렉시테리언</option>
                <option value="2">2단계: 폴로 베지테리언</option>
                <option value="3">3단계: 페스코 베지테리언</option>
                <option value="4">4단계: 락토 오보 베지테리언</option>
                <option value="5">5단계: 오보 베지테리언</option>
                <option value="6">6단계: 락토 베지테리언</option>
                <option value="7">7단계: 비건</option>
              </S.Select>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>주소</S.Label>
              <S.AddWrapper>
                <S.ZipcodeWrapper>
                  <S.Zipcode
                    type="text"
                    placeholder="우편번호"
                    defaultValue={loginUserData?.fetchLoginUser.zipCode}
                    {...register("zipCode")}
                  />
                  <S.AddBtn type="button" onClick={onToggleModal}>
                    우편번호 검색
                  </S.AddBtn>
                </S.ZipcodeWrapper>
                <S.AddInput
                  type="text"
                  defaultValue={loginUserData?.fetchLoginUser.address}
                  {...register("address")}
                />
                <S.AddInput
                  type="text"
                  defaultValue={loginUserData?.fetchLoginUser.addressDetail}
                  {...register("addressDetail")}
                />
              </S.AddWrapper>
            </S.InputWrapper>
            <S.BtnWrapper>
              <S.CancelBtn type="button">취소하기</S.CancelBtn>
              <S.EditBtn>수정하기</S.EditBtn>
            </S.BtnWrapper>
          </S.InnerWrapper>
        </S.Form>
      </S.ContentsMain>
    </>
  );
}
