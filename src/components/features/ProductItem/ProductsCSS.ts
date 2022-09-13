import styled from 'styled-components';
import { theme } from '../../../assets/theme/theme';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  width: 100%;
  height: 400px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Figcaption = styled.figcaption``;

export const Name = styled.h4`
  position: absolute;
  text-transform: uppercase;
  font-size: ${theme.font.size.subheader};
  color: ${theme.colors.black};
  top: 10px;
  left: 28px;
  transition: all 0.6s;
  opacity: 0;
  line-height: 125.8%;
  letter-spacing: 0.45em;
`;

export const Price = styled.p`
  position: absolute;
  bottom: 0px;
  font-size: ${theme.font.size.paragraph};
  color: ${theme.colors.black};
  right: 24px;
  opacity: 0;
  transition: all 0.6s ease;
  line-height: 145.8%;
  letter-spacing: 0.005rem;
`;

export const Figure = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  filter: grayscale(1);
  transition: all 0.6s;
  overflow: hidden;

  &:hover {
    filter: grayscale(0);
    transition: all 0.6s;
  }

  &:hover ${Name} {
    top: 25px;
    transition: all 0.6s ease;
    opacity: 1;
  }

  &:hover ${Price} {
    bottom: 12px;
    transition: all 0.6s ease;
    opacity: 1;
  }
`;
