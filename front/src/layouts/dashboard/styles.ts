import { styled } from 'src/styles/stitches.config';

export const Container = styled('div', {
  margin: '40px auto',
  minHeight: '400px',
  width: '56.25rem',

  '@920': {
    width: '100vw',
    paddingInline: '3px',
  },
});

export const Cards = styled('div', {
  display: 'flex',
  gap: '20px',

  '@920': {
    flexDirection: 'column',
  },
});
