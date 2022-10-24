import { Row } from 'src/assets/Flexbox';
import { theme } from 'src/assets/theme/theme';
import styled from 'styled-components';

export const CartCounts = styled.div`
  width: 100%;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 48px;
`;

export const CartParts = styled(Row)`
  border-bottom: 1px solid ${theme.colors.grey200};
  padding: 21px 0;
  letter-spacing: 0.45em;
  line-height: 2.4rem;
`;
