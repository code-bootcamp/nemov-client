import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { flexColumn } from "../../../../../commons/styles/globalStyles";

// 헤더 폰트
export const FontStyle01 = css`
  font-family: "SUIT-SemiBold";
  font-weight: 900;
`;

export const MarketDetailPageBody = styled.main`
  padding: 0 2rem 2rem 2rem;
  width: 100%;
  ${flexColumn}
`;

export const TabContentMain01 = styled.main`
  width: 100%;
  margin-top: 10%;
  padding: 1rem;
`;
