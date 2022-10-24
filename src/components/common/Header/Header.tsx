import { theme } from 'src/assets/theme/theme';
import styled from 'styled-components';

interface HeaderProps {
  text: string;
  textAlign?: string | undefined;
  transform?: string | undefined;
  fontStyle?: string | undefined;
  color?: string | undefined;
  fontSize?: string | undefined;
}

export const HeaderComponent = styled.h3`
  font-size: ${(props: HeaderProps) =>
    props.fontSize ? props.fontSize : 'calc(16px + ((36 * (100vw - 720px)) / 2040))'}; // magic number
  font-family: ${theme.font.fontHighlight};
  font-style: ${(props: HeaderProps) => (props.fontStyle ? props.fontStyle : 'normal')};
  text-align: ${(props: HeaderProps) => (props.textAlign ? props.textAlign : 'center')};
  font-weight: 100;
  line-height: 143.3%;
  letter-spacing: 0;
  margin: 0 auto clamp(40px, 3.5vw, 70px);
  color: ${(props: HeaderProps) => (props.color ? props.color : theme.colors.primary)};
  text-transform: ${(props: HeaderProps) => (props.transform ? props.transform : 'none')};
`;

const Header = ({ text, textAlign, transform, fontStyle, fontSize, color }: HeaderProps) => {
  return (
    <HeaderComponent
      text={text}
      transform={transform}
      fontStyle={fontStyle}
      fontSize={fontSize}
      color={color}
      textAlign={textAlign}
    >
      {text}
    </HeaderComponent>
  );
};

export default Header;
