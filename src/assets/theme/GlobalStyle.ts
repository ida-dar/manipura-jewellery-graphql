import { createGlobalStyle } from 'styled-components';
import '../../vendors/normalize.css';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  *::selection {
    color: ${theme.colors.white};
    background: ${theme.colors.black};
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-size: 1.6rem;
    font-family: ${theme.font.fontMain};
    background-color: ${theme.colors.bgColor};
  }

  h1, h2, h3, h4, h5, span {
    margin: 0;
  }

  button {
    padding: 0;
    cursor: pointer;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  a, a:hover, a:visited {
    text-decoration: none;
    color: ${theme.colors.black};
  }
`;

export default GlobalStyle;
