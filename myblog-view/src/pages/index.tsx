import Head from "next/head";
import Image from "next/image";
import style from '../styles/Index.module.scss'
import Layout from "../components/layout";
import Seo from "../components/Seo";
import { GetStaticProps } from "next";
import StyleLink from "../components/StyleLink";

export default function Home({ data }: { data: any }) {
  const {title, email, desc, techStack, csdn, yuque, github, gitee} = data.data
  
  return (
    <Layout>
      <Seo />
      <div className={style.indexContent}>
        <p className={style.title}>{title}</p>
        <p>{desc}</p>
        <p>{techStack}</p>
        <p>Email: {email}</p>
        <p>
          Find me on <StyleLink href={csdn}>csdn</StyleLink>
          {"、"}
          <StyleLink href={yuque}>yuque</StyleLink>
          {"、"}
          <StyleLink href={github}>github</StyleLink>
          {"、"}
          <StyleLink href={gitee}>gitee</StyleLink>
        </p>
        <p>
          <StyleLink href={"/posts"} target={"_self"}>
            To Blog
          </StyleLink>{" "}
          <StyleLink href={""} target={"_self"}>
            To Project
          </StyleLink>
        </p>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<any, any> = async (context) => {
  const res = await fetch(`http://localhost:4000`).then((data) => data.json());
  return {
    props: { data: res },
  };
};
