import Head from "next/head";
import { useRouter } from "next/router";

const defaultMeta = {
  title: "九日笔记",
  siteName: "九日笔记",
  description:
    "九日 个人博客，JS，TS，LeetCode，Vue，React，算法爱好者。座右铭：路漫漫其修远兮，吾将上下而求索。",
  keywords:
    "九日 个人博客，JS，TS，LeetCode，Vue，React，算法爱好者。座右铭：路漫漫其修远兮，吾将上下而求索。",
  // url: "https://blog.yangchaoyi.vip",
  type: "website",
  robots: "follow, index",
  // image: "https://help-assets.codehub.cn/enterprise/guanwang/favicon.ico",
};

interface SeoTempProps {
  data: string;
  templateTitle: string;
  isBlog: boolean;
  banner: string;
}

type SeoProps = Partial<SeoTempProps & typeof defaultMeta>;

const Seo: React.FC<SeoProps> = (props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta["title"] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.keywords} name="keywords" />
      <meta content={meta.description} name="description" />
      <meta property="" name="header_title" content="CODING 官网"></meta>
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      {/* <meta property="og:url" content={`${meta.url}${router.asPath}`} /> */}
      {/* <link rel="canonical" href={`${meta.url}${router.asPath}`} /> */}
      <link key="/favicon/favicon.ico" href="/favicon/favicon.ico" rel="icon" />
      {/* <meta name="theme-color" content="#ffffff" /> */}
    </Head>
  );
};

export default Seo;
