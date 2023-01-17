import MypageLayoutHeader from "./header";
import MyPageMenu from "./menu/index";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import { UseQueryFetchLoginUser } from "../../hooks/useQueries/user/UseQueryFetchLoginUser";
import { mobile } from "../../../../commons/styles/breakPoints";
import { SlideBottom } from "../../../../commons/styles/keyframes";

interface MypageLayoutProps {
  children: ReactNode;
}

export default function MypageLayout({ children }: MypageLayoutProps) {
  const { data } = UseQueryFetchLoginUser();

  return (
    <GlobalWrapper>
      <MypageWrapper>
        <MyPageMenu data={data} />
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
  margin-top: 90px;
  animation: ${SlideBottom} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both;
  @media ${mobile} {
    flex-direction: column;
  }
`;
