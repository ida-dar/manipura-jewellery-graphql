import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '../../../assets/theme/theme';
import { NavLink } from 'react-router-dom';
import Logo from '../../common/Logo/Logo';

export interface Links {
  [key: string]: string,
}

const Header = () => {
  const links: Links[] = [
    {
      path: '/account',
      name: 'Account',
    },
    {
      path: '/basket',
      name: 'Basket',
    },
  ];

  return (
    <div>
      <NavLink to={`${process.env.PUBLIC_URL}/`}><Logo /></NavLink>
      <nav>
        {links.map((link) => (
          <NavLink key={link.name} to={`${process.env.PUBLIC_URL}${link.path}`}>
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

Header.propTypes = {};

export default Header;
