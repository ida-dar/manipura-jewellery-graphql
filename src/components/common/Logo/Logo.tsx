import { Div } from './LogoCSS';

export interface LogoProps {
  addDecoration?: boolean;
}

const Logo: React.FC<LogoProps> = ({ addDecoration = false }) => {
  return <Div addDecoration={addDecoration}>Manipura</Div>;
};

export default Logo;
