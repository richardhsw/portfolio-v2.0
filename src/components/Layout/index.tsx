import React from "react";
import SEO from "@components/SEO";
import { LayoutProps } from "./interface";
import "./styles.module.css";

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <SEO />
      {children}
    </div>
  );
}

export default Layout;
