import { NavLink } from 'react-router-dom';
import { theme } from 'src/assets/theme/theme';
import styled, { keyframes } from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const LinkAnimation = keyframes`
  0% {
    transform: scale3d(1, 0, 1);
    transform-origin: 0%;
  }
  50% {
    transform: scale3d(1, 1, 0);
    transform-origin: 0%;
  }
  100% {
    transform: scale3d(0, 1, 1);
    transform-origin: 0%;
  }
`;

export const Link = styled(NavLink)`
  width: fit-content;
  color: ${theme.colors.black};
  position: relative;
  padding: 8px 0;
  letter-spacing: 0.2em;

  &::before,
  &::after {
    position: absolute;
    content: '';
    left: 0;
    width: 100%;
    background: ${theme.colors.secondary};
  }

  &::after {
    bottom: 0;
    height: 1px;
    width: 150px;
    opacity: 1;
    transition: width 0.5s ease;
  }

  &::before {
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
  }

  :hover::after {
    width: 100%;
    transition: width 0.5s ease;
  }

  :hover::before {
    opacity: 1;
    background-color: ${theme.colors.secondary};
    animation-name: ${LinkAnimation};
    animation-duration: 0.55s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }
`;
