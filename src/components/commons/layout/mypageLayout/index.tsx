import MypageLayoutHeader from "./header";
import MyPageMenu from "./menu/index";
import styled from "@emotion/styled";
import { ReactNode } from "react";

interface MypageLayoutProps {
  children: ReactNode;
}

export default function MypageLayout({ children }: MypageLayoutProps) {
  return (
    <MypageWrapper>
      <MyPageMenu />
      <div style={{ width: "100%" }}>
        <MypageLayoutHeader />
        {children}
      </div>
    </MypageWrapper>
  );
}

const MypageWrapper = styled.div`
  width: 1300px;
  display: flex;
  flex-direction: row;
  padding: 3rem 0;
`;
