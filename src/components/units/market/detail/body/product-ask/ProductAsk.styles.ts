import { css } from "@emotion/react";
import styled from "@emotion/styled";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  colorBase03,
  colorBase04,
} from "../../../../../../commons/styles/colorBases";
import { flexColumn } from "../../../../../../commons/styles/globalStyles";

export const IconStyleSet01 = css`
  ${colorBase04}
  width: 10%;
`;

export const ProductAskMain = styled.main`
  width: 100%;
  margin-top: 10%;
  padding: 1rem;
  flex-direction: column;
`;

export const TitlesWrapper = styled.section`
  ${flexColumn}
`;

export const QuestionButtonWrapper = styled.div`
  width: 10%;
`;

export const QuestionInfoLeft = styled.section`
  ${flexColumn}
  align-items: flex-start;
`;

export const QuestionButtons = styled.section`
  display: flex;
  justify-content: flex-end;
  width: 20%;
  gap: 0.8rem;
`;

export const DeleteIcon01 = styled(DeleteIcon)`
  ${IconStyleSet01}
`;

export const EditIcon01 = styled(EditIcon)`
  ${IconStyleSet01}
`;

export const QuestionButton01 = styled.button`
  ${colorBase03}
  width: 30%;
  height: 2rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const QuestionInfoRight = styled.section`
  display: flex;
  align-items: center;
`;

export const OpenAnswerButton01 = styled(KeyboardArrowDownIcon)`
  ${colorBase04}
  width: 2rem;
  height: 2rem;
  margin: 0 1rem;
`;

export const QNAContentsSection = styled.footer`
  ${flexColumn}
`;

export const AnswerSection = styled.section`
  width: 100%;
  border-radius: 0.638rem;
  ${colorBase03}
  padding: 1rem;
`;

// 상품 문의 모달 컴포넌트 스타일

export const QuestionWriteInnerWrapper = styled.main`
  width: 100%;
  ${flexColumn}
  padding: 2rem;
`;

export const QuestionWriteHeader = styled.h2`
  font-family: "SUIT-SemiBold";
  font-weight: 800;
  margin-bottom: 1rem;
`;

export const QuestionWriteForm = styled.form``;

export const ProductName = styled.header`
  margin: 1rem 0;
  font-weight: 800;
  font-size: 1.2rem;
  padding-left: 0.4rem;
`;

export const QuestionTitle = styled.input`
  width: 100%;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const QuestionDetail = styled.textarea`
  margin-top: 2rem;
  width: 100%;
  height: 18rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding-left: 0.6rem;
  padding-top: 0.6rem;
`;
