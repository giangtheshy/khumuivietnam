import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePost } from "../../store/actions/post.action";
import { useRouter } from "next/router";
const Post = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);
  const loading = useSelector((state) => state.post.loading);
  const router = useRouter();
  const id = router.query.id;
  useEffect(() => {
    if (id) {
      dispatch(getSinglePost(router.query.id));
      return () => dispatch(getSinglePost(null));
    }
  }, [id]);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Single Post</h1>
      <h1 onClick={() => router.push("/")}>{post.title}</h1>
      <img src={post.photoURL} alt={post.title} />
    </div>
  );
};

export default Post;
