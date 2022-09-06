import styled from "styled-components";

export const BlogPageContainer = styled.section`
  a {
    color: ${(props) => props.theme.colors.linkDark};
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }
`;
