import styled from "@emotion/styled";
import { Image, Rate } from "antd";
import {
  gray,
  pastelGray,
} from "../../../../../../commons/styles/colorPalettes";
import {
  flexColumn,
  flexRow,
} from "../../../../../../commons/styles/globalStyles";
import { FontStyle01 } from "../MarketDetailBody.styles";

export const PRListWrapper = styled.ul`
  ${flexColumn}
  gap: 2rem;
`;

export const PRHeadTitle = styled.h2`
  ${FontStyle01}
  font-size: 2rem;
  padding-left: 0.5rem;
  margin-bottom: 2rem;
`;

export const PRList = styled.li`
  ${flexColumn}
  padding: 2rem;
  gap: 0.8rem;
  border: 1px solid ${pastelGray};
  border-radius: 0.938rem;
`;

export const PRListHeader = styled.header`
  gap: 0.8rem;
`;

export const PRCreateInfo01 = styled.section`
  ${flexRow}
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
`;

export const PRTitle = styled.h3`
  ${FontStyle01}
  font-size: 1.2rem;
`;

export const PRCreateInfo02 = styled.section`
  ${flexRow}
  gap: 0.8rem;
  color: ${gray};
`;

export const CreateInfo01 = styled.span`
  display: block;
`;

export const PRRating = styled(Rate)`
  margin-bottom: 1rem;
`;

export const PRContent = styled.section`
  width: 100%;
  font-size: 1.2rem;
  margin: 0.8rem 0;
`;

export const PRImages = styled.section`
  ${flexRow}
  gap: 0.8rem;
`;

export const PRImage01 = styled(Image)`
  border: 1px solid #e6e0e0;
  border-radius: 0.938rem;
  width: 10%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;
