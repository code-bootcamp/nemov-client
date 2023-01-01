import styled from "@emotion/styled";
import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import MarketDetailBody from "./body/MarketDetailBody";
import MarketDetailHead from "./head/MarketDetailHead";

const InnerWrapper = styled.div`
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
        <MarketDetailBody />
      </InnerWrapper>
    </GlobalWrapper>
  );
}
