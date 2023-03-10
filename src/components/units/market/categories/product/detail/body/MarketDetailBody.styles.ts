import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mobile, mobile2 } from "../../../../../../../commons/styles/breakPoints";
import { gray, pastelGray } from "../../../../../../../commons/styles/colorPalettes";
import { flexColumn, flexRow } from "../../../../../../../commons/styles/globalStyles";

// 헤더 폰트
export const FontStyle01 = css`
  font-family: "SUIT-SemiBold";
  font-weight: 900;
`;

export const MarketDetailPageBody = styled.main`
  padding: 0 2rem 2rem 2rem;
  width: 100%;
  ${flexColumn}
  @media ${mobile2} {
    padding: 0;
  }
`;

export const TabContentMain01 = styled.section`
  width: 100%;
  margin-top: 3rem;
  padding: 1rem;
`;

export const TabContentHeader01 = styled.header`
  ${flexColumn}
  margin-bottom: 2rem;
  padding-left: 0.5rem;
`;

export const TabContentHeader02 = styled.header`
  ${flexRow}
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-left: 0.5rem;
`;

export const TabContentTitle01 = styled.h2`
  ${FontStyle01}
  margin-bottom: 1rem;
  font-size: 2rem;
  @media ${mobile} {
    font-size: 2.5rem;
  }
`;

export const TabContentSubTitle01 = styled.span`
  color: ${gray};
  font-size: 0.8rem;
  @media ${mobile2} {
    width: 100%;
  }
`;

export const TabContentInnerWrapper = styled.ul`
  ${flexColumn}
  gap: 2rem;
`;

export const TabContentList01 = styled.li`
  ${flexColumn}
  padding: 2rem;
  gap: 0.8rem;
  border: 1px solid ${pastelGray};
  border-radius: 0.938rem;
`;

export const TabContentList02 = styled.li`
  ${flexColumn}
  justify-content: space-between;
  padding: 2rem;
  gap: 0.8rem;
  border: 1px solid ${pastelGray};
  border-radius: 0.938rem;
`;

export const ContentListHeader01 = styled.header`
  gap: 0.8rem;
`;

export const ContentListHeader02 = styled.header`
  ${flexRow}
  justify-content: space-between;
  gap: 0.8rem;
`;

export const HeaderInfo01 = styled.section`
  ${flexRow}
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  @media ${mobile} {
    ${flexColumn}
    justify-content: flex-start;
    align-items: unset;
    gap: 0;
  }
`;

export const ContentTitle = styled.h3`
  ${FontStyle01}
  font-size: 1.2rem;
  margin-bottom: 1rem;
  @media ${mobile} {
    font-size: 1.6rem;
  }
`;

export const HeaderInfo02 = styled.section`
  ${flexRow}
`;

export const Info02Detail = styled.section`
  display: flex;
  gap: 0.8rem;
  color: ${gray};
`;

export const ContentDetail01 = styled.section`
  width: 100%;
  font-size: 1.2rem;
  margin-top: 1rem;
  @media ${mobile} {
    font-size: 1.5rem;
  }
`;

export const ContentDetail02 = styled(ContentDetail01)`
  margin: 1rem 0;
`;
