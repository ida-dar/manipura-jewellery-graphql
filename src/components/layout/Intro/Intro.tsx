import { theme } from "../../../assets/theme/theme";
import { useEffect, useState } from "react";
import styled from "styled-components"

const Intro = () => {

  const [coords, setCoords] = useState({x: -300, y: 300});

  const onMouseMove = (e: any) => {
    setCoords({
      x: e.screenX,
      y: e.screenY
    })
  }

  const Image = styled.img`
    width: 50%;
    height: 100%;
    object-fit: contain;
    transform: perspective(1000px) rotateY(${coords.x / 100}deg) rotateX(${coords.y / 50}deg);
    transition: transform ease-in-out;
  `

  const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    justify-content: space-around;
    align-content: flex-end;
    align-items: flex-end;
    transition: transform ease;
  `

  const Motto = styled.p`
    font-family: ${theme.font.fontHighlight};
    font-size: ${theme.font.size.highlight};
    text-transform: capitalize;
    color: ${theme.colors.primary};
    margin-bottom: 128px;
    line-height: 145.8%;
    letter-spacing: 0.005em;
    width: 395px;
  `

  const Container = styled.div`
    margin-bottom: 128px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      background-color: ${theme.colors.primary};
      height: 1px;
      width: 36vw;
      bottom: 128px;
      left: 9%;
      transform: skew(45deg, -9deg);
    }
  `

  return (
    <Container>
      <ImageWrapper onMouseMove={onMouseMove}>
        <Motto>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur possimus similique?
        </Motto>
        <Image src={`img/products/intro.jpg`} />
      </ImageWrapper>
    </Container>
  )
}

export default Intro
