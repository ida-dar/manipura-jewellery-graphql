import { Col, Row } from 'src/assets/Flexbox';
import { theme } from 'src/assets/theme/theme';
import styled from 'styled-components';

export const ItemContainer = styled(Row)`
  height: 175px;
  margin: 24px;
`;

export const ImageContainer = styled(Col)`
  width: 32.5%;
  height: 100%;
`;

export const Img = styled.img`
  height: 100%;
  min-width: 100%;
  object-fit: cover;
`;

export const InfoContainer = styled(Col)`
  width: 55%;
  height: 100%;

  > p {
    margin: 6px;
  }
`;

export const Header = styled.h4`
  font-size: 2.2rem;
  font-family: ${theme.font.fontHighlight};
  font-style: italic;
  text-align: left;
  font-weight: 100;
  line-height: 143.3%;
  letter-spacing: 0;
  color: ${theme.font.primary};
  text-transform: capitalize;
`;

export const PriceRef = styled.div`
  display: flex;
  flex-wrap: 'wrap';
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 80%;
`;

export const Price = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const RefId = styled.p`
  font-size: 1.15rem;
`;

export const ButtonContainer = styled(Row)`
  margin: 0;

  > p {
    margin: 0;
  }
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  margin: 0 24px;
  font-size: 2.5rem;
`;

export const RemoveBtn = styled.button`
  border: none;
  background: transparent;
  margin: 0 24px;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${theme.colors.grey100};
`;
