import Link from "next/link";
import Meta from "../components/Meta";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { wrapper } from "../store/store";
import { getPosts } from "../store/actions/post.action";
const about = ({ posts }) => {
  const router = useRouter();
  return (
    <div>
      <Meta title="About" />
      <h2>about</h2>
      <Link href="/">Home</Link>
      {posts?.map((post) => (
        <article key={post._id}>
          <Link href={`/post/[id]`} as={`/post/${post._id}`}>
            Detail post
          </Link>
          <h1 onClick={() => router.push(`/post/${post._id}`)}>{post.title}</h1>
          <img src={post.photoURL} alt={post.title} />
        </article>
      ))}
    </div>
  );
};
export const getStaticProps = wrapper.getStaticProps(({ store }) => {
  store.dispatch(getPosts());
  return { props: { posts: store.getState().post.posts } };
});

export default about;
