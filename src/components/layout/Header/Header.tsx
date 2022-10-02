import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { appRoutes, Links } from 'src/utils/routes';

import { UserContext } from 'src/store/UserStore';
import { logoutUser } from 'src/utils/firebase/firebase';

import Logo from '../../common/Logo/Logo';
import { Col, Row } from '../../../assets/Flexbox';
import { AccountLink, Button, NavBar, NavBarLink, SubMenu } from './HeaderCSS';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons';

export interface AccountLink {
  path: string;
  name: string | JSX.Element;
  submenu: boolean;
}

const Header = () => {
  const { currUser } = useContext(UserContext);
  const accountLinks: AccountLink[] = [
    {
      path: appRoutes.ACCOUNT,
      name: currUser ? 'Account' : 'Login',
      submenu: true,
    },
    {
      path: appRoutes.CART,
      name: (
        <Button>
          <FontAwesomeIcon icon={faShoppingBag} />
        </Button>
      ),
      submenu: false,
    },
  ];

  const links: Links[] = [
    {
      path: appRoutes.PRODUCTS.JEWELLERY,
      name: 'Jewellery',
    },
    {
      path: appRoutes.PRODUCTS.NECKLACES,
      name: 'Necklaces',
    },
    {
      path: appRoutes.PRODUCTS.BRACELETS,
      name: 'Bracelets',
    },
    {
      path: appRoutes.PRODUCTS.EARRINGS,
      name: 'Earrings',
    },
    {
      path: appRoutes.PRODUCTS.RINGS,
      name: 'Rings',
    },
  ];

  const [active, setActive] = useState(false);

  const buttonOnClick = () => {
    setActive(!active);
  };

  const logout = async () => {
    try {
      await logoutUser();
    } catch (e) {
      console.log('Logout error: ', e);
    }
  };

  return (
    <Row lg={10} md={12} align="center" justify="space-between">
      <Col lg={4}>
        <NavLink to={`${process.env.PUBLIC_URL}/`}>
          <Logo />
        </NavLink>
      </Col>
      <Col lg={7} align="center" justify="flex-end">
        <NavBar>
          {links.map((link) => (
            <NavBarLink key={link.path} to={`${process.env.PUBLIC_URL}${link.path}`}>
              <span>{link.name}</span>
            </NavBarLink>
          ))}
          <Button onClick={buttonOnClick} isActive={active}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
          {accountLinks.map((link) => (
            <AccountLink key={link.path}>
              <NavLink to={`${process.env.PUBLIC_URL}${link.path}`}>{link.name}</NavLink>
              {link.submenu && currUser && (
                <SubMenu>
                  <Button onClick={logout}>Logout</Button>
                </SubMenu>
              )}
            </AccountLink>
          ))}
        </NavBar>
      </Col>
    </Row>
  );
};

Header.propTypes = {};

export default Header;
