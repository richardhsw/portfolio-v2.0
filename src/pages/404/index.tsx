import React from "react";
import Layout from "@components/Layout";
import * as styles from "./styles.module.css";

function NotFoundPage() {
  return (
    <Layout>
      <div className={styles.ErrorContainer}>
        <h1>404 - Uh oh</h1>
        <p>Sorry, this page doesn't exist!</p>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
