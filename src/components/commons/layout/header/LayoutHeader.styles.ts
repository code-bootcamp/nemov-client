import styled from "@emotion/styled";

export const Wrapper = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  padding: 0.6rem;
  position: relative;
`;

export const Logo = styled.h1`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
`;

export const LogoImg = styled.img`
  width: 100%;
`;

export const HeaderMenu = styled.section`
  display: flex;
`;

export const HeaderMenuItem = styled.article`
  font-size: 0.8rem;
  margin-left: 10px;
  color: #999;
`;
