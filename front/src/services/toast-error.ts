import toast from 'react-hot-toast';

export const ThrowToastError = (error: any) => {
  console.error(error.message);
  let message: string;
  if (Array.isArray(error.response.data.message)) {
    message = error.response.data.message[0];
  } else {
    message = error.response.data && error.response.data.message;
  }
  toast.error(message || error.message);
  return message || error.message;
};
