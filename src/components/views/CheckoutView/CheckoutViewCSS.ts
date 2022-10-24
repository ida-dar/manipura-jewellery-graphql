import { theme } from 'src/assets/theme/theme';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 100%;
`;

export const Textarea = styled.textarea`
  resize: vertical;
  width: 100%;
  margin: 24px 0;
  display: inline-block;
  min-height: 150px;
  padding: 18px 24px;
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
