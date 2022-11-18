import { styled } from 'src/styles/stitches.config';

export const Container = styled('form', {
  background: '$bgContent',
  maxHeight: 'max-content',
  width: '340px',
  borderRadius: '5px',
  padding: '20px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  '@340': {
    width: '100%',
    padding: '10px',
  },
});

export const Title = styled('h2', {
  color: '$textColor',
  display: 'block',
  width: 'max-content',
  marginInline: 'auto',
});

export const InputsArea = styled('div', {
  marginTop: '23px',
});

export const InputName = styled('label', {
  fontSize: '14px',
  color: '$textColorBlur',
  display: 'block',
  marginBottom: '5px',
});

export const Input = styled('input', {
  minWidth: '100%',
  maxWidth: '100%',
  background: '$bgInput',
  border: 'solid 1px $inputBorder',
  borderRadius: '5px',
  padding: '9px 10px',
  fontSize: '$xSmall',
  marginBottom: '13px',
  color: '$textColor',
});

export const BtnSubmit = styled('button', {
  display: 'block',
  margin: '20px auto 10px',
  border: 'none',
  background: '$primary',
  color: '#fff',
  width: '200px',
  padding: '8px',
  fontSize: '$xSmall',
  borderRadius: '5px',
  cursor: 'pointer',

  variants: {
    disabled: {
      true: {
        background: '#707070',
      },
    },
  },
});

export const BtnTogglePage = styled('button', {
  display: 'block',
  width: 'max-content',
  marginInline: 'auto',
  color: '$textColorBlur',
  fontSize: '$xSmall',
});
