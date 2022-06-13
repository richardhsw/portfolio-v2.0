import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { SeoProps, SeoQuery } from "./interface";

const seoQuery = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
      }
    }
  }
`;

function SEO({ title, description, article = false }: SeoProps) {
  const { pathname } = useLocation();

  const {
    site: {
      siteMetadata: { defaultTitle, defaultDescription, siteUrl },
    },
  } = useStaticQuery<SeoQuery>(seoQuery);

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} htmlAttributes={{ lang: "en" }}>
      <meta name="description" content={seo.description} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
    </Helmet>
  );
}

export default SEO;
