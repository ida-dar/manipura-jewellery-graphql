import styled from 'styled-components';
import { RowProps } from './interfaces';

const Row = styled.div<RowProps>`
  display: flex;
  margin: 10px auto;
  padding: 10px 0;
  flex-direction: row;
  max-width: ${({ lg, gapMd = 1 }) => (lg && lg < 12 ? `${(100 * lg) / 12 - gapMd}%` : '100%')};
  ${({ justify }) => justify && `justify-content: ${justify}`};
  ${({ align }) => align && `align-content: ${align}`};

  @media (max-width: 768px) {
    max-width: ${({ md, gapMd = 1 }) => (md && md < 12 ? `${(100 * md) / 12 - gapMd}%` : '100%')};
  }

  @media (max-width: 576px) {
    max-width: ${({ sm, gapSm = 1 }) => (sm && sm < 12 ? `${(100 * sm) / 12 - gapSm}%` : '100%')};
  }
`;

export default Row;
