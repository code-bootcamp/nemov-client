import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { tablet } from "../../src/commons/styles/breakPoints";
import { GlobalWrapper } from "../../src/commons/styles/globalStyles";

const GWrapper = styled(GlobalWrapper)`
  padding: 0;
  margin: 200px 0;
  @media ${tablet} {
    padding: 0 3%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-family: "Arita-Thin";
  border: 1px solid #ddd;
  background-color: #710000;
  color: #fff;
  padding: 3%;
  margin: 0;
`;

const MagazinesWrap = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 3rem;
  @media ${tablet} {
    gap: 5rem;
  }
`;

const Template = styled.article`
  width: calc(100% / 3 - 2rem);
  aspect-ratio: 1/1;

  cursor: pointer;
  overflow: hidden;

  @media ${tablet} {
    width: calc(100% / 2 - 2.5rem);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
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
        <Title>Magazine</Title>
        <Template onClick={onClickRouter("02")}>
          <Thumbnail src="/images/magazine/02/magazine2.webp" />
        </Template>
        <Template onClick={onClickRouter("05")}>
          <Thumbnail src="/images/magazine/05/magazine5.webp" />
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
