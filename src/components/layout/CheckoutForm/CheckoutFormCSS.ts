import { theme } from 'src/assets/theme/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: -12.5%;
    height: 100%;
    width: 1px;
    background-color: ${theme.colors.grey200};
  }
`;

export const NextInputs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Select = styled.select`
  display: inline-block;
  min-height: 50px;
  width: 100%;
  padding: 18px 24px;
  margin: 10px 0 10px 10px;
  outline-style: none;
  color: ${theme.colors.black};
  line-height: 2.3rem;
  letter-spacing: 0.005em;
  font-weight: 300;
  border: 1px solid #c5c5c5;
  background-color: ${theme.colors.bgDarkColor};
  box-shadow: none;
  border-radius: 0;
`;
