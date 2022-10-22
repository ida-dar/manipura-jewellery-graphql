import { NavLink } from 'react-router-dom';
import { theme } from 'src/assets/theme/theme';
import styled, { keyframes } from 'styled-components';

interface CartProps {
  open: boolean;
}

const MoveUpInitial = keyframes`
	to {
		transform: translate3d(0, -105%, 0);
	}
`;

const MoveUpEnd = keyframes`
	from {
		transform: translate3d(0, 100%, 0);
	}
	to {
		transform: translate3d(0, 0, 0);
	}
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 40vw;
  background-color: ${theme.colors.grey200};
  z-index: 1000000;
  transform: ${(props: CartProps) => (props.open ? `translateX(0)` : `translateX(50vw)`)};
  transition: transform 0.45s ease;
`;

export const EmptyCartText = styled.h4`
  margin: 45vh auto;
  text-align: center;
`;

export const CartItems = styled.div`
  height: calc(100% - 100px);
  overflow-y: auto;
  scrollbar-color: ${theme.colors.primary};
  scrollbar-width: thin;

  /* width */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${theme.colors.bgDarkColor};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.bgDarkColor};
  }
`;

export const CartDiv = styled.div`
  height: 100%;
`;

export const CartButton = styled(NavLink)`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: 100px;
  border: none;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  padding: 1rem 2rem;
  margin: 0;
  pointer-events: auto;
  cursor: pointer;

  span {
    display: block;
    position: relative;
  }

  > span {
    overflow: hidden;
    mix-blend-mode: difference;
    text-transform: uppercase;
    line-height: 125.8%;
    font-weight: 600;
    letter-spacing: 0.25em;
  }

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    background: ${theme.colors.grey100};
    width: 100%;
    height: 100%;
    transform-origin: 50% 100%;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    transition: clip-path 0.2s, -webkit-clip-path 0.2s;
    transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1);
  }

  &:hover::before {
    transition-duration: 0.3s;
    -webkit-clip-path: polygon(0 0, 100% 0, 0 0, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 0 0, 0% 100%);
  }

  &:hover > span > span {
    animation: ${MoveUpInitial} 0.2s forwards, ${MoveUpEnd} 0.2s forwards 0.2s;
  }
`;
