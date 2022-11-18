import { styled } from 'src/styles/stitches.config';
import { CardContent, CardTitle } from 'src/components/styles';

export const Container = styled('div', CardContent, {
  marginTop: '20px',

  '@920': {
    marginInline: 'auto',
    width: '720px',
  },
  '@720': {
    width: '100%',
  },
});

export const Header = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',

  alignItems: 'center',
  marginBottom: '30px',
});

export const FilterText = styled('span', {
  fontSize: '$xSmall',
  color: '$textColor',
  letterSpacing: '1px',
  display: 'flex',
  alignItems: 'center',
});

export const TR = styled('tr', {
  '&:hover': {
    background: '$bgInput',
  },
});

export const TH = styled('th', {
  borderTop: 'solid 1px #2e2e2e',
  borderBottom: 'solid 1px #2e2e2e',
  color: '$textColorBlur',
  padding: '7px',
  fontSize: '$xSmall',
  fontWeight: '400',
  width: '200px',
  maxWidth: '200px',
  overflow: 'hidden',

  '@720': {
    fontSize: '14px',
  },
  '@550': {
    fontSize: '12px',
  },
});

export const TD = styled('td', TH, {
  textAlign: 'center',
  padding: '15px 2px',
  color: '$textColor',

  variants: {
    cash: {
      in: {
        color: '#1dd31d',
      },
      out: {
        color: 'red',
      },
    },
  },
});
