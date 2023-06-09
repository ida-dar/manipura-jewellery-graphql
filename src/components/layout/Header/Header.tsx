import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { appRoutes, Links } from 'src/utils/routes';
import { selectCurrUser } from 'src/redux/user/userSelector';
import { useAppDispatch, useAppSelector } from 'src/utils/hooks';

import Logo from '../../common/Logo/Logo';
import CartButton from 'src/components/common/CartButton/CartButton';
import MiniCart from 'src/components/features/MiniCart/MiniCart';
import { Col, Row } from '../../../assets/Flexbox';
import { AccountLink, Button, CartBtnClose, NavBar, NavBarLink, SubMenu } from './HeaderCSS';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { signOutStart } from 'src/redux/user/userActions';

export interface AccountLink {
  path: string;
  name: string | JSX.Element;
  submenu: boolean;
}

const Header = () => {
  const currUser = useAppSelector(selectCurrUser);

  const [active, setActive] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const location = useLocation();
  const dispatch = useAppDispatch();

  const accountLinks: AccountLink[] = [
    {
      path: currUser ? appRoutes.ACCOUNT : appRoutes.LOGIN,
      name: currUser ? 'Account' : 'Login',
      submenu: true,
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

  useEffect(() => {
    setOpenCart(false);
  }, [location]);

  const buttonOnClick = () => {
    setActive(!active);
  };

  const logout = () => {
    try {
      dispatch(signOutStart());
    } catch (e) {
      console.log('Logout error: ', e);
    }
  };

  return (
    <>
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
            <Button onClick={() => setOpenCart(true)}>
              <CartButton />
            </Button>
          </NavBar>
        </Col>
      </Row>
      <>
        {
          <CartBtnClose open={openCart} onClick={() => setOpenCart(false)}>
            <FontAwesomeIcon icon={faClose} />
          </CartBtnClose>
        }
        <MiniCart open={openCart} />
      </>
    </>
  );
};

Header.propTypes = {};

export default Header;
