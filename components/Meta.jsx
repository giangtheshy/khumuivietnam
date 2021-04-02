import Head from "next/head";

const Meta = ({ title, description, keywords, robots }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta key="keywords" name="keywords" content={keywords} />
      <meta key="description" name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta key="robots" name="robots" content={robots} />
      <meta charSet="utf-8" />
      <meta property="og:locale" content="vi_VN" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="google-site-verification" content="rnNS94UXgTKub_flILvvdXFyxxJchtJuF6PkAOcWnPY" />
      <title>{title}</title>
    </Head>
  );
};
Meta.defaultProps = {
  title: "khumuivietnam.com - Chuyên các sản phẩm xịt khử mùi tốt nhất Việt Nam",
  description:
    "khumuivietnam.com chuyên bán các loại xịt khử mùi tốt và rẻ nhất dành cho mọi cấp bậc,lứa tuổi. Cam đoan không tốt không nhận tiền!",
  keywords: "khumuivietnam.com,khumuivietnam shop, khumuivietnam, xịt khử mùi nam, xịt khử mùi nữ, xịt khử mùi",
  robots: "index,follow",
};
export default Meta;
