import styled from "@emotion/styled";
import MyShopping from "./myShopping";

export const Wrapper = styled.main`
  width: 100%;
  max-width: 1300px;
`;

export default function MyPage() {
  return (
    <Wrapper>
      <MyShopping />
    </Wrapper>
  );
}
