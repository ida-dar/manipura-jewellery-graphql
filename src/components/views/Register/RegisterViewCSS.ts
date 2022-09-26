import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'src/assets/theme/theme';

export const Link = styled(NavLink)`
  position: relative;
  display: inline-block;
  width: fit-content;
  color: ${theme.colors.black};
  line-height: 1.518;

  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: ${theme.colors.primary};
    transition: background-color 0.2s;
  }

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    padding: 0 4px;
    pointer-events: none;
    width: 100%;
    height: 100%;
    opacity: 0;
    border: 2px solid ${theme.colors.primary};
    transform: scale(0.8333);
    transition: opacity 0.2s, transform 0.2s;
  }

  &:hover {
    &::before {
      background-color: transparent;
      transition: background-color 0.2s;
    }

    &::after {
      opacity: 1;
      transform: scale(1.2);
      transition: opacity 0.2s, transform 0.2s;
    }
  }
`;
