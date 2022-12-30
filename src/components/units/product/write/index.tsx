import { useRouter } from "next/router";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import * as S from "./write.styles";

export default function ProductWrite() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  const onClickSubmit = () => {
    void router.push("/");
  };
  return (
    <S.Wrapper>
      <S.Title>판매자 상품 등록 페이지</S.Title>
      <S.InnerWrap onSubmit={onClickSubmit}>
        <S.Row>
          <span>상품이름</span> <S.InputBox type="text" />
        </S.Row>
        <S.Row>
          <span>가격</span>
          <S.InputBox type="price" />
        </S.Row>
        <S.Row>
          <span>할인률</span>
          <S.InputBox type="text" />
        </S.Row>
        <S.Row>
          <span>배송비</span> <S.InputBox type="text" />
        </S.Row>
        <S.Row>
          <span>재고수량</span> <S.InputBox type="number" />
        </S.Row>
        <S.Row>
          <span>상품 카테고리</span>
          <select>
            <option>FOOD</option>
            <option>DRINK</option>
            <option>BEAUTY</option>
            <option>LIFE</option>
          </select>
        </S.Row>
        <S.Row>
          <span>비건 유형</span>
          <S.Category>
            <S.Label>
              <input type="radio" id="0" value="FLEX" />
              <S.Radio>FLEX</S.Radio>
            </S.Label>
            <S.Label>
              <input type="radio" id="1" value="POLO" />
              <S.Radio>POLO</S.Radio>
            </S.Label>
            <S.Label>
              <input type="radio" id="2" value="PESCO" />
              <S.Radio>PESCO</S.Radio>
            </S.Label>
            <S.Label>
              <input type="radio" id="3" value="LACTOOVO" />
              <S.Radio>LACTOOVO</S.Radio>
            </S.Label>
            <S.Label>
              <input type="radio" id="4" value="OVO" />
              <S.Radio>OVO</S.Radio>
            </S.Label>
            <S.Label>
              <input type="radio" id="5" value="LACTO" />
              <S.Radio>LACTO</S.Radio>
            </S.Label>
            <S.Label>
              <input type="radio" id="6" value="VEGAN" />
              <S.Radio>VEGAN</S.Radio>
            </S.Label>
          </S.Category>
        </S.Row>
        <S.Row>
          <span>상품 대표 이미지</span> <S.InputBox type="file" />
        </S.Row>
        <S.Row>
          <span>상품 상세내용</span> <textarea />
        </S.Row>
        <S.ButtonWrap>
          <S.Btn1 type="submit">상품 등록하기</S.Btn1>
          <S.Btn2 type="button" onClick={onClickMoveToPage("/seller")}>
            취소
          </S.Btn2>
        </S.ButtonWrap>
      </S.InnerWrap>
    </S.Wrapper>
  );
}
