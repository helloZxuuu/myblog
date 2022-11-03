import React from "react";
import style from "./index.module.scss";
import { Navs } from "../../../common/navsData";

interface HeaderProps {
  navs: Navs;
}

const Header: React.FC<HeaderProps> = ({ navs }) => {
  return (
    <header className={style.header}>
      <div className={style.navs}>
        {navs.map((nav, index) => (
          <a key={index} href={nav.link}>
            {nav.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
