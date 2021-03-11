import Link from "next/link";
import Meta from "../components/Meta";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const about = () => {
  const posts = useSelector((state) => state.post.posts);
  const router = useRouter();
  return (
    <div>
      <Meta title="About" />
      <h2>about</h2>
      <Link href="/">Home</Link>
      {posts?.map((post) => (
        <article key={post._id}>
          <h1 onClick={() => router.push(`/post/${post._id}`)}>{post.title}</h1>
          <img src={post.photoURL} alt={post.title} />
        </article>
      ))}
    </div>
  );
};

export default about;
