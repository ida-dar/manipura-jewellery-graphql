import { appRoutes } from 'src/utils/routes';
import { NavLink } from 'react-router-dom';

import { Row } from 'src/assets/Flexbox';
import ButtonComponent from 'src/components/common/Button/Button';
import styled from 'styled-components';
import { theme } from 'src/assets/theme/theme';
import ParticlesBg from 'particles-bg';

const Text = styled.p`
  text-transform: capitalize;
  font-size: ${theme.font.size.highlight};
  font-family: ${theme.font.fontHeader};
`;

const Logo = styled.p`
  font-family: ${theme.font.fontHighlight};
  font-style: italic;
  font-size: 20rem;
  background: -webkit-linear-gradient(#b10905, #000);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 64px 0;
  padding: 0;
`;

const NotFound = () => {
  let config = {
    num: [4, 7],
    rps: 0.1,
    g: 5,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [0.1, 0.4],
    position: 'all',
    color: ['random', '#ff0000'],
    cross: 'dead',
    random: 15,
  };

  return (
    <Row lg={10} textAlign="center" direction="column" justify="center">
      <Text>We lost this page</Text>
      <Logo>404</Logo>
      <NavLink to={`${process.env.PUBLIC_URL}${appRoutes.HOME}`}>
        <ButtonComponent width={250} text="Return to homepage" />
      </NavLink>
      <ParticlesBg type="custom" config={config} bg={true} />
    </Row>
  );
};

export default NotFound;
