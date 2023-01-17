import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { mobile, mobile2, tablet } from "../../src/commons/styles/breakPoints";
import { GlobalWrapper } from "../../src/commons/styles/globalStyles";
import { SlideBottom } from "../../src/commons/styles/keyframes";

const GWrapper = styled(GlobalWrapper)`
  margin: 200px 0;
  animation: ${SlideBottom} 0.8s ease-in-out both;
  @media ${tablet} {
    padding: 0 3%;
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  width: calc(100% - 70% - 3rem);
  font-size: 2.5rem;
  font-family: "Arita-Thin";
  border: 6px solid #555;
  color: #000;
  padding: 3%;
  margin: 0;
  @media ${tablet} {
    width: 100%;
    font-size: 4rem;
    text-align: center;
    margin: 20px 0;
    border: none;
    border-bottom: 4px solid #000;
  }
`;

const MagazinesWrap = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 3rem;
  @media ${tablet} {
    gap: 4rem;
    justify-content: space-between;
  }
  @media ${mobile2} {
    gap: 2.2rem;
  }
`;

const Template = styled.article`
  cursor: pointer;
  overflow: hidden;
  width: calc(100% / 3 - 2rem);
  border-top-right-radius: 45px;
  border-bottom-left-radius: 45px;
  @media ${tablet} {
    width: calc(100% / 2 - 2rem);
  }
  @media ${mobile} {
  }
  @media ${mobile2} {
    width: 100%;
  }
`;

const Template1 = styled(Template)`
  width: 70%;
  @media ${tablet} {
    width: 100%;
  }
  @media ${mobile} {
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
  :hover {
    transform: scale(1.08);
  }
`;

export default function MagazinePage() {
  const router = useRouter();

  const onClickRouter = (id: string) => (e: React.MouseEvent) => {
    void router.push(`magazine/${id}`);
  };

  return (
    <GWrapper>
      <MagazinesWrap>
        <Title>
          <b>M</b>agazine
        </Title>
        <Template1 onClick={onClickRouter("02")}>
          <Thumbnail src="/images/magazine/02/magazine22.webp" />
        </Template1>
        <Template onClick={onClickRouter("05")}>
          <Thumbnail src="/images/magazine/05/magazine5.webp" />
        </Template>
        <Template onClick={onClickRouter("06")}>
          <Thumbnail src="/images/magazine/06/magazine6.webp" />
        </Template>
        <Template onClick={onClickRouter("07")}>
          <Thumbnail src="/images/magazine/07/magazine7.webp" />
        </Template>
        <Template onClick={onClickRouter("01")}>
          <Thumbnail src="/images/magazine/01/magazine1.png" />
        </Template>
        <Template onClick={onClickRouter("04")}>
          <Thumbnail src="/images/magazine/04/magazine4.webp" />
        </Template>
        <Template onClick={onClickRouter("03")}>
          <Thumbnail src="/images/magazine/03/magazine3.webp" />
        </Template>
      </MagazinesWrap>
    </GWrapper>
  );
}
