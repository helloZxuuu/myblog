import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { BlogItem } from "../../types/blogItem";
import BlogCard from "../../components/BlogCard";
import Layout from "../../components/layout";
import { getFiles } from "../../common/readFIle";

interface Posts {
  data: BlogItem[];
  files: string[];
}

const Posts: React.FC<Posts> = ({ data, files }) => {
  return (
    <Layout>
      <div>
        {data.map((item, index) => (
          <BlogCard key={item.id} data={item} file={files[index]} />
        ))}
      </div>
    </Layout>
  );
};

export default Posts;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:4000/getHomeBlogList`).then(
    (data) => data.json()
  );
  const files = await getFiles();

  return {
    props: { data: res.data, files },
  };
};
