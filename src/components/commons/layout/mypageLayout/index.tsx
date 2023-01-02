import MypageLayoutHeader from "./header";
import MyPageMenu from "./menu/index";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { GlobalWrapper } from "../../../../commons/styles/globalStyles";
import { gql, useQuery } from "@apollo/client";

interface MypageLayoutProps {
  children: ReactNode;
}

const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      name
      balance
    }
  }
`;

export default function MypageLayout({ children }: MypageLayoutProps) {
  const { data } = useQuery(FETCH_LOGIN_USER);

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
