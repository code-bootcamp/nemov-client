import styled from "@emotion/styled";
import { Image, Rate } from "antd";
import { flexRow } from "../../../../../../../../commons/styles/globalStyles";

export const PRRating = styled(Rate)`
  margin-bottom: 0.8rem;
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
