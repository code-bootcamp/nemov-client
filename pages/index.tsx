import Head from "next/head";
import LandingPage from "../src/components/units/landingPage";
// import { useRecoilState } from "recoil";
// import { isOpenState } from "../src/commons/stores";
// import OpenModalButton01 from "../src/components/commons/buttons/OpenModalButton01";
// import CommonModal01 from "../src/components/commons/modals/CommonModal01";

export default function Home() {
  // const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  // const OnToggleModal = () => {
  //   setIsOpen((prev) => !prev);
  // };

  return (
    <div>
      <Head>
        <title>🌱nemo-v</title>
      </Head>

      <LandingPage />
    </div>
  );
}
