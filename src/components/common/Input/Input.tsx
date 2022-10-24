import { theme } from 'src/assets/theme/theme';
import styled from 'styled-components';

interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value?: any;
  pattern?: string;
  onChange?: any;
  required?: boolean;
  margin?: string;
}

export const Input = styled.input`
  display: inline-block;
  min-height: 50px;
  width: 100%;
  padding: 18px 24px;
  margin: ${(props: InputProps) => (props.margin ? props.margin : '10px 0')};
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

const InputComponent = ({ id, name, type, placeholder, value, onChange, pattern, required = false, margin }: InputProps) => {
  return (
    <Input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      pattern={pattern}
      required={required}
      placeholder={placeholder}
      margin={margin}
    />
  );
};

export default InputComponent;
