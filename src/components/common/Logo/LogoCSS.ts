import styled from 'styled-components';
import { theme } from '../../../assets/theme/theme';

export const Div = styled.div`
  height: 100px;
  font-family: ${theme.font.fontHighlight};
  font-size: ${theme.font.size.header};
  font-weight: 400;
  text-transform: uppercase;
  color: ${theme.colors.black};
  line-height: 1.5;
  letter-spacing: 0.25rem;
`;

export {};
