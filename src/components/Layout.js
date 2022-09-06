import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { LayoutContainer } from "../css";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <HelmetProvider>
      <LayoutContainer>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Raleway:200,400,700&display=swap"
          />
        </Helmet>
        <Header />
        <div className="content">
          <main>{children}</main>
        </div>
        <footer>footer</footer>
      </LayoutContainer>
    </HelmetProvider>
  );
};

export default Layout;
