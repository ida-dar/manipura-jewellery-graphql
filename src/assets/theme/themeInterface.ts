export interface Breakpoints {
  [key: string]: string,
  huge: string,
  bigDesktop: string,
  desktop: string,
  bigTablet: string,
  tablet: string,
  bigPhone: string,
  phone: string,
}

export interface Colors {
  white: string,
  black: string,
  grey100: string,
  grey200: string,
  grey300: string,
  grey400: string,
  grey500: string,
  primary: string,
}

export interface Font {
  size: Size,
}

export interface Size {
  header: string,
  paragraph: string,
  button: string,
}
