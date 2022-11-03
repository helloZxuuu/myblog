import React from "react";
import style from './index.module.scss'
import Header from "./Header";
import { navs } from "../../common/navsData";

interface Layout {
  children: React.ReactNode;
}

const Layout: React.FC<Layout> = (props) => {
  const { children } = props;
  return (
    <>
      <Header navs={navs} />
      <div className={style.body}>
        <div className={style.content}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
