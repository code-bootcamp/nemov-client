import MypageLayoutHeader from "./header";
import MyPageMenu from "./menu/index";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { GlobalWrapper } from "../../../../commons/styles/globalStyles";

interface MypageLayoutProps {
  children: ReactNode;
}

export default function MypageLayout({ children }: MypageLayoutProps) {
  return (
    <GlobalWrapper>
      <MypageWrapper>
        <MyPageMenu />
        <div style={{ width: "100%" }}>
          <MypageLayoutHeader />
          {children}
        </div>
      </MypageWrapper>
    </GlobalWrapper>
  );
}

const MypageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
