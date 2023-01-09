import styled from "@emotion/styled";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import { mobile } from "../../src/commons/styles/breakPoints";
import { colorBase01 } from "../../src/commons/styles/colorBases";
import { GlobalWrapper } from "../../src/commons/styles/globalStyles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { UseMutationCheckBusinessLicenseNumber } from "../../src/components/commons/hooks/useMutations/signup/UseMutationCheckBusinessLicenseNumber";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function SignupPage() {
  const router = useRouter();

  const [isSeller, setIsSeller] = useState(false);
  const [isSelected, setIsSelected] = useState([true, false]);
  const [bln, setBln] = useState("");

  useEffect(() => {
    setIsSeller(false);
  }, []);

  const [checkBusinessLicenseNumber] = UseMutationCheckBusinessLicenseNumber();

  const onClickUser = () => {
    setIsSeller(false);
    setIsSelected([true, false]);
  };

  const onClickSeller = () => {
    setIsSeller(true);
    setIsSelected([false, true]);
  };

  // 사업자 등록번호 형식 변환
  useEffect(() => {
    if (bln.length === 10 && !bln.includes("-")) {
      setBln(bln.replace(/(\d{3})(\d{2})(\d{5})/, "$1-$2-$3"));
    }
  }, [bln]);

  const onChangeBusinessLN = (e: ChangeEvent<HTMLInputElement>) => {
    setBln(e.target.value);
  };

  const onClickCheckBl = async () => {
    try {
      const result = await checkBusinessLicenseNumber({
        variables: {
          bln,
        },
      });
      if (result.data?.checkBusinessLicenseNumber) {
        Modal.success({ content: "사업자 등록번호 인증에 성공했습니다." });
        void router.push({
          pathname: "/signup/seller",
          query: { bln },
        });
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <GlobalWrapper>
      <InnerWrapper>
        <Title>회원가입</Title>
        <Section>
          <Article>
            <TitleWrapper>
              <TitleGeneral
                onClick={onClickUser}
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
                    판매자 회원가입 페이지 입니다. <br /> 일반 회원 가입을 원하시는 분은 왼쪽의 일반
                    회원란을 클릭해주세요.
                  </ContentsText>
                </>
              ) : (
                <>
                  <ContentsText>지금 회원 가입하신 후 네모비를 만나보세요!</ContentsText>
                  <AccountIcon></AccountIcon>
                </>
              )}
              {isSeller && (
                <>
                  <SellerNumsTitle>사업자 등록번호</SellerNumsTitle>
                  <SellerNumsInput
                    value={bln}
                    type="text"
                    onChange={onChangeBusinessLN}
                    placeholder="사업자 등록번호를 입력해주세요. ( - 제외)"
                  />
                </>
              )}
              {isSeller ? (
                <SignupBtn onClick={onClickCheckBl}>인증</SignupBtn>
              ) : (
                <Link href="/signup/user">
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
  margin: 80px auto 0 auto;
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

const SellerNumsInput = styled.input`
  width: 70%;
  height: 47px;
  border: 1px solid #ddd;
  margin: 20px 0;
  text-align: center;
`;

const SignupBtn = styled.button`
  ${colorBase01}
  width: 150px;
  height: 46px;
  padding: 10px;
`;
