import { styled } from 'src/styles/stitches.config';
import { CardContent } from 'src/components/styles';

export const Container = styled('div', CardContent, {
  width: '75%',
  '@920': {
    margin: '0 auto',
    width: '550px',
  },
  '@550': {
    width: '100%',
  },
});

export const UserArea = styled('div', {
  marginBottom: '40px',
  display: 'flex',
  gap: '10px',
});

export const UserName = styled('span', {
  color: '$textColor',
  fontSize: '$medium',
  display: 'block',
  marginBottom: '3px',
});

export const UserImage = styled('div', {
  height: '50px',
  width: '50px',
  overflow: 'hidden',
  borderRadius: '50%',
});

export const UserId = styled('span', {
  color: '$textColorBlur',
  fontSize: '14px',
  fontStyle: 'italic',
  display: 'block',

  '@550': {
    display: 'none',
  },
});

export const MoneyArea = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  padding: '7px 20px',
  background: '$bgInput',
  borderRadius: '5px',
  '.dolar': {
    color: '$textColorBlur',
    marginRight: '10px',
    fontSize: '16px',
  },
});

export const Money = styled('span', {
  fontFamily: 'Rubik_600Regular',
  fontSize: '40px',
  color: '$textColor',
  letterSpacing: '2px',

  '@720': {
    fontSize: '32px',
  },
});

export const ToggleMoney = styled('button', {
  color: '$textColorBlur',
});
