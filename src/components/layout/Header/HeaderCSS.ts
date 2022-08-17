import styled from 'styled-components';
import { theme } from '../../../assets/theme/theme';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const NavBarLink = styled(NavLink)`
  color: ${theme.colors.black};
  position: relative;
  text-align: center;

  span {
    position: relative;
    white-space: nowrap;
  }

  span::before,
  span::after {
    position: absolute;
    width: 100%;
    height: 1px;
    background: ${theme.colors.secondary};
    top: 100%;
    left: 0;
    pointer-events: none;
  }

  span::before {
    content: '';
  }

  span::before,
  span::after {
    position: absolute;
    width: 100%;
    height: 1px;
    background: ${theme.colors.secondary};
    top: 100%;
    left: 0;
    pointer-events: none;
  }

  span::before {
    transform-origin: 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
  }

  span:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1.5, 1);
    transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1);
  }

  span::after {
    content: '';
    top: calc(100% + 4px);
    transform-origin: 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.4s 0.1s cubic-bezier(0.2, 1, 0.8, 1);
  }

  span:hover::after {
    transform-origin: 50% 0%;
    transform: scale3d(1, 1, 1);
    transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1);
  }

  &.active::before {
    content: '';
    position: absolute;
    height: 3px;
    width: 75%;
    bottom: -5px;
    left: 13%;
    background: ${theme.colors.secondary};
  }
`;

export const NavAccountLink = styled(NavLink)`
  position: relative;
  display: flex;
  padding: 10px 0;
  align-items: center;
  font-size: ${theme.font.size.paragraph};
  color: ${theme.colors.black};
  transition: color 0.4s ease;
  overflow: hidden;

  &:hover i:first-of-type {
    transform: translateX(-35px);
  }

  &:hover i:last-of-type {
    transform: translateX(0);
  }

  &.active {
    transition: color 0.4s ease;
    color: ${theme.colors.secondary};
  }
`;

export const Mask = styled.span`
  position: relative;
  padding: 0;
  height: 30px;
  width: 30px;
  display: flex;
  transition: transform 0.45s ease;

  &:hover {
    transform: translateX(-45px);
  }
`;

export const LinkContainer = styled.div`
  transition: transform 0.4s ease;
  display: flex;
  flex-direction: row;
`;

export const Link = styled.span`
  display: inline-block;
  transition: color 0.4s ease;
  line-height: 30px;
  height: 17px;
  width: 17px;

  &:first-of-type {
    transform-origin: right left;
  }

  &:last-of-type {
    transform-origin: left right;
    transform: translateX(35px);
  }
`;
