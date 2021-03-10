import Link from "next/link";
import Meta from "../components/Meta";
import { useSelector } from "react-redux";
const about = () => {
  const posts = useSelector((state) => state.post.posts);
  return (
    <div>
      <Meta title="About" />
      <h2>about</h2>
      <Link href="/">Home</Link>
      {posts?.map((post) => (
        <article key={post._id}>
          <h1>{post.title}</h1>
          <img src={post.photoURL} alt={post.title} />
        </article>
      ))}
    </div>
  );
};

export default about;
