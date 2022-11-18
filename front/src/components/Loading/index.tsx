import { keyframes, styled } from 'src/styles/stitches.config';

export const Rotation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const Loading = styled('span', {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40px',
  height: '40px',
  borderRadius: '20px',
  display: 'block',
  borderTop: '3px solid $background',
  borderLeft: '3px solid $primary',
  boxSizing: 'border-box',
  animation: `${Rotation} 1s cubic-bezier(0.48, 0.67, 0.99, 0.24) infinite`,
});

export default Loading;
