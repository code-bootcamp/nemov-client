import Head from "next/head";
import LandingPage from "../src/components/units/landingPage";
export default function Home() {
  return (
    <div>
      <Head>
        <title>nemo-v</title>
        {/* <meta charSet="UTF-8" />
        <meta name="apple-mobile-web-app-title" content="네모비" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="&nbsp;" /> */}
      </Head>

      <LandingPage />
    </div>
  );
}
