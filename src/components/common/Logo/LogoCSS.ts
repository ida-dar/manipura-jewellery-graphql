import styled, { css } from 'styled-components';
import { theme } from '../../../assets/theme/theme';
import { LogoProps } from './Logo';

const after = css`
  &::after {
    content: '';
    position: absolute;
    background-color: ${theme.colors.primary};
    height: 1px;
    width: 250px;
    bottom: 15px;
    left: 9%;
    transform: skew(0, 6deg);
  }
`;

export const Div = styled.div`
  ${(props: LogoProps) => props.addDecoration && `position: relative`};
  height: 80px;
  font-family: ${theme.font.fontHighlight};
  font-size: ${theme.font.size.header};
  font-weight: 400;
  text-transform: uppercase;
  color: ${theme.colors.black};
  line-height: 1.5;
  letter-spacing: 0.25rem;
  font-style: italic;

  ${(props: LogoProps) => props.addDecoration && after}
`;

export {};
