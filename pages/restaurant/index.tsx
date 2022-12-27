import styled from "@emotion/styled";
import Link from "next/link";
import { GlobalWrapper } from "../../src/commons/styles/globalStyles";
import ReviewList from "../../src/components/units/restaurant-review/list/ReviewList.index";

export default function RestaurantPage() {
  return (
    <GlobalWrapper>
      <InnerWrapper>
        <MapWrapper>지도지도지도</MapWrapper>
        <InfoWrapper>식당정보</InfoWrapper>
        <ReviewWrapper>
          <Title>식당 후기</Title>
          <Link href="/restaurant/reviews/new">
            <ReviewBtn>후기작성</ReviewBtn>
          </Link>
        </ReviewWrapper>
        <ReviewList />
      </InnerWrapper>
    </GlobalWrapper>
  );
}

const InnerWrapper = styled.div`
  width: 100%;
  padding: 8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MapWrapper = styled.section`
  width: 100%;
  height: 40rem;
  border: 1px solid green;
  border-radius: 50px;
`;

const InfoWrapper = styled.section`
  width: 100%;
  height: 12rem;
  border: 1px solid red;
  margin: 2.5rem 0;
`;

const Title = styled.h3`
  font-size: 1.5rem;
`;

const ReviewWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

const ReviewBtn = styled.a`
  width: 10%;
  height: 10%;
  margin-top: 20px;
  border: none;
  padding: 14px;
  font-weight: 500;
  border-radius: 10px;
  color: white;
  background-color: #1f3d31;
  cursor: pointer;
  text-align: center;
`;
