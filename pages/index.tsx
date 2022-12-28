import Head from "next/head";
import LandingPage from "../src/components/units/landingPage";
import styles from "../styles/Home.module.css";
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
    <div className={styles.container}>
      <Head>
        <title>🌱nemo-v</title>
      </Head>

      <LandingPage />
    </div>
  );
}
