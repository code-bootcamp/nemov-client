import styled from "@emotion/styled";
import { colorBase01 } from "../../../../commons/styles/colorBases";

interface IQnaStylesProps {
  isOpen: boolean;
}

export const ContentsMain = styled.section`
  padding: 3% 0;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  line-height: 1.4;
  padding-bottom: 20px;
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

export const TopWrapper = styled.div`
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
  font-size: 1.2rem;
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
`;

export const QnaDate = styled.p`
  text-align: center;
  color: #555;
`;

export const QnaContents = styled.textarea`
  resize: none;
  width: 100%;
  height: 200px;
  padding: 2%;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

export const BtnWrapper = styled.div`
  width: 18%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const EditBtn = styled.button`
  min-width: 70px;
  height: 36px;
  font-size: 1rem;
  text-align: center;
  line-height: 34px;
  color: white;
  ${colorBase01}
  border: 1px solid #ddd;
  border-radius: 18px;
`;

export const DeleteBtn = styled.button`
  min-width: 70px;
  height: 36px;
  font-size: 1rem;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 18px;
  margin-left: 10px;
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
  display: ${(props: IQnaStylesProps) => (props.isOpen ? "block" : "none")};
`;

export const AnswerContents = styled.textarea`
  resize: none;
  width: 100%;
  height: 150px;
  padding: 2%;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-top: 1rem;
`;
