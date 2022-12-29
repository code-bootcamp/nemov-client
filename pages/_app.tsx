import "../styles/globals.css";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import MypageLayout from "../src/components/commons/layout/mypageLayout";
import { useRouter } from "next/router";

const MYPAGE_LAYOUT = [
  "/mypage",
  "/mypage/orderlist",
  "/mypage/basket",
  "/mypage/picked",
  "/mypage/point",
  "/mypage/reviews",
];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isMypage = MYPAGE_LAYOUT.includes(router.asPath);

  return (
    <RecoilRoot>
      <Global styles={globalStyles} />
      <Layout>
        {isMypage ? (
          <MypageLayout>
            <Component {...pageProps} />
          </MypageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
