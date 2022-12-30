import styled from "@emotion/styled";
import { colorBase01 } from "../../../../../commons/styles/colorBases";

export const ReviewWrapper = styled.div`
  width: 100%;
`;

export const ReviewUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
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
  border: 1px solid blue;
`;

export const ReviewCenterWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`;

export const ReviewItemName = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const ReviewDate = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 10px 0;
`;

export const ReviewWriteBtn = styled.button`
  width: 100px;
  height: 50px;
  padding: 12px;
  border-radius: 5vmax;
  ${colorBase01}
`;

// export const ModalWrapper = styled.div`
//   width: 100%;
// `;

// export const ModalTitle = styled.h2`
//   font-size: 1.5rem;
//   border-bottom: 1px solid rgb(244, 244, 244);
//   padding-bottom: 10px;
//   padding-left: 20px;
// `;

// export const ModalReviewName = styled.h3`
//   font-size: 1.25rem;
//   font-weight: 600;
// `;

// export const ModalReviewSubName = styled.p`
//   font-size: 1.25rem;
//   color: #666;
//   margin: 0;
// `;

// export const ModalContentWrapper = styled.div`
//   width: 100%;
//   padding: 20px;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: flex-start;
// `;

// export const ModalLabel = styled.label`
//   width: 10%;
// `;

// export const ModalContentInnerWrap = styled.div`
//   width: 90%;
//   display: flex;
//   flex-direction: column;
// `;

// export const ModalContent = styled.textarea`
//   width: 100%;
//   resize: none;
//   height: 220px;
//   background-color: rgb(255, 255, 255);
//   border: 1px solid rgb(221, 221, 221);
//   border-radius: 4px;
// `;

// export const ModalContentLength = styled.span`
//   width: 100%;
//   padding: 0px 16px 16px;
//   font-size: 12px;
//   text-align: right;
//   color: #666;
//   margin-top: -36px;
// `;

// export const ModalImgWrapper = styled.div`
//   width: 90%;
//   display: flex;
//   flex-direction: column;
// `;

// export const ModalImgUploadWrapper = styled.div`
//   width: 90%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

// export const ModalImgBtn = styled.button`
//   width: 12%;
//   aspect-ratio: 5/5;
//   border: 1px solid rgb(221, 221, 221);
//   border-radius: 6px;
//   margin-right: 10px;
// `;

// export const ModalImgTextWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   margin-top: 16px;
// `;

// export const ModalImgText = styled.p`
//   color: #666;
//   margin: 0;
// `;
