import React from "react";
import { BlogItem } from "../../types/blogItem";
import style from "./index.module.scss";
import { AiOutlineEye, AiOutlineLike } from "react-icons/ai";
import { useRouter } from "next/router";

// export interface BlogItem {
//   id: string;
//   author: string;
//   createTime: string;
//   companyName: string;
//   contentType: string;
//   title: string;
//   content: string;
//   look: string | number;
//   good: string | number;
//   comment: string | number;
// }

interface BlogCard {
  data: BlogItem;
  file: string
}

const BlogCard: React.FC<BlogCard> = (props) => {
  const { id, title, createTime, content, good, look } = props.data;
  const router = useRouter()
  const handleClick = () => {
    router.push({
      pathname: `/posts/${id}`,
      query: {file: props.file},
    });
  }
  return (
    <div className={style.card} onClick={handleClick}>
      <div className={style.title}>{title}</div>
      <div className={style.time}>{createTime}</div>
      <div className={style.content}>{content}</div>
      <div className={style.actions}>
        <div>
          <AiOutlineLike />{look}
        </div>
        <div>
          <AiOutlineEye />{good}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
