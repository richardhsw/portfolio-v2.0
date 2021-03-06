import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "Richard Hsu | Software Engineer",
    description:
      "Software engineer portfolio website for Richard Hsu (aka Sheng-Wei Hsu).",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: { "@components": path.resolve(__dirname, "src/components") },
        extensions: ["tsx"],
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};

export default config;
