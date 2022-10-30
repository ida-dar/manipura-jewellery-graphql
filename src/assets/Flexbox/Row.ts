import styled from 'styled-components';
import RowProps from '../../interfaces/Flexbox.interfaces';

const Row = styled.div<RowProps>`
  display: flex;
  margin: ${({ noGutters }) => (noGutters ? '10px 0' : '10px auto')};
  padding: ${({ noGutters }) => (noGutters ? '0' : '10px 0')};
  ${({ direction }) => (direction ? `flex-direction: ${direction}` : `flex-direction: row`)};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
  ${({ wrap }) => wrap && `flex-wrap: ${wrap}`};
  max-width: ${({ lg, gapMd = 1 }) => (lg && lg < 12 ? `${(100 * lg) / 12 - gapMd}%` : '100%')};
  ${({ justify }) => justify && `justify-content: ${justify}`};
  ${({ align }) => align && `align-items: ${align}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};

  @media (max-width: 768px) {
    max-width: ${({ md, gapMd = 1 }) => (md && md < 12 ? `${(100 * md) / 12 - gapMd}%` : '100%')};
  }

  @media (max-width: 576px) {
    max-width: ${({ sm, gapSm = 1 }) => (sm && sm < 12 ? `${(100 * sm) / 12 - gapSm}%` : '100%')};
  }
`;

export default Row;
