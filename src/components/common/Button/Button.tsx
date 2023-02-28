import { theme } from 'src/assets/theme/theme';
import styled from 'styled-components';

interface ButtonProps {
  width?: number | string;
  text?: string;
  icon?: JSX.Element;
  onClick?: any;
  type?: 'button' | 'reset' | 'submit' | undefined;
  reverseColors?: boolean;
  margin?: string;
  textTransform?: string;
  disabled?: boolean;
}

const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  background: ${(props: ButtonProps) => (props.reverseColors ? theme.colors.black : theme.colors.bgColor)};
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${(props: ButtonProps) => (props.reverseColors ? theme.colors.white : theme.colors.black)};
  }

  &::before {
    width: 110%;
    height: 0;
    padding-bottom: 110%;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 1);
  }

  &::after {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s;
  }
`;

const Button = styled.button`
  position: relative;
  display: 'inline-block';
  height: 50px;
  pointer-events: auto;
  cursor: pointer;
  border: ${(props: ButtonProps) => `1px solid ${props.reverseColors ? theme.colors.white : theme.colors.black}`};
  width: ${(props: ButtonProps) => (typeof props.width === 'number' ? `${props.width}px` : props.width) || '200px'};
  padding: 0;
  margin: ${(props: ButtonProps) => (props.margin ? props.margin : '12px')};
  background: none;
  color: ${(props: ButtonProps) => (props.reverseColors ? theme.colors.black : theme.colors.white)};
  font-weight: bold;
  text-transform: ${(props: ButtonProps) => (props.textTransform ? props.textTransform : 'normal')};

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:hover ${Span}::before {
    transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);
    transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
  }

  &:hover ${Span}::after {
    opacity: 1;
    transition-duration: 0.01s;
    transition-delay: 0.3s;
  }
`;

const ButtonContent = styled.p`
  display: block;
  margin: 0;
  position: relative;
  padding: 1.5rem 3rem;
  mix-blend-mode: difference;
  ${(props: ButtonProps) => props.reverseColors && `color: ${theme.colors.white}`};
`;

const ButtonComponent = ({
  text,
  icon,
  onClick,
  type,
  width,
  reverseColors = false,
  margin,
  textTransform,
  disabled,
}: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      width={width}
      reverseColors={reverseColors}
      margin={margin}
      textTransform={textTransform}
      disabled={disabled}
    >
      <Span reverseColors={reverseColors} />
      <ButtonContent reverseColors={reverseColors}>
        {text} {icon}
      </ButtonContent>
    </Button>
  );
};

export default ButtonComponent;
