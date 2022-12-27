import styled from "@emotion/styled";

export const Wrapper = styled.nav`
  width: 100%;
  height: 40px;
  background-color: hotpink;
  display: flex;
  justify-content: center;
`;

export const InnerWrapper = styled.footer`
  width: 100%;
  max-width: 1300px;
  background-color: deepskyblue;
  display: flex;
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
        {/* <span>About</span> */}
        <Menu>Home</Menu>
        <Menu>Store</Menu>
        <Menu>비건식당 후기</Menu>
      </InnerWrapper>
    </Wrapper>
  );
}
