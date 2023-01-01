import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";
import { mobile } from "../../src/commons/styles/breakPoints";
import { colorBase01 } from "../../src/commons/styles/colorBases";
import { GlobalWrapper } from "../../src/commons/styles/globalStyles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRecoilState } from "recoil";
import { isSellerState } from "../../src/commons/stores";

export default function SignupPage() {
  const [isSeller, setIsSeller] = useRecoilState(isSellerState);
  const [isSelected, setIsSelected] = useState([true, false]);

  const onClickGeneral = () => {
    setIsSeller(false);
    setIsSelected([true, false]);
  };

  const onClickSeller = () => {
    setIsSeller(true);
    setIsSelected([false, true]);
  };

  return (
    <GlobalWrapper>
      <InnerWrapper>
        <Title>회원가입</Title>
        <Section>
          <Article>
            <TitleWrapper>
              <TitleGeneral
                onClick={onClickGeneral}
                style={{
                  backgroundColor: isSelected[0] ? "#1f3d31" : "white",
                  color: isSelected[0] ? "white" : "black",
                }}
              >
                일반 회원
              </TitleGeneral>
              <TitleSeller
                onClick={onClickSeller}
                style={{
                  backgroundColor: isSelected[1] ? "#1f3d31" : "white",
                  color: isSelected[1] ? "white" : "black",
                }}
              >
                판매자회원
              </TitleSeller>
            </TitleWrapper>
            <Contents>
              <ContentsTitle>네모비에 오신 것을 환영합니다.</ContentsTitle>
              {isSeller ? (
                <>
                  <ContentsText>
                    판매자 회원가입 페이지 입니다. 일반 회원 가입을 원하시는
                    분은 왼쪽의 일반 회원란을 클릭해주세요.
                  </ContentsText>
                </>
              ) : (
                <>
                  <ContentsText>
                    지금 회원 가입하신 후 네모비를 만나보세요!
                  </ContentsText>
                  <AccountIcon></AccountIcon>
                </>
              )}
              {isSeller && (
                <>
                  <SellerNumsTitle>사업자 등록번호</SellerNumsTitle>
                  <SellerNumsText>
                    사업자 등록번호를 인증해주세요.
                  </SellerNumsText>
                  <SellerNumsInput type="text" />
                </>
              )}
              {isSeller ? (
                <SignupBtn>인증</SignupBtn>
              ) : (
                <Link href="/signup/general">
                  <SignupBtn>
                    <a>가입하기</a>
                  </SignupBtn>
                </Link>
              )}
            </Contents>
          </Article>
        </Section>
      </InnerWrapper>
    </GlobalWrapper>
  );
}

const InnerWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${mobile} {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 0;
`;

const Section = styled.section`
  width: 100%;
  padding: 3.75rem 7rem;
  display: flex;
  flex-direction: row;
`;

const Article = styled.article`
  width: 100%;
  text-align: center;
  border: 1px solid #1f3d31;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #1f3d31;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TitleGeneral = styled.h3`
  width: 50%;
  font-size: 1.25rem;
  margin-bottom: 0;
  border-right: 1px solid #1f3d31;
  padding: 10px 0;
  cursor: pointer;
`;

const TitleSeller = styled.h3`
  width: 50%;
  font-size: 1.25rem;
  margin-bottom: 0;
  padding: 10px 0;
  cursor: pointer;
`;

const Contents = styled.div`
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentsTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 0;
  font-weight: bold;
`;

const ContentsText = styled.p`
  font-size: 1rem;
  margin: 20px 0;
  text-decoration: underline;
`;

const AccountIcon = styled(AccountCircleIcon)`
  font-size: 10rem;
  color: #ddd;
  margin: 3rem 0;
`;

const SellerNumsTitle = styled.h4`
  font-size: 1.25rem;
  margin-top: 20px;
  margin: 20px 0;
  font-weight: bold;
`;

const SellerNumsText = styled.p`
  margin-bottom: 0;
`;

const SellerNumsInput = styled.input`
  width: 70%;
  height: 47px;
  border: 1px solid #ddd;
  margin: 40px 0;
  text-align: center;
`;

const SignupBtn = styled.button`
  ${colorBase01}
  width: 150px;
  height: 46px;
  padding: 10px;
`;
