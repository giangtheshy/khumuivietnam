import Link from "next/link";
import Meta from "../components/Meta";
import { useRouter } from "next/router";
import { wrapper } from "../store/store";
import * as apis from "../apis";
import * as types from "../store/types";
const about = ({ posts }) => {
  const router = useRouter();
  return (
    <div>
      <Meta title="About" keywords="XkmShop,XkmShop shop, XkmShop team" description="XkmShop is the best shop" />
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
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  const { data } = await apis.getPosts();
  store.dispatch({ type: types.GET_POST, payload: data });
  return { props: { posts: store.getState().post.posts } };
});

export default about;
