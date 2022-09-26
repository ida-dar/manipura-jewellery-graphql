import { useState } from 'react';
import { Container, ImageWrapper, Motto, Image } from './IntroCSS';

const Intro = () => {
  const [coords, setCoords] = useState({ x: -300, y: 300 });

  const onMouseMove = (e: any) => {
    setCoords({
      x: e.screenX,
      y: e.screenY,
    });
  };

  return (
    <Container>
      <ImageWrapper onMouseMove={onMouseMove}>
        <Motto>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur possimus similique?</Motto>
        <Image src={`img/products/intro.jpg`} rotateX={coords.y / 50} rotateY={coords.x / -100} />
      </ImageWrapper>
    </Container>
  );
};

export default Intro;
