import Head from "next/head";

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="google-site-verification" content="8PkTaxm3xNf6t-UQvK6qTaO8cbAo7bVOY8IYVuFty0o" />
      <title>{title}</title>
    </Head>
  );
};
Meta.defaultProps = {
  title: "XkmShop - Chuyên các sản phẩm xịt khử mùi tốt nhất Việt Nam",
  description: "XkmShop is the best shop",
  keywords: "XkmShop,XkmShop shop, XkmShop team",
};
export default Meta;
