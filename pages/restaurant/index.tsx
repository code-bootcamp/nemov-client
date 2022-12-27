import styled from "@emotion/styled";
import Link from "next/link";
import ReviewList from "../../src/components/units/restaurant-review/list/ReviewList.index";

export default function RestaurantPage() {
  return (
    <>
      <MapWrapper>지도지도</MapWrapper>
      <InfoWrapper>식당정보</InfoWrapper>
      <ReviewWrapper>
        <Title>식당 후기</Title>
        <Link href="/restaurant/reviews/new">
          <ReviewBtn>후기작성</ReviewBtn>
        </Link>
      </ReviewWrapper>
      <ReviewList />
    </>
  );
}

const MapWrapper = styled.section`
  width: 70%;
  height: 40rem;
  border: 1px solid green;
  border-radius: 50px;
`;

const InfoWrapper = styled.section`
  width: 70%;
  height: 15rem;
  border: 1px solid red;
`;

const Title = styled.h3`
  font-size: 1.5rem;
`;

const ReviewWrapper = styled.section`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
