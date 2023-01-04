import "../styles/globals.css";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import MypageLayout from "../src/components/commons/layout/mypageLayout";
import { useRouter } from "next/router";
import "antd/dist/reset.css";
import ApolloSetting from "../src/components/commons/apollo";
// import { theme } from "../src/commons/styles/themes";

const MYPAGE_LAYOUT = [
  "/mypage",
  "/mypage/orderlist",
  "/mypage/basket",
  "/mypage/picked",
  "/mypage/point",
  "/mypage/reviews",
  "/mypage/myinfo",
  "/mypage/myinfo/changepw",
  "/mypage/myinfo/modify",
  "/mypage/qna",
];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isMypage = MYPAGE_LAYOUT.includes(router.asPath);

  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          {/* <ThemeProvider theme={theme}> */}

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
          {/* </ThemeProvider> */}
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
