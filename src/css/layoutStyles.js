import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
  grid-template-rows: min-content 1fr min-content;
  grid-template-areas:
    ". header ."
    ". content ."
    ". footer .";

  font-family: "Raleway", sans-serif;
  /* To keep footer at bottom. The rest is in gatsby-browser */
  height: 100%;

  header {
    grid-area: header;
  }

  .content {
    grid-area: content;
  }

  footer {
    grid-area: footer;
  }
`;
