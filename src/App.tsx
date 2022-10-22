import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import PageToTop from './components/common/PageToTop/PageToTop';

// import routes
import { appRoutes } from './utils/routes';
import Home from './components/views/Home/Home';
import NotFound from './components/views/NotFound/NotFound';
import AccountView from './components/views/AccountView/AccountView';
import Login from './components/views/Login/Login';
import Register from './components/views/Register';
import ForgotPassword from './components/features/ForgotPassword/ForgotPassword';
import Checkout from './components/views/Checkout/Checkout';

// Products
import { Jewellery, ProductView } from './components/views/Products';

interface RoutesInterface {
  path: string;
  element: JSX.Element;
}
const routes: RoutesInterface[] = [
  {
    path: appRoutes.HOME,
    element: <Home />,
  },
  {
    path: appRoutes.NOT_FOUND,
    element: <NotFound />,
  },
  {
    path: appRoutes.LOGIN,
    element: <Login />,
  },
  {
    path: appRoutes.ACCOUNT,
    element: <AccountView />,
  },
  {
    path: appRoutes.FORGOT_PASSWORD,
    element: <ForgotPassword />,
  },
  {
    path: appRoutes.ACCOUNT_REGISTER,
    element: <Register />,
  },
  {
    path: appRoutes.SINGLE_PRODUCT,
    element: <ProductView />,
  },
  {
    path: appRoutes.PRODUCTS.JEWELLERY,
    element: <Jewellery />,
  },
  {
    path: appRoutes.CHECKOUT,
    element: <Checkout />,
  },
];

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <PageToTop />
        <MainLayout>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={`${process.env.PUBLIC_URL}${route.path}`} element={route.element} />
            ))}
          </Routes>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;
