import * as S from "./Modify.styles";

export default function MypageMyinfoModify() {
  return (
    <S.ContentsMain>
      <S.Title>회원 정보 수정</S.Title>
      <S.Form>
        <S.InnerWrapper>
          <S.InputWrapper>
            <S.Label>아이디</S.Label>
            <S.EditInput type="text" disabled={true} />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>닉네임</S.Label>
            <S.EditInput type="text" />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>휴대폰 번호</S.Label>
            <S.EditInput type="text" />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비건 단계</S.Label>
            <S.Select placeholder="비건 레벨">
              <option value="">단계를 선택해주세요.</option>
              <option>1단계: 플렉시테리언</option>
              <option>2단계: 폴로 베지테리언</option>
              <option>3단계: 페스코 베지테리언</option>
              <option>4단계: 락토 오보 베지테리언</option>
              <option>5단계: 오보 베지테리언</option>
              <option>6단계: 락토 베지테리언</option>
              <option>7단계: 비건</option>
            </S.Select>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>주소</S.Label>
            <S.AddWrapper>
              <S.ZipcodeWrapper>
                <S.Zipcode type="text" placeholder="우편번호" />
                <S.AddBtn>우편번호 검색</S.AddBtn>
              </S.ZipcodeWrapper>
              <S.AddInput type="text" />
              <S.AddInput type="text" placeholder="상세 주소를 입력해주세요." />
            </S.AddWrapper>
          </S.InputWrapper>
          <S.BtnWrapper>
            <S.CancelBtn>취소하기</S.CancelBtn>
            <S.EditBtn>수정하기</S.EditBtn>
          </S.BtnWrapper>
        </S.InnerWrapper>
      </S.Form>
    </S.ContentsMain>
  );
}
