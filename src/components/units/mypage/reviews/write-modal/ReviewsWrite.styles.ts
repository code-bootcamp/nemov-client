import styled from "@emotion/styled";
import { colorBase01, colorBase02 } from "../../../../../commons/styles/colorBases";

export const Form = styled.form`
  width: 100%;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  border-bottom: 1px solid rgb(244, 244, 244);
  padding-bottom: 10px;
  padding-left: 20px;
`;

export const ReviewLi = styled.li`
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid rgb(244, 244, 244);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ReviewImg = styled.img`
  width: 10%;
  aspect-ratio: 5/5;
`;

export const ReviewCenterWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`;

export const ModalReviewName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #3a3939;
`;

export const ModalReviewSubName = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin: 0;
`;

export const ModalContentWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ModalLabel = styled.label`
  width: 10%;
  margin-bottom: 8px;
`;

export const ModalContentInnerWrap = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const ModalContentTitle = styled.input`
  width: 90%;
  height: 30px;
  padding: 12px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
`;

export const ModalContent = styled.textarea`
  width: 100%;
  resize: none;
  height: 220px;
  padding: 12px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
`;

export const ModalContentLength = styled.span`
  width: 100%;
  padding: 0px 16px 16px;
  font-size: 12px;
  text-align: right;
  color: #666;
  margin-top: -36px;
`;

export const ModalImgWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const ModalImgUploadWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UploadBtnWrapper = styled.div`
  /* width: 12%; */
  width: 30%;
  /* height: 70px; */
  /* position: relative; */
  margin-right: 10px;
`;

export const UploadImage = styled.img`
  /* width: 100%;
  aspect-ratio: 5/5;
  margin-right: 10px; */
  width: 50%;
  aspect-ratio: 5/5;
  margin-top: 20px;
`;

export const ImageDiv = styled.div`
  width: 50%;
  aspect-ratio: 5/5;
  margin-top: 20px;
`;

export const ModalImgBtn = styled.button`
  position: absolute;
  width: 100%;
  aspect-ratio: 5/5;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 6px;
  margin-right: 10px;
  top: 0;
  cursor: pointer;
`;

export const UploadFileHidden = styled.input`
  /* position: absolute; */
  top: 0;
  right: 0;
  /* width: 100%;
  height: 100%;
  opacity: 1; */
  width: 100%;
  border-bottom: 0;
  cursor: pointer;
`;

export const ModalImgTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const ModalImgText = styled.p`
  color: #666;
  margin: 0;
`;

export const ModalBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
`;

export const ModalCancelBtn = styled.button`
  width: 160px;
  height: 56px;
  padding: 0px 10px;
  text-align: center;
  font-weight: 500;
  border: 1px solid #ddd;
  ${colorBase02}
`;

export const ModalSubmitBtn = styled.button`
  width: 160px;
  height: 56px;
  padding: 0px 10px;
  text-align: center;
  font-weight: 500;
  color: rgb(255, 255, 255);
  ${colorBase01}
`;
