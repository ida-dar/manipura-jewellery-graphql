import { Navigate } from 'react-router';

import { appRoutes, Links } from 'src/utils/routes';
import { selectCurrUser } from 'src/redux/userRedux';
import { useAppSelector } from 'src/utils/hooks';

import { Col, Row } from 'src/assets/Flexbox';
import { Link, NavBar } from './AccountViewCSS';

const AccountView = () => {
  const currUser = useAppSelector(selectCurrUser);

  const accountLinks: Links[] = [
    {
      path: appRoutes.ACCOUNT_VIEW.ORDERS,
      name: 'My orders',
    },
    {
      path: appRoutes.ACCOUNT_VIEW.ACCOUNT_DATA,
      name: 'Account data',
    },
  ];

  return (
    <Row lg={11} md={10} sm={12} justify="space-between" align="start">
      {currUser ? (
        <>
          <Col lg={4} md={6}>
            <NavBar>
              {accountLinks.map((link) => (
                <Link key={link.path} to={`${process.env.PUBLIC_URL}${link.path}`}>
                  {link.name}
                </Link>
              ))}
            </NavBar>
          </Col>
          <Col lg={8} md={6} sm={12}>
            <p>In progress...</p>
          </Col>
        </>
      ) : (
        <Navigate to={appRoutes.HOME} />
      )}
    </Row>
  );
};

export default AccountView;
