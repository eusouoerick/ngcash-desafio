import { styled } from 'src/styles/stitches.config';

export const CardContent = styled('div', {
  background: '$bgContent',
  borderRadius: '6px',
  padding: '35px 20px',
  boxSizing: 'border-box',

  '@400': {
    paddingInline: '10px',
  },
});

export const CardTitle = styled('span', {
  fontSize: '$small',
  fontWeight: 'bold',
  color: '$textColor',
  letterSpacing: '1px',
  display: 'block',
  marginBottom: '20px',
});
