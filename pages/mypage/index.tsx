import MypageLayout from "../../src/components/commons/mypageLayout";
import styled from "@emotion/styled";

export default function MypagePage() {
  return (
    <MypageWrapper>
      <MypageLayout />
    </MypageWrapper>
  );
}

const MypageWrapper = styled.div`
  width: 1300px;
  display: flex;
  flex-direction: row;
  padding: 3rem 0;
`;
