import Head from "next/head";
import LandingPage from "../src/components/units/landingPage";
export default function Home() {
  return (
    <div>
      <Head>
        <title>nemo-v</title>
      </Head>
      <LandingPage />
    </div>
  );
}
