import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { BlogItem } from "../../types/blogItem";
import PostItem from "../../components/PostItem";

interface Posts {
  data: BlogItem[];
}

const Posts: React.FC<Posts> = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <PostItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Posts;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get("http://localhost:4000/getHomeBlogList");

  return {
    props: { data: res.data.data },
  };
};
