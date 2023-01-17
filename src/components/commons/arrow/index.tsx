import styled from "@emotion/styled";
import { useRouter } from "next/router";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const Back = styled.h1`
  width: 30%;
  margin: 100px auto;
  font-size: 2.5rem;
  font-family: "Arita-light";
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  :hover {
    transform: scale(1.08);
  }
`;

export default function BackButton() {
  const router = useRouter();

  return (
    <Back
      onClick={() => {
        void router.push("/magazine");
      }}
    >
      Magazine Home
      <TrendingFlatIcon />
    </Back>
  );
}
