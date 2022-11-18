import { createStitches } from '@stitches/react';

export const { styled, globalCss, getCssText, keyframes } = createStitches({
  theme: {
    colors: {
      primary: '#632ff5',
      primaryDark: '#3308aa',
      textColor: '#fff',
      textColorBlur: '#b5b5b5',
      textColorGrey: '#7C7C7C',
      bgContent: '#212329',
      background: '#050505',
      bgInput: '#131519',
    },
    fontSizes: {
      big: '24px',
      medium: '22px',
      small: '18px',
      xSmall: '16px',
    },
  },
  media: {
    340: '(max-width: 340px)',
    400: '(max-width: 400px)',
    550: '(max-width: 550px)',
    720: '(max-width: 720px)',
    800: '(max-width: 800px)',
    920: '(max-width: 920px)',
    1000: '(max-width: 1000px)',
    1280: '(min-width: 1280px)',
  },
});

export const GlobalStyles = globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap')",
    'url("https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap")',
  ],

  '*': {
    margin: 0,
    padding: 0,
    fontFamily: 'Inter',
    boxSizing: 'border-box',
    outlineColor: 'grey',
    scrollBehavior: 'smooth',
  },

  button: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },

  'html, body': {
    background: '$background',
  },
});
