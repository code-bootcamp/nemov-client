import MypageLayoutHeader from "./header";
import MyPageMenu from "./menu/index";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import { UseQueryFetchLoginUser } from "../../hooks/useQueries/user/UseQueryFetchLoginUser";

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
          <MypageLayoutHeader data={data} />
          {children}
        </div>
      </MypageWrapper>
    </GlobalWrapper>
  );
}

const MypageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 80px;
`;
