import "../styles/globals.css";
import ApolloSettings from "../src/components/commons/apllo";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";

// ----------------- 파이어베이스 -------------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { globalStyle } from "../styles/globalStyles";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0wN7OKHC1kjQUxxDHSF1aaoLuh9378ZU",
  authDomain: "codecamp09-start.firebaseapp.com",
  projectId: "codecamp09-start",
  storageBucket: "codecamp09-start.appspot.com",
  messagingSenderId: "274695685895",
  appId: "1:274695685895:web:8c2bc9b5782e1deffc27a2",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// ---------------- 파이어베이스 -------------------

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloSettings>
      <>
        <Global styles={globalStyle} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloSettings>
  );
}

export default MyApp;
