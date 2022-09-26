import { theme } from 'src/assets/theme/theme';
import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  min-height: 50px;
  min-width: 450px;
  padding: 18px 24px;
  margin: 10px;
  outline-style: none;
  color: ${theme.colors.black};
  line-height: 2.3rem;
  letter-spacing: 0.005em;
  font-weight: 300;
  border: 1px solid #c5c5c5;
  background-color: #e6e6e6;
  box-shadow: none;
  border-radius: 0;
`;

const InputComponent = (
  name: string,
  type: string,
  placeholder: string,
  value?: string,
  onChange?: any,
  required = false
) => {
  return <Input name={name} type={type} value={value} onChange={onChange} required={required} placeholder={placeholder} />;
};

export default InputComponent;
