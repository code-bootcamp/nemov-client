import Paginations01 from "../../../commons/paginations/01/Paginations01.index";
import SearchDate from "../../../commons/search-date/SearchDate";
import * as S from "./Point.styles";

export default function MypagePoint() {
  return (
    <S.ContentsMain>
      <S.Title>포인트 내역</S.Title>
      <SearchDate />
      <section>
        <S.TableTop>
          <S.TableTopLi>날짜</S.TableTopLi>
          <S.TableTopContent>내용</S.TableTopContent>
          <S.TableTopLi>충전금액</S.TableTopLi>
          <S.TableTopLi>잔액</S.TableTopLi>
        </S.TableTop>
        <S.TableBottom>
          <S.TableBottomLi>22.12.27</S.TableBottomLi>
          <S.TableBottomContent>충전</S.TableBottomContent>
          <S.TableBottomLi>+ 40000 원</S.TableBottomLi>
          <S.TableBottomLi>50000 원</S.TableBottomLi>
        </S.TableBottom>
      </section>
      <section>
        <Paginations01 />
      </section>
    </S.ContentsMain>
  );
}
