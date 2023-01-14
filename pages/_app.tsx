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
import firebase from "firebase/app";
import "firebase/messaging";
import Firebase from "../src/commons/libraries/firebase";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

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
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  Firebase();

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
