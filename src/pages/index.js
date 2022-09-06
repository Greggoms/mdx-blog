import React from "react";
import { graphql, Link } from "gatsby";
import { BlogPageContainer } from "../css";

const BlogPage = ({ data }) => {
  return (
    <BlogPageContainer>
      <ul>
        {data.allMdx.edges.map((post) => (
          <li key={post.node.id}>
            <Link to={post.node.fields.slug}>
              {post.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </BlogPageContainer>
  );
};

export default BlogPage;

export const result = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          body
          frontmatter {
            title
          }
          fields {
            slug
            timeToRead {
              text
            }
          }
        }
      }
    }
  }
`;
