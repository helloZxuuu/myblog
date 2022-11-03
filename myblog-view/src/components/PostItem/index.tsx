import React from "react";
import { BlogItem } from "../../types/blogItem";
import style from './index.module.scss'

interface PostItem {
  data: BlogItem
}

const PostItem: React.FC<PostItem> = props => {
  const {title} = props.data
  return (
    <div>
      <div>{title}</div>
    </div>
  )
}

export default PostItem
