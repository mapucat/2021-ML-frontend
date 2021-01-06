import "./layout.template.scss";

import Header from '../../organisms/header/header';
import React from "react";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header></Header>
      <main className="t-layout">
        { children }
      </main>
    </React.Fragment>
  );
};

export default Layout;
