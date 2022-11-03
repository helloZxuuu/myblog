import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import dark from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";

interface CodeHighLight {
  children: string
}

const CodeHighLight: React.FC<CodeHighLight> = ({children}) => {
  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {children}
    </SyntaxHighlighter>
  );
}

export default CodeHighLight
