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
`;

export const ReviewCenterWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 30px;
`;

export const ReviewItemName = styled.p`
  font-size: 1.25rem;
  color: #3a3939;
  font-weight: 600;
  margin-bottom: 0;
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

export const NoReviewText = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin-top: 40px;
`;
