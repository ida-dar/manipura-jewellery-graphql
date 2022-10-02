import { Col } from 'src/assets/Flexbox';
import { appRoutes, Links } from 'src/utils/routes';
import { Link, NavBar } from './AccountViewCSS';

const AccountView = () => {
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
  );
};

export default AccountView;
