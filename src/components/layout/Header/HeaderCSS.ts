import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../../assets/theme/theme';

interface ButtonProps {
  isActive?: boolean;
}

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
  text-transform: uppercase;

  &::before {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    bottom: -5px;
    left: 0;
    transform: skew(0, 3deg);
    background: linear-gradient(#65dac7, #65dac7); // secondary colour
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 0 100%;
    transition: background-size 0.5s ease;
  }

  span {
    position: relative;
    white-space: nowrap;
  }

  :not(.active) {
    span::before,
    span::after {
      content: '';
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
  }

  &.active::before {
    background-size: 100% 100%;
    transition: background-size 0.5s ease;
  }
`;

export const Button = styled.button`
  background-color: unset;
  border: none;
  cursor: pointer;
  color: ${(props: ButtonProps) => (props.isActive ? theme.colors.secondary : theme.colors.black)};
  transition: color 0.4s ease;
`;

export const SubMenu = styled.span`
  position: absolute;
  bottom: -3px;
  left: 0;
  opacity: 0;
  padding-top: 16px;
  transform: translateY(0);
  transition: opacity 0.5s ease, transform 0.5s ease-in-out;
`;

const accountLinkAnimation = keyframes`
  0% {
    transform: scale3d(1, 0.05, 1);
    transform-origin: 50% 100%;
  }

  50% {
    transform: scale3d(1, 1, 1);
    transform-origin: 50% 100%;
  }

  51% {
    transform: scale3d(1, 1, 1);
    transform-origin: 50% 0%;
  }

  100% {
    transform: scale3d(1, 0.05, 1);
    transform-origin: 50% 0%;
  }
`;

export const AccountLink = styled.p`
  position: relative;
  text-align: center;
  text-transform: uppercase;

  > * {
    color: ${theme.colors.black};
  }

  &:first-of-type::before {
    content: '';
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: transparent;
  }

  :hover::before {
    opacity: 1;
    width: 100%;
    background-color: ${theme.colors.primary};
    animation-name: ${accountLinkAnimation};
    animation-duration: 0.45s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }

  :hover ${SubMenu} {
    opacity: 1;
    transform: translateY(24px);
    transition: opacity 1s ease, transform 0.5s ease-in-out;
  }
`;
