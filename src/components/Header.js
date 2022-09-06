import { Link } from "gatsby";
import React from "react";
import { HeaderContainer } from "../css";

const Header = () => {
  return (
    <HeaderContainer>
      Logo
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
