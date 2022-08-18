import * as interfaces from './theme.interface';

export const breakpoints: interfaces.Breakpoints = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

export const colors: interfaces.Colors = {
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',
  grey100: 'hsl(0, 0%, 35%)',
  grey200: 'hsl(0, 0%, 74%)',
  grey300: 'hsl(0, 0%, 87%)',
  grey400: 'hsl(0, 0%, 91%)',
  grey500: 'hsl(0, 0%, 97%)',
  primary: '#d2b976',
  secondary: '#65dac7',
  bgColor: '#eeeeee',
};

export const font: interfaces.Font = {
  size: {
    header: '4rem',
    paragraph: '1.7rem',
    button: '1.5rem',
  },
  fontMain: "'Raleway', sans-serif",
  fontHeader: 'Jost',
  fontHighlight: 'Playfair Display',
  fontParagraph: 'Catamaran',
};

export const mq = Object.keys(breakpoints).reduce((acc, breakpoint) => {
  (acc as Record<string, string>)[breakpoint] = `@media (min-width: ${
    (breakpoints as Record<string, string>)[breakpoint]
  }px)`;
  return acc;
}, {});

export const theme = {
  colors,
  mq,
  breakpoints,
  font,
  layout: {
    searchBarHeight: '80px',
    mobileSidesPadding: '30px',
  },
  zIndex: {
    level1: '1000',
    level2: '2000',
    level3: '3000',
    level4: '4000',
    level5: '5000',
    level6: '6000',
    level7: '7000',
    level8: '8000',
    level9: '9000',
    level10: '10000',
  },
};
