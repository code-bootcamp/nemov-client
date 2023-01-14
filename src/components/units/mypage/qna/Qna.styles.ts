import styled from "@emotion/styled";
import { mobile } from "../../../../commons/styles/breakPoints";
import { colorBase01 } from "../../../../commons/styles/colorBases";
import { amazon } from "../../../../commons/styles/colorPalettes";

export const ContentsMain = styled.section`
  padding: 3% 0;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  line-height: 1.4;
  padding-bottom: 20px;

  @media ${mobile} {
    text-align: center;
    padding-bottom: 0;
    margin: 20px 0;
  }
`;

export const QnaWrapper = styled.ul`
  width: 100%;
  padding: 1.25rem 0;
`;

export const QnaItem = styled.li`
  width: 100%;
  padding: 2%;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const InnerWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleBtnWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const QnaTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0;
`;

export const NameDateWrap = styled.div`
  width: 100%;
  margin-top: 14px;
  padding-right: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const QnaItemName = styled.p`
  text-align: center;
  margin-right: 30px;
  font-size: 1.3rem;
`;

export const QnaDate = styled.p`
  text-align: center;
  color: #555;
`;

export const QnaContents = styled.textarea`
  font-size: 1.2rem;
  resize: none;
  width: 100%;
  min-height: 120px;
  padding: 2%;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const EditBtn = styled.button`
  width: 70px;
  padding: 12px 35px;
  font-size: 1rem;
  text-align: center;
  color: white;
  ${colorBase01}
  border: 1px solid #ddd;
  border-radius: 50px;
  font-size: 1.1rem;

  @media ${mobile} {
    width: 50px;
    padding: 5px;
  }
`;

export const DeleteBtn = styled.button`
  width: 70px;
  padding: 12px 35px;
  font-size: 1rem;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 50px;
  margin-left: 10px;
  font-size: 1.1rem;

  @media ${mobile} {
    width: 50px;
    padding: 5px;
  }
`;

export const AnswerBtn = styled.button`
  width: 80px;
  height: 36px;
  font-size: 1rem;
  border-radius: 18px;
  margin-left: 10px;
  ${colorBase01}
  margin-top: 10px;
`;

export const AnswerWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const AnswerTitle = styled.h3`
  color: ${amazon};
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 0;
`;

export const AnswerContents = styled.textarea`
  font-size: 1.2rem;
  resize: none;
  width: 100%;
  min-height: 110px;
  padding: 2%;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-top: 1rem;
`;

export const NoQnaText = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin-top: 40px;
`;
