import React from "react";

import { wrapper } from "../../store/store";
import axios from "../../apis/axios";
import { useRouter } from "next/router";
import { getSinglePost } from "../../store/actions/post.action";
const Post = ({ post, loading }) => {
  const router = useRouter();
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1 onClick={() => router.push(`/`)}>Single Post</h1>
      <h1 onClick={() => router.push(`/post/${post._id}/${post.title}`)}>{post.title}</h1>
      <img src={post.photoURL} alt={post.title} />
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store, params }) => {
  const id = params.id;

  store.dispatch(getSinglePost(id));

  return { props: { post: store.getState().post.post, loading: store.getState().post.loading } };
});
export const getStaticPaths = async () => {
  const { data } = await axios.get("/api/posts");
  const paths = data.map((post) => ({
    params: { id: post._id },
  }));
  return { paths, fallback: false };
};
export default Post;
