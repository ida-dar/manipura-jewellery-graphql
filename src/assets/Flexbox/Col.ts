import styled from 'styled-components';
import { ColProps } from '../../interfaces/Flexbox.interfaces';

const Col = styled.div<ColProps>`
  display: flex;
  width: 100%;
  padding: 10px;
  flex-direction: column;
  max-width: ${({ lg }) => lg && (lg < 12 ? `${(100 * lg) / 12}%` : '100%')};
  ${({ justify }) => justify && `justify-content: ${justify}`};
  ${({ align }) => align && `align-items: ${align}`};

  @media (max-width: 754px) {
    max-width: ${({ md }) => md && (md < 12 ? `${(100 * md) / 12}%` : '100%')};
    order: ${({ orderMd }) => orderMd && (orderMd < 12 ? `${(100 * orderMd) / 12}%` : '100%')};
  }

  @media (max-width: 576px) {
    max-width: ${({ sm }) => sm && (sm < 12 ? `${(100 * sm) / 12}%` : '100%')};
    order: ${({ orderSm }) => orderSm && (orderSm < 12 ? `${(100 * orderSm) / 12}%` : '100%')};
    &:last-child {
      margin-bottom: unset;
    }
  }
`;

export default Col;
