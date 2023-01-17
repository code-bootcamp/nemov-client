import styled from "@emotion/styled";
import { mobile, mobile2 } from "../../../../../commons/styles/breakPoints";
import { colorBase01, colorBase02 } from "../../../../../commons/styles/colorBases";

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
`;

export const ReviewImg = styled.img`
  width: 15%;
  aspect-ratio: 5/5;

  @media ${mobile} {
    width: 20%;
  }
`;

export const ReviewCenterWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`;

export const ReviewItemName = styled.p`
  font-size: 1.3rem;
  color: #3a3939;
  font-weight: 600;
  margin-bottom: 0.4rem;
`;

export const ReviewDate = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 0.4rem;
`;

export const ReivewTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0px;
  margin: 2px 0;

  @media ${mobile} {
    font-size: 1.3rem;
  }
`;

export const ReviewContent = styled.p`
  font-size: 1rem;
  margin-bottom: 0;
  margin: 2px 0;

  @media ${mobile} {
    font-size: 1.2rem;
  }
`;

export const ReviewBtnWrapper = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
`;

export const ReviewEditBtn = styled.button`
  width: 100px;
  padding: 12px;
  ${colorBase01}
  margin-bottom: 10px;
  border-radius: 5vmax;

  @media ${mobile} {
    width: 80px;
  }
  @media ${mobile2} {
    width: 60px;
    padding: 8px;
  }
`;

export const ReviewDeleteBtn = styled.button`
  width: 100px;
  padding: 12px 10px;
  ${colorBase02}
  border: 1px solid #ddd;
  border-radius: 5vmax;

  @media ${mobile} {
    width: 80px;
  }
  @media ${mobile2} {
    width: 60px;
    padding: 8px;
  }
`;

export const NoReviewText = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin-top: 40px;
`;
