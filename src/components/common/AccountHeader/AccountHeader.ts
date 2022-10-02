import { theme } from 'src/assets/theme/theme';
import styled from 'styled-components';

export const Header = styled.h3`
  font-size: ${theme.font.size.highlight};
  font-family: ${theme.font.fontHeader};
  font-style: italic;
  text-align: center;
  font-weight: 600;
  margin: 12px;
  color: ${theme.colors.primary};
`;
