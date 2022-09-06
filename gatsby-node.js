const path = require("path");
const readingTime = require(`reading-time`);
const slugify = require(`@sindresorhus/slugify`);
const postTemplate = path.resolve(`./src/templates/post.js`);

// gatsby-plugin-mdx breaking changes
//
// Some auto-created graphql fields have been removed.
// This is the recommended way to re-add fields such as
// timeToRead and the slug.
// https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#extending-the-graphql-mdx-nodes
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body),
    });
    createNodeField({
      node,
      name: `slug`,
      value: `/${slugify(node.frontmatter.title)}`,
    });
  }
};

// Creating pages with data that's returned from graphql queries.
// It seems that this bypasses the need for gatsby-plugin-page-creator
// as documented in the gatsby-plugin-mdx Usage section.
// https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#usage
//
//// "To automatically create pages from MDX files outside of src/pages you’ll
//// need to configure gatsby-plugin-page-creator and gatsby-source-filesystem
//// to point to this folder of files."
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            title
          }
          internal {
            contentFilePath
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors);
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes;

  // you'll call `createPage` for each result
  posts.forEach((node) => {
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: node.fields.slug,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      // https://www.gatsbyjs.com/docs/how-to/routing/mdx/#make-a-layout-template-for-your-posts
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });
};
