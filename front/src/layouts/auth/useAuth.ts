import { useState } from 'react';
import { useRouter } from 'next/router';
import { AxiosApi, ThrowToastError } from 'src/services';
import toast from 'react-hot-toast';
import { useUserContext } from 'src/context';

const useAuth = () => {
  const router = useRouter();
  const { setUser } = useUserContext();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<boolean>(false); // false = login; true = signup
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChangeInput = (e: any) => {
    const name = e.target.name;
    let value = e.target.value;
    setForm((pvState) => ({ ...pvState, [name]: value }));
  };

  const togglePage = () => {
    setForm({ username: '', password: '' });
    setCurrentPage((state) => !state);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const route = currentPage ? 'signup' : 'signin';
    try {
      const { data } = await AxiosApi().post(`auth/${route}`, form);
      setUser(data.user);
      localStorage.setItem('ACS_TOKEN', data.token);
      setLoading(false);
      toast.success('Success');
      return router.push('/dashboard');
    } catch (error) {
      console.error(error);
      setLoading(false);
      if (!currentPage) {
        toast.error('Invalid credentials');
      } else {
        ThrowToastError(error);
      }
    }
  };

  return {
    form,
    currentPage,
    loading,
    handleChangeInput,
    togglePage,
    handleSubmit,
  };
};

export default useAuth;
