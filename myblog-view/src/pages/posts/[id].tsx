import { useRouter } from "next/router";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import React from "react";

interface PostsProps {
  data: any;
}

const Posts: React.FC<PostsProps> = ({ data }) => {
  console.log(data);
  if (!data) return <div>loading</div>;
  return (
    <div>
      <h2>{data.name}</h2>
      <div>height: {data.height}</div>
      <div>weight: {data.weight}</div>
      <div>
        <Image
          src={data.sprites.front_default}
          alt="pokemon pic"
          height={400}
          width={400}
        />
      </div>
    </div>
  );
};

export default Posts;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { id } = context.query;
//   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
//     (data) => data.json()
//   );
//   return {
//     props: { data: res },
//   };
// };
export const getStaticProps: GetStaticProps<any, any> = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
    (data) => data.json()
  );
  return {
    props: { data: res },
    revalidate: 10 // 最多存活10s
  };
};
export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "35" } }],
    fallback: false,
  };
};
