import { theme } from 'src/assets/theme/theme';
import styled from 'styled-components';

interface HeaderProps {
  text: string;
  textAlign?: string | undefined;
  transform?: string | undefined;
  style?: string | undefined;
}

export const HeaderComponent = styled.h3`
  font-size: ${theme.font.size.highlight};
  font-family: ${theme.font.fontHighlight};
  font-style: ${(props: HeaderProps) => (props.style ? props.style : 'normal')};
  text-align: ${(props: HeaderProps) => (props.textAlign ? props.textAlign : 'center')};
  font-weight: 100;
  line-height: 143.3%;
  letter-spacing: 0;
  margin: 0 auto clamp(40px, 3.6458vw, 70px);
  color: ${theme.colors.primary};
  text-transform: ${(props: HeaderProps) => (props.transform ? props.transform : 'none')};
`;

const Header = ({ text, textAlign, transform, style }: HeaderProps) => {
  return (
    <HeaderComponent text={text} transform={transform} style={style} textAlign={textAlign}>
      {text}
    </HeaderComponent>
  );
};

export default Header;
