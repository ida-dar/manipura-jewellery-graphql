import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import PageToTop from './components/common/PageToTop/PageToTop';

// import routes
import { appRoutes } from './utils/routes';
import Home from './components/views/Home/Home';
import NotFound from './components/views/NotFound/NotFound';
import Login from './components/views/Login/Login';
import Register from './components/views/Register';
import ForgotPassword from './components/features/ForgotPassword/ForgotPassword';

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
    path: appRoutes.ACCOUNT,
    element: <Login />,
  },
  {
    path: appRoutes.FORGOT_PASSWORD,
    element: <ForgotPassword />,
  },
  {
    path: appRoutes.ACCOUNT_REGISTER,
    element: <Register />,
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
