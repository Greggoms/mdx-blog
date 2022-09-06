import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding: 1.5rem;

  nav {
    grid-column: 2;
    justify-self: center;
  }
`;
