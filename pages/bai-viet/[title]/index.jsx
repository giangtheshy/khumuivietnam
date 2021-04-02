import React from "react";
import styles from "../../../scss/Post/Post.module.scss";
import BackLink from "../../../utils/components/BackLink/BackLink";
import Meta from "../../../components/Meta";

const post = {
  title: "Top 6 xịt khử mùi đáng mua dành cho sinh viên",
  description: "Top 6 xịt khử mùi đáng mua mà sinh viên không thể bỏ qua trong năm 2021! Cùng nhau khám phá ngay nhé!",
  introduce:
    "Với thời tiết nắng nóng của những ngày đầu mùa hè thì việc bạn lo lắng nhất mỗi khi ra đường là gì? Chắc chắn là mồ hôi và mùi cơ thể tuông trào mỗi khi bạn bước chân ra đường đúng không! Và để giúp bạn tự tin hơn mỗi khi ra đường thì chúng tôi giới thiệu cho bạn top 5 xịt khửi mùi đáng mua dành cho sinh viên. Cùng nhau tìm hiểu nhé!",
  contents: [
    {
      title: "Đầu tiên là top 3 sản phẩm xịt khử mùi tốt nhất dành cho nam sinh:",
      content: [
        {
          heading: "1. Xịt khử mùi toàn thân Romano Classic",
          text:
            "Romano là một hãng mỹ phẩm đã không còn quá xa lạ đối với các bạn nam.<br/>Xịt khử mùi toàn thân Romano Classic giúp ngăn mùi hiệu quả nên sẽ mang lại sự tự tin cho các bạn nam trong ngày dài hoạt động.<br/>Đồng thời chai xịt cũng được thiết kế tiện dụng và cực kỳ an toàn với da người sử dụng.",
          image: "/images/romano.jpg",
        },
        {
          heading: "2. Xịt khử mùi AXE Gold Temptation",
          text:
            "AXE là một thương hiệu mỹ phẫm đến từ Anh và Hà Lan và cũng đã rất thân thuộc với các bạn trẻ Việt.<br/>Xịt khử mùi AXE Gold Templation mang đến cho người dùng mùi hương gỗ nồng nàng và hương cam đầy quyến rũ khiến cho bạn cảm giác tự tin suốt cả ngày.<br/>Sản phẩm có một thiết kế cực kỳ ấn tượng tạo sự thu hút đối với các bạn nam.<br/>Bên cạnh những hương thơm quyến rũ và thiết kế ấn tượng xịt khử mùi AXE thì sản phẩm còn có thể diệt khuẩn và ngăn vi khuẩn gây mùi cho cơ thể.",
          image: "/images/axe.jpg",
        },
        {
          heading: "3. Xịt khử mùi toàn thân nam PlayBoy – 24h Deodorant Body Spray",
          text:
            "Xịt khử mùi nam PlayBoy là một đại diện đến từ nước Pháp giúp bạn chống lại mùi hôi cơ thể lên đến 24h đồng thời giúp bạn trở nên thơm mát, cuốn hút và hấp dẫn hơn.<br/>Bên cạnh việc khử mùi sản phẩm còn giúp bạn ngăn chặn ố vàng cũng như không có muối nhôm.<br/>Sản phẩm là một ứng cử viên hoàn hảo dành cho các bạn nam không thích dùng nước hoa nhưng cơ thể mình vẫn luôn được chăm sóc và bảo vệ.",
          image: "/images/playboy.png",
        },
      ],
    },
    {
      title: "Tiếp theo là top 3 sản phẩm xịt khử mùi không thể bỏ qua đối với các bạn nữ:",
      content: [
        {
          heading: "4. Xịt khử mùi hương nước hoa Enchanteur Sensation",
          text:
            "Xịt khử mùi Enchanteur Sensantion giúp bên cạnh việc ngăn mùi hiệu quả suốt một ngày dài thì xịt khử mùi còn mang lại cho các bạn nữ một hương thơm dịu dàng, quyến rũ và một cảm giác thoải mái khi sử dụng.<br/>Xịt khử mùi được thiết kế tiện dụng và cực kỳ an toàn với da kể cả da nhạy cảm.<br/>Chai xịt sở hữu thiết kế nhỏ gọn giúp các bạn nữ dễ dàng mang theo khi đi ra ngoài.",
          image: "/images/enchanteur.jpg",
        },
        {
          heading: "5. Xịt ngăn mùi Nivea Pearl & Beauty ngọc trai đẹp quyến rũ",
          text:
            "Xịt khử mùi … là một sản phẩm đến hãng mỹ phẩm nổi tiếng của Đức và đã trở thành người bạn đồng hành cũng phái đẹp từ lâu.<br/>Xịt khử mùi được tinh chế từ chiết xuất ngọc trai khiến việc ngăn mùi và giảm lượng tiết mồ hôi của cơ thể lên đến 48h.<br/>Đồng thời, sản phẩm giúp các bạn nữ có làn da thêm sáng mịn, mềm mại và giảm thâm sần.",
          image: "/images/nivia.jpg",
        },
        {
          heading: "6. Xịt khử mùi Rexona Shower Clean",
          text:
            "Xịt khử mùi … là một đại diện đến từ nước Úc với việc được trang bị công nghệ ngăn mùi cảm ứng Motionsense giúp giữ cơ thể luôn khô thoáng và mồ hôi trong suốt 48h.<br/>Với việc sở hữu thiết kế dạng xịt tiện dụng nên hạn chế việc đầu xịt tiếp xúc trực tiếp với da giúp ngăn chặn tình trạng vi khuẩn xâm nhập vào chai.<br/>Sản phẩm cũng được thiết kế nhỏ gọn giúp các bạn nữ dễ dàng mang theo khi đi ra ngoài.",
          image: "/images/rexona.webp",
        },
      ],
    },
  ],
};
const Post = () => {
  return (
    <div className={styles.post}>
      <Meta
        title={`${post.title} | khumuivietnam.com`}
        description={post.description}
        keywords={`${post.title} ,${post.contents.map(
          (item) => `${item.title},`
        )} khumuivietnam.com, khumuivietnam shop`}
      />
      <BackLink
        list={[
          { href: "/", text: "Trang chủ" },
          { href: "/bai-viet", text: "Bài viết" },
          {
            href: `/bai-viet/${post.title
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/\s+/g, "-")
              .toLowerCase()}`,
            text: post.title,
          },
        ]}
      />
      <section className={styles.postWrapper}>
        <div className={styles.postCenter}></div>
        <aside className={styles.newPost}></aside>
      </section>
    </div>
  );
};

export default Post;
