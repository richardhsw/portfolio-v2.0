import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Layout from "@components/Layout";
import NavBar from "@components/NavBar";

library.add(faBars);

function LandingPage() {
  return (
    <Layout>
      <NavBar />
      This is the landing page.
    </Layout>
  );
}

export default LandingPage;
