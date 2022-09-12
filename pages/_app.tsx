import React from "react";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import Head from "next/head";
import "../style/style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>site Title</title>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>

        {/* <link rel="stylesheet" href="owl-carousel/owl.theme.css"></link> */}
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"> */}
      </Head>
      <div>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </div>
    </>
  );
}

export default MyApp;
