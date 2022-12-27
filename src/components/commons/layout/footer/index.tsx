import styled from "@emotion/styled";

export const Wrapper = styled.footer`
  width: 100%;
  height: 130px;
  background-color: green;
  display: flex;
  justify-content: center;
`;

export const InnerWrapper = styled.footer`
  width: 100%;
  max-width: 1300px;
  background-color: deepskyblue;
`;

export default function LayoutFooter() {
  return (
    <Wrapper>
      <InnerWrapper>푸터입니다</InnerWrapper>
    </Wrapper>
  );
}
