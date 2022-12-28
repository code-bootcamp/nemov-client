import styled from "@emotion/styled";

export const Wrapper = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ddd;
`;

export const InnerWrapper = styled.footer`
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

export const Menu = styled.span`
  font-size: 1rem;
  margin-right: 40px;
`;

export default function LayoutNav() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Menu>ABOUT</Menu>
        <Menu>ALL</Menu>
        <Menu>FOOD</Menu>
        <Menu>DRINK</Menu>
        <Menu>BEAUTY</Menu>
        <Menu>LIFE</Menu>
      </InnerWrapper>
    </Wrapper>
  );
}
