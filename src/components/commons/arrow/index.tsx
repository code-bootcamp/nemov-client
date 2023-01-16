import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { colorBase01 } from "../../../commons/styles/colorBases";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const Back = styled.button`
  border-radius: 15px;
  ${colorBase01}
  width: 15rem;
  height: 50px;
  padding: 0 1rem;
  display: block;
  margin: 100px auto;
  font-size: 1.5rem;
  font-family: "Arita-Medium";
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
