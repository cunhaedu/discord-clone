import { theme, DefaultTheme } from '@chakra-ui/core';

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: {
    ...theme.fontWeights,
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700
  },
  fontSizes: {
    ...theme.fontSizes,
    "2xl": "40px"
  },
  sizes: {
    ...theme.sizes,
    full: '100%',
    "2xl": "32px",
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
    full: '50%'
  },
  colors: {
    ...theme.colors,
    purple: {
      ...theme.colors.purple,
      100: '#99AAB5',
      500: '#8257E5',
      600: '#6633CC'
    },
    blue: {
      ...theme.colors.blue,
      300: '#5d80d6',
      400: '#6e86d6',
      500: '#7289DA'
    },
    red: {
      ...theme.colors.red,
      300: '#f84a4b'
    },
    gray: {
      ...theme.colors.gray,
      100: '#393d42',
      200: '#2f3136',
      300: 'rgb(32,34,37)',
      400: '#292b2f',
      500: '#36393f',
      600: 'rgb(64,68,75)',
      700: '#74777a',
      800: '#828386',
      900: '#8a8c90'
    },
    orange: {
      ...theme.colors.orange,
      100: '#413f3f',
      300: '#f9a839'
    }
  }
}

export default customTheme;


// --primary: #36393f;
// --secondary: #2f3136;
// --tertiary: rgb(32,34,37);
// --quaternary: #292b2f;
// --quinary: #393d42;
// --senary: #828386;

// --white: #fff;
// --gray: #8a8c90;
// --chat-input: rgb(64,68,75);
// --symbol: #74777a;

// --notification: #f84a4b;
// --discord: #6e86d6;
// --mention-detail: #f9a839;
// --mention-message: #413f3f;

// --link: #5d80d6;
