import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../../assets/theme/GlobalStyle';
import { theme } from '../../../assets/theme/theme';
import { useAppDispatch } from 'src/utils/hooks';
import { fetchProductsStart } from 'src/redux/products/productActions';

import { Container } from '../../../assets/Flexbox/index';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export interface Props {
  children: React.ReactNode | JSX.Element | JSX.Element[]; // best, accepts everything React can render
  childrenElement?: JSX.Element; // A single React element
  style?: React.CSSProperties; // to pass through style props
}

const MainLayout = ({ children }: Props) => {
  const lang = 'en';

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  return (
    <>
      <Helmet title="Manipura - Fine Jewellery" htmlAttributes={{ lang }}>
        <meta name="description" content="Exquisitely Handcrafted Jewellery" />
        <meta name="keywords" content="Jewellery, Gold, Silver, 3D" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;300&family=Raleway:wght@200;300&family=Jost:wght@100;200;300&family=Playfair+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Header />
      <Container>
        <ThemeProvider theme={theme}>
          <main>{children}</main>
        </ThemeProvider>
      </Container>
      <Footer />
    </>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
