import styled from "@emotion/styled";
import { colorBase01, colorBase02 } from "../../../../../commons/styles/colorBases";
import { GlobalWrapper } from "../../../../../commons/styles/globalStyles";

export const Wrapper = styled(GlobalWrapper)`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 2rem;
  font-size: 1.5rem;
`;

export const InnerWrap = styled.form`
  width: 100%;
  padding: 0 10%;
`;

export const InputBox = styled.input`
  width: 80%;
  height: 2.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const SubTitle = styled.span`
  font-size: 1rem;
`;

export const Category = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
`;

export const Label = styled.label`
  margin-right: 4%;
`;

export const Radio = styled.span`
  margin-left: 0.3rem;
`;

export const OptionsRow = styled(Row)`
  align-items: flex-start;
`;

export const OptionsTitle = styled(SubTitle)`
  margin-top: 0.8rem;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const NoticeMap = styled(Row)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7;
  margin-bottom: 1rem;
`;

export const Notice = styled.div`
  width: 50%;
  padding-left: 10px;
`;

export const NoticeInput = styled.input`
  width: 50%;
  height: 2.5rem;
  background-color: #f7f7f7;
`;

export const ThumbnailImgWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ThumbnailInput = styled.input`
  width: 100%;
`;

export const ThumbnailImg = styled.img`
  width: 50%;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Btn1 = styled.button`
  padding: 1rem;
  margin: 1rem;
  ${colorBase02}

  border: 1px solid #ddd;
  &:hover {
    ${colorBase01}
  }
`;

export const Btn2 = styled.button`
  padding: 1rem;
  margin: 1rem;
  ${colorBase02}
  border: 1px solid #ddd;

  &:hover {
    background-color: red;
    color: #fff;
  }
`;

export const EditorWrap = styled.div`
  width: 80%;
`;
