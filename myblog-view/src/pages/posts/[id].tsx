import { useRouter } from "next/router";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import React from "react";
import { readFile } from "../../common/readFIle";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout";

interface PostsProps {
  data: any;
}

const Posts: React.FC<PostsProps> = ({ data }) => {
  // if (!data) return <div>loading</div>;
  return (
    <Layout>
      <ReactMarkdown children={data} />
    </Layout>
  );
};

export default Posts;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const filename: string = context.query.file as string
  // console.log(filename);
  const mdFile = await readFile(filename);
  return {
    props: { data: mdFile },
  };
};
// export const getStaticProps: GetStaticProps<any, any> = async (context) => {
//   const { id } = context.params;
//   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
//     (data) => data.json()
//   );
//   return {
//     props: { data: res },
//     revalidate: 10 // 最多存活10s
//   };
// };
// export const getStaticPaths: GetStaticPaths = async (context) => {
//   return {
//     paths: [{ params: { id: "1" } }, { params: { id: "35" } }],
//     fallback: false,
//   };
// };
