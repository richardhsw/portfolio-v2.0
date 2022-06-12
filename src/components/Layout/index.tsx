import React from "react";
import { LayoutProps } from "./interface";
import "./styles.css";

function Layout({ children }: LayoutProps) {
  return <div>{children}</div>;
}

export default Layout;
