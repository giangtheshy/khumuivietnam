import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="keywords" content="Oldwatchfan,Oldwatchfan shop, Oldwatchfan team" />
          <meta name="description" content="Oldwatchfan is the best shop" />
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
