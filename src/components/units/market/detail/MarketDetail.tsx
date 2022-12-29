import styled from "@emotion/styled";
import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import MarketDetailHead from "./head/MarketDetailHead";

const InnerWrapper = styled.div`
  padding: 5vmax;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function MarketDetail() {
  return (
    <GlobalWrapper>
      <InnerWrapper>
        <MarketDetailHead />
      </InnerWrapper>
    </GlobalWrapper>
  );
}
