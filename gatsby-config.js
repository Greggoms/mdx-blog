module.exports = {
  siteMetadata: {
    title: `mdx-blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    // It seems that the first usage step is useless.
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#usage
    //// "You’ll also want to configure gatsby-source-filesytem to point at your
    //// src/pages directory (even if you don’t want to create MDX pages from src/pages)."
    "gatsby-plugin-mdx",
    // for posts located outside of /src/pages
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/posts/",
      },
      __key: "posts",
    },
  ],
};
