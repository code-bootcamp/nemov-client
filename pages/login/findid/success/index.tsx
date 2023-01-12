import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { colorBase01, colorBase02 } from "../../../../src/commons/styles/colorBases";
import { GlobalWrapper } from "../../../../src/commons/styles/globalStyles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";

export default function FindIdSuccess() {
  const router = useRouter();

  return (
    <Global>
      <InnerWrapper>
        <Line>
          <H2>아이디 찾기</H2>
        </Line>
        <FindWrapper>
          <h3>고객님의 계정을 찾았습니다.</h3>
          <p style={{ color: "#a3a2a2" }}>아이디를 확인한 후 로그인해 주세요.</p>
          <IconEmailWrap>
            <ProfileIcon />
            <Email>{router.query.email}</Email>
          </IconEmailWrap>
          <Link href="/login/findpassword">
            <a>
              <FindPasswordBtn>비밀번호 찾기</FindPasswordBtn>
            </a>
          </Link>
          <Link href="/login">
            <a>
              <LoginBtn>로그인</LoginBtn>
            </a>
          </Link>
        </FindWrapper>
      </InnerWrapper>
    </Global>
  );
}

const Global = styled(GlobalWrapper)`
  height: 100vh;
  padding: 8% 0 3% 0;
`;

const Line = styled.div`
  width: 150px;
  border-bottom: 2px solid #1f3d31;
  text-align: center;
`;

const H2 = styled.h2`
  margin-bottom: 0.3rem;
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FindWrapper = styled.div`
  text-align: center;
  max-width: 400;
  padding: 1.25rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FindPasswordBtn = styled.button`
  padding: 0px 10px;
  width: 400px;
  height: 52px;
  border: 1px solid #222;
  ${colorBase02}
  margin: 20px 0;
`;

const LoginBtn = styled.button`
  padding: 0px 10px;
  width: 400px;
  height: 52px;
  ${colorBase01}
`;

const IconEmailWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

const ProfileIcon = styled(AccountCircleIcon)`
  font-size: 50px;
  color: #ddd;
`;

const Email = styled.p`
  margin-left: 10px;
  margin-bottom: 0;
`;
