import { NavLink } from 'react-router-dom';
import { font, theme } from 'src/assets/theme/theme';
import InputComponent from 'src/components/common/Input/Input';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  text-align: center;
  background-color: ${theme.colors.bgDarkColor};
  margin: 128px 0 0 0;
  padding: 72px 24px 64px 24px;
`;

export const Contact = styled.div`
  font-size: ${theme.font.size.subheader};
  font-family: ${font.fontHeader};
  font-style: italic;
  margin: 24px auto;
  width: 45vw;
  display: flex;
  justify-content: space-between;

  > * {
    color: ${theme.colors.primary};
    line-height: 125.8%;
    font-weight: 600;
    letter-spacing: 0.25em;
  }
`;

export const Form = styled.form`
  display: flex;
  margin: 0 auto;
`;

export const Newsletter = styled.p`
  display: block;
  max-width: 525px;
  margin: 24px auto 0 auto;
`;

export const Payments = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${theme.font.size.button};
  margin: 0;

  > * {
    margin: 0 12px;
    font-size: ${theme.font.size.highlight};
    line-height: ${theme.font.size.highlight};
  }
`;

export const RightsReserved = styled.p`
  margin: 64px 0 0 0;
  text-transform: uppercase;
  line-height: 125.8%;
  letter-spacing: 0.45em;
  font-size: ${theme.font.size.button};
`;

export const Developer = styled.span`
  display: inline-block;
  font-style: italic;
  font-family: ${theme.font.fontHighlight};
  font-size: 1.8rem;
  color: ${theme.colors.primary};
`;

export const NavLinkConatiner = styled.nav`
  margin: 0 auto;
`;

export const Svg = styled.svg`
  position: absolute;
  top: 84%;
  left: -23%;
  pointer-events: none;
  fill: none;
  stroke: ${theme.colors.primary};
  stroke-width: 1px;

  path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.8, 1, 0.7, 1);
    transition: stroke-dashoffset 0.4s cubic-bezier(0.7, 0, 0.3, 1);
  }
`;

export const NavLinks = styled(NavLink)`
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  color: ${theme.colors.black};
  margin: 24px;

  &:hover ${Svg} {
    path {
      stroke-dashoffset: 0;
      transition-duration: 0.3s;
      transition-timing-function: cubic-bezier(0.8, 1, 0.7, 1);
      transition: stroke-dashoffset 0.4s cubic-bezier(0.7, 0, 0.3, 1);
    }
  }
`;
