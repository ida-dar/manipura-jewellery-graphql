import React from 'react';
import GlobalStyle from '../assets/theme/GlobalStyle';
import { theme } from '../assets/theme/theme';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';

const MainTemplate = ({ children }: any) => {
  return (
    <>
      <Helmet title="Jewellery Store" />
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default MainTemplate;
