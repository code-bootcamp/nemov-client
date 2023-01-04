import Link from "next/link";
import { useForm } from "react-hook-form";
import { UseMutationCreateUser } from "../../commons/hooks/useMutations/signup/UseMutationCreateUser";
import * as S from "./Signup.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "./Signup.validation";
import { IFormSignupData, ISignupProps } from "./Signup.types";
import CommonModal01 from "../../commons/modals/CommonModal01";
import { isOpenState } from "../../../commons/stores";
import { useRecoilState } from "recoil";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import { ChangeEvent, useEffect, useState } from "react";
import { Modal } from "antd";
import CountDown from "../../commons/count/Conut.index";
import { UseMutationCheckValidToken } from "../../commons/hooks/useMutations/signup/UseMutationCheckValidToken";
import { UseMutationCheckEmailExist } from "../../commons/hooks/useMutations/signup/UseMutationCheckEmailExist";
import { UseMutationGetToken } from "../../commons/hooks/useMutations/signup/UseMutationGetToken";

export default function Signup(props: ISignupProps) {
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  const [time, setTime] = useState(false);
  const [tokenInput, setTokenInput] = useState("");
  const [getConfrimToken, setGetConfirmToken] = useState("");

  // 인증번호 요청
  const [getToken] = UseMutationGetToken();
  const [checkValidToken] = UseMutationCheckValidToken();

  const onClickGetToken = async () => {
    if (!time) {
      try {
        const result = await getToken({
          variables: {
            phone: getValues("phone"),
          },
        });
        setTime(true);
        setTimeout(() => {
          setTime(false);
        }, 180000);
        console.log(result.data.getToken);
        setGetConfirmToken(result.data.getToken);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: "휴대폰 번호를 확인해주세요." });
      }
    } else {
      Modal.error({
        content: "이미 인증번호 받기를 누르셨습니다. 휴대폰을 확인해주세요.",
      });
    }
  };

  const onChangeTokenInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTokenInput(e.currentTarget.value);
  };

  const onClickConfirmToken = async () => {
    try {
      const result = await checkValidToken({
        variables: {
          phone: getValues("phone"),
          token: tokenInput,
        },
      });
      if (result.data.checkValidToken && tokenInput === getConfrimToken) {
        setTime(false);
        Modal.success({ content: "인증에 성공하였습니다." });
      } else {
        Modal.error({ content: "인증번호가 일치하지 않습니다." });
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 이메일 중복확인
  const { checkEmail } = UseMutationCheckEmailExist();
  const onClickConfirmEmail = () => {
    void checkEmail(getValues("email"));
  };

  // Form
  const { register, handleSubmit, formState, setValue, trigger, getValues, watch } =
    useForm<IFormSignupData>({
      resolver: yupResolver(SignupSchema),
      mode: "onChange",
    });
  const { createUserSubmit } = UseMutationCreateUser();

  const onSubmitForm = (data: IFormSignupData) => {
    const { passwordCheck, checkbox, ...value } = data;
    value.veganLevel = Number(value.veganLevel);
    void createUserSubmit(value);
  };

  // 휴대폰 번호 형식 변환
  useEffect(() => {
    if (watch("phone").length === 11 && !watch("phone").includes("-")) {
      const Number = watch("phone");
      setValue("phone", Number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
    }
  }, [watch("phone")]);

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

  // 체크박스 확인
  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setValue("checkbox", e.target.checked);
  };

  return (
    <>
      {isOpen && (
        <CommonModal01 isOpen={isOpen} onCancel={onToggleModal} width={800}>
          <DaumPostcodeEmbed onComplete={onComplete} />
        </CommonModal01>
      )}
      <S.Wrapper>
        <S.ImgWrapper></S.ImgWrapper>
        <S.Form onSubmit={handleSubmit(onSubmitForm)}>
          <S.Title>회원가입</S.Title>
          <S.Text>네가 찾는 모든 비건, 네모비에 가입해주세요.</S.Text>
          <S.InputWrapper>
            <S.Label>아이디</S.Label>
            <S.InputErrorWrapper>
              <S.InputBtnWrapper>
                <S.Input
                  type="text"
                  placeholder="아이디로 사용하실 이메일을 입력해주세요."
                  {...register("email")}
                />
                <S.CheckEmailBtn type="button" onClick={onClickConfirmEmail}>
                  중복확인
                </S.CheckEmailBtn>
              </S.InputBtnWrapper>
              <S.Error>{formState.errors.email?.message}</S.Error>
            </S.InputErrorWrapper>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.InputErrorWrapper>
              <S.Input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                {...register("password")}
              />
              <S.Error>{formState.errors.password?.message}</S.Error>
            </S.InputErrorWrapper>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호 확인</S.Label>
            <S.InputErrorWrapper>
              <S.Input
                type="password"
                placeholder="비밀번호를 다시 한번 입력해주세요."
                {...register("passwordCheck")}
              />
              <S.Error>{formState.errors.passwordCheck?.message}</S.Error>
            </S.InputErrorWrapper>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>{props.isSeller ? "브랜드명" : "이름"}</S.Label>
            <S.InputErrorWrapper>
              <S.Input type="text" placeholder="이름을 입력해주세요." {...register("name")} />
              <S.Error>{formState.errors.name?.message}</S.Error>
            </S.InputErrorWrapper>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>휴대폰 번호</S.Label>
            <S.PhoneWrapper>
              <S.InputBtnWrapper>
                <S.PhoneInput
                  type="tel"
                  placeholder="휴대폰 번호를 입력해주세요."
                  {...register("phone")}
                />
                <S.PhoneBtn type="button" onClick={onClickGetToken}>
                  인증요청
                </S.PhoneBtn>
              </S.InputBtnWrapper>
              <S.PhoneError>{formState.errors.phone?.message}</S.PhoneError>
              <S.ConfirmWrapper>
                <S.PhoneInput type="text" placeholder="인증번호" onChange={onChangeTokenInput} />
                <S.ConfirmTime>{time && <CountDown min={3} sec={0} />}</S.ConfirmTime>

                <S.PhoneBtn type="button" onClick={onClickConfirmToken}>
                  인증확인
                </S.PhoneBtn>
              </S.ConfirmWrapper>
            </S.PhoneWrapper>
          </S.InputWrapper>
          {!props.isSeller && (
            <>
              <S.InputWrapper>
                <S.Label>비건 단계</S.Label>
                <S.InputErrorWrapper>
                  <S.Select {...register("veganLevel")} defaultValue="none" placeholder="비건 단계">
                    <option value="none" disabled={true}>
                      단계를 선택해주세요.
                    </option>
                    <option value="1">1단계: 플렉시테리언</option>
                    <option value="2">2단계: 폴로 베지테리언</option>
                    <option value="3">3단계: 페스코 베지테리언</option>
                    <option value="4">4단계: 락토 오보 베지테리언</option>
                    <option value="5">5단계: 오보 베지테리언</option>
                    <option value="6">6단계: 락토 베지테리언</option>
                    <option value="7">7단계: 비건</option>
                  </S.Select>
                  <S.Error>{formState.errors.veganLevel?.message}</S.Error>
                </S.InputErrorWrapper>
              </S.InputWrapper>
            </>
          )}

          <S.InputWrapper>
            <S.Label>주소</S.Label>
            <S.AddWrapper>
              <S.ZipcodeWrapper>
                <S.Zipcode type="text" placeholder="07250" readOnly {...register("zipCode")} />
                <S.AddBtn type="button" onClick={onToggleModal}>
                  우편번호 검색
                </S.AddBtn>
              </S.ZipcodeWrapper>
              <S.AddInput type="text" placeholder="주소를 검색해주세요." {...register("address")} />
              <S.AddInput
                type="text"
                placeholder="상세 주소를 입력해주세요."
                {...register("addressDetail")}
              />
              <S.Error>{formState.errors.address?.message}</S.Error>
            </S.AddWrapper>
          </S.InputWrapper>
          <S.InfoWrapper>
            <S.InfoTitle>개인정보 이용약관</S.InfoTitle>
            <S.InfoTextWrapper>
              <p>[ 네모비 이용 약관 ]</p>
              <p>제1장 총칙 이 사이트는 포트폴리오용 사이트로 실제 운영하지 않습니다.</p>
              <p>제2장 총칙 이 사이트는 포트폴리오용 사이트로 실제 운영하지 않습니다.</p>
              <p>제3장 총칙 이 사이트는 포트폴리오용 사이트로 실제 운영하지 않습니다.</p>
              <p>제4장 총칙 이 사이트는 포트폴리오용 사이트로 실제 운영하지 않습니다.</p>
              <p>제5장 총칙 이 사이트는 포트폴리오용 사이트로 실제 운영하지 않습니다.</p>
            </S.InfoTextWrapper>
            <S.CheckboxWrapper>
              <S.Checkbox type="checkbox" {...register("checkbox")} onChange={onChangeChecked} />
              <p style={{ marginBottom: "0" }}>이용약관에 동의합니다.</p>
            </S.CheckboxWrapper>
          </S.InfoWrapper>
          <S.Error style={{ textAlign: "center" }}>{formState.errors.checkbox?.message}</S.Error>
          <S.SignupBtn type="submit">회원가입</S.SignupBtn>
          <Link href="/login">
            <S.Login>로그인 하기</S.Login>
          </Link>
        </S.Form>
      </S.Wrapper>
    </>
  );
}
