import { styled } from 'src/styles/stitches.config';
import { CardContent } from 'src/components/styles';

export const Container = styled('div', CardContent, {
  width: '35%',
  paddingBottom: '20px',
  '@920': {
    margin: '0 auto',
    width: '550px',
  },
  '@550': {
    width: '100%',
  },
});

export const InputsArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',

  '@920': {
    flexDirection: 'row',
    gap: '50px',
  },
  '@400': {
    gap: '15px',
    flexDirection: 'column',
  },
});

export const Label = styled('label', {
  color: '$textColorBlur',
});

export const Input = styled('input', {
  padding: '10px 15px',
  borderRadius: '5px',
  background: '$bgInput',
  width: '100%',
  border: '1px solid #282828',
  marginTop: '5px',
  color: '$textColor',
});

export const Button = styled('button', {
  padding: '8px 10px',
  background: '$primary',
  color: '$textColor',
  display: 'block',
  width: 'max-content',
  margin: '20px auto 0',
  borderRadius: '5px',
  fontWeight: 'bold',
  letterSpacing: '1px',

  variants: {
    disabled: {
      true: {
        background: '#707070',
      },
    },
  },
});
