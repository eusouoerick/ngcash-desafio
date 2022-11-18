import { styled } from 'src/styles/stitches.config';
import { CardTitle } from 'src/components/styles';

export const Modal = styled('div', {
  position: 'absolute',
  padding: '10px',
  right: '0px',
  top: '0px',
  width: '200px',
  height: '240px',
  background: '$bgInput',
  borderRadius: '5px',
  boxShadow:
    '0px 1px 5px rgba(255,255,255, 0.13), rgb(0 0 0 / 3%) 0px -1px 0px inset, rgb(0 0 0 / 20%) 0px 1px 3px;',
});

export const Title = styled('span', CardTitle, {
  fontSize: '$xSmall',
});

export const BtnClose = styled('button', {
  position: 'absolute',
  right: '0',
  top: '0',
  color: '$textColorGrey',
});

export const Text = styled('div', {
  color: '$textColorBlur',
  marginBottom: '8px',
});

export const DateArea = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});
export const Input = styled('input', {
  padding: '5px 15px',
  borderRadius: '2px',
  border: 'none',
});

export const ClearInput = styled('button', BtnClose, {
  position: 'initial',
  display: 'none',

  variants: {
    isVisible: {
      true: {
        display: 'block',
      },
    },
  },
});

export const BtnsArea = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  margin: '0 auto',
  gap: '10px',
});

export const CashBtn = styled('button', {
  padding: '7px 10px',
  background: '$primary',
  borderRadius: '5px',
  minWidth: '79px',
  color: '$textColor',
  fontWeight: 'bold',
  letterSpacing: '1px',

  variants: {
    cash: {
      in: {
        background: '#0dab0d',
      },
      out: {
        background: 'red',
      },
    },
  },
});
