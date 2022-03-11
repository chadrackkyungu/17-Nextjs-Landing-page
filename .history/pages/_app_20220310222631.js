// Import scss
import "assets/css/bootstrap.min.css";
import "assets/css/materialdesignicons.min.css";
import "assets/css/pe-icon-7-stroke.css";
import "assets/css/style.css";
import "assets/css/colors/red.css";
import Layout from "../layouts/Landing";
import App from "next/app";
import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>chadrack_code</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
