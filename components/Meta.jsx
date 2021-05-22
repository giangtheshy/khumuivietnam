import Head from "next/head";

const Meta = ({ title, description, keywords, robots, image, ico }) => {
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
      <link rel="icon" href={ico} />
      <meta property="og:image" content={image} />

      <meta name="google-site-verification" content="rnNS94UXgTKub_flILvvdXFyxxJchtJuF6PkAOcWnPY" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-194783005-1"></script>

      <title>{title}</title>
    </Head>
  );
};
Meta.defaultProps = {
  title: "khumuivietnam.com - Chuyên các sản phẩm xịt khử mùi tốt nhất Việt Nam",
  description:
    "khumuivietnam.com chuyên bán các loại xịt khử mùi tốt và rẻ nhất dành cho mọi cấp bậc,lứa tuổi. Cam đoan không tốt không nhận tiền!",
  keywords: "khử mùi việt nam, khu mui viet nam, khumuivietnam, xịt khử mùi, xịt khử mùi nam, xịt khử mùi nữ",
  robots: "index,follow",
  image: "https://res.cloudinary.com/giangtheshy/image/upload/v1619963902/dev/khumuivietnam/drvbdmzs5agecqbecwzd.jpg",
  ico: "/favicon.ico",
};
export default Meta;
