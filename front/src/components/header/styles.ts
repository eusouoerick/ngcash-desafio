import { styled } from 'src/styles/stitches.config';

export const Container = styled('div', {
  height: '60px',
  background: '$bgContent',
});

export const Content = styled('div', {
  maxWidth: '62.5rem',
  padding: '0 20px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  marginInline: 'auto',
});

export const BtnLogout = styled('button', {
  color: '$textColorBlur',
  '&:hover': {
    color: 'red',
  },
});
