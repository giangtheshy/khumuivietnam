import React, { useState } from "react";

import styles from "./RowProduct.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import convert from "utils/functions/convertLink";
import { GoTrashcan } from "react-icons/go";
import { BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "store/actions/post.action";
import * as apis from "apis";

const RowPost = ({ post, index, actions, deleteActions }) => {
  const [showBox, setShowBox] = useState(false);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleRemove = async () => {
    const c = confirm("Bạn có chắn muốn xóa bài viết này?");
    if (c) {
      await apis.removePost(post._id, token);
      deleteActions(post._id);
      alert("Đã xóa bài viết!");
    }
  };
  const handleEdit = () => {
    dispatch(editPost(post));
    router.push("/admin/post/create_post");
  };
  const date = new Date(post.createdAt);
  return (
    <tr className={styles.row}>
      <td>{index + 1}</td>
      <td className={styles.title}>
        <Link href={`/bai-viet/${convert(post.title)}`}>{post.title}</Link>
      </td>
      <td>{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</td>

      <td>
        <BiEdit className={styles.iconEdit} onClick={handleEdit} />
      </td>
      <td>
        {" "}
        <GoTrashcan className={styles.iconTrash} onClick={handleRemove} />
      </td>
    </tr>
  );
};

export default RowPost;
