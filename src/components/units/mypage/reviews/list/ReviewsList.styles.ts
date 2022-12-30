import styled from "@emotion/styled";
import {
  colorBase01,
  colorBase02,
} from "../../../../../commons/styles/colorBases";

export const ReviewWrapper = styled.div`
  width: 100%;
`;

export const ReviewUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ReviewLi = styled.li`
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid rgb(244, 244, 244);
  display: flex;
  flex-direction: row;
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
  margin-bottom: 0.4rem;
`;

export const ReviewDate = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.4rem;
`;

export const ReviewContent = styled.p``;

export const ReviewBtnWrapper = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
`;

export const ReviewEditBtn = styled.button`
  width: 100px;
  padding: 12px;
  ${colorBase01}
  margin-bottom: 10px;
  border-radius: 5vmax;
`;

export const ReviewDeleteBtn = styled.button`
  width: 100px;
  padding: 12px 10px;
  ${colorBase02}
  border: 1px solid #ddd;
  border-radius: 5vmax;
`;
