import styled from 'styled-components';
import { theme } from '../../../assets/theme/theme';

interface ImageProps {
  rotateX: Number;
  rotateY: Number;
}

export const Image = styled.img`
  width: 50%;
  height: 100%;
  object-fit: contain;
  transform: ${(props: ImageProps) => `perspective(1000px) rotateX(${props.rotateX}deg) rotateY(${props.rotateY}deg)}`};
  transition: transform ease-in-out;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: space-around;
  align-content: flex-end;
  align-items: flex-end;
  transition: transform ease;
`;

export const Motto = styled.p`
  font-family: ${theme.font.fontHighlight};
  font-size: calc(14px + ((36 * (100vw - 720px)) / 2040)); // magic number
  text-transform: capitalize;
  color: ${theme.colors.primary};
  margin-bottom: 128px;
  line-height: 145.8%;
  letter-spacing: 0.005em;
  width: 395px;
`;

export const Container = styled.div`
  margin-bottom: 128px;
  position: relative;
  height: 70vh;

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
`;
