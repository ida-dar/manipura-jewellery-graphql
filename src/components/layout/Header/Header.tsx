import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { appRoutes, Links } from 'src/utils/routes';

import Logo from '../../common/Logo/Logo';
import { Col, Row } from '../../../assets/Flexbox';
import { Button, Link, LinkContainer, Mask, NavAccountLink, NavBar, NavBarLink } from './HeaderCSS';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons';

export interface AccountLinks {
  path: string;
  name: JSX.Element;
}

const Header = () => {
  const accountLinks: AccountLinks[] = [
    {
      path: appRoutes.ACCOUNT,
      name: <FontAwesomeIcon icon={faUser} />,
    },
    {
      path: appRoutes.CART,
      name: <FontAwesomeIcon icon={faShoppingBag} />,
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

  return (
    <Row lg={10} md={12} align="center" justify="space-between">
      <Col>
        <NavLink to={`${process.env.PUBLIC_URL}/`}>
          <Logo />
        </NavLink>
      </Col>
      <Col align="center" justify="flex-end">
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
            <NavAccountLink key={link.path} to={`${process.env.PUBLIC_URL}${link.path}`}>
              <Mask>
                <LinkContainer>
                  <Link>{link.name}</Link>
                  <Link>{link.name}</Link>
                </LinkContainer>
              </Mask>
            </NavAccountLink>
          ))}
        </NavBar>
      </Col>
    </Row>
  );
};

Header.propTypes = {};

export default Header;
