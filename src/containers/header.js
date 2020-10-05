import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/root";
import logo from "../logo.svg";

export const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
};
