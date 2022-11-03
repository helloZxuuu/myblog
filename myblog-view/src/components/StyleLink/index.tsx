import React from "react";
import style from "./index.module.scss";

type Target = '_blank' | '_self'

interface StyleLink {
  href: string;
  children: string;
  target?: Target;
}

const StyleLink: React.FC<StyleLink> = ({ href, children, target }) => {
  return (
    <a
      className={style.styleLink}
      href={href}
      target={target}
    >
      {children}
    </a>
  );
};

export default StyleLink;
