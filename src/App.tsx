import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import PageToTop from './components/common/PageToTop/PageToTop';

// import routes
import Home from './components/views/Home/Home';
import NotFound from './components/views/NotFound/NotFound';

export interface RoutesInterface {
  path: string,
  element: any,
}

export const routes: RoutesInterface[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <PageToTop />
        <MainLayout>
          <Routes>
            {routes.map(route => (
              <Route key={route.path} path={`${process.env.PUBLIC_URL}${route.path}`} element={route.element} />
            ))}
          </Routes>
        </MainLayout>
    </BrowserRouter>
    );
  }
}

export default App;
