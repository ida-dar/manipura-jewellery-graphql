import { Col, Row } from 'src/assets/Flexbox';
import { theme } from 'src/assets/theme/theme';
import styled from 'styled-components';

export const Header = styled.h4`
  font-size: 1.65rem;
  font-family: ${theme.font.fontHighlight};
  font-style: italic;
  text-align: left;
  font-weight: 100;
  line-height: 143.3%;
  letter-spacing: 0;
  color: ${theme.font.primary};
  text-transform: capitalize;
`;

export const ButtonContainer = styled(Row)`
  margin: 0;
`;

export const Price = styled(Col)`
  font-size: 1.7rem;
`;

export const RefId = styled.p`
  font-size: 1rem;
`;

export const Qty = styled.p`
  width: 10px;
  border: none;
  background: transparent;
  margin: 0 24px;
  outline-style: none;
  color: ${theme.colors.black};
  text-align: center;
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  margin: 0;
  font-size: 2.5rem;
`;

export const RemoveBtn = styled.button`
  border: none;
  background: transparent;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${theme.colors.grey100};
`;
