import axios from 'axios';

export const AxiosApi = () => {
  const token = localStorage.getItem('ACS_TOKEN');
  return axios.create({
    baseURL: String(process.env.NEXT_PUBLIC_API_URL),
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};
