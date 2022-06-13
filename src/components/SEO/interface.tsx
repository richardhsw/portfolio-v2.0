export interface SeoProps {
  title?: string;
  description?: string;
  article?: boolean;
}

export interface SeoQuery {
  site: {
    siteMetadata: {
      defaultTitle: string;
      defaultDescription: string;
      siteUrl: string;
    };
  };
}
