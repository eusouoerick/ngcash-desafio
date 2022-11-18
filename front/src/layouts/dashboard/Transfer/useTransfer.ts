import { useState } from 'react';
import toast from 'react-hot-toast';
import { useTransactionsContext, useUserContext } from 'src/context';
import { AxiosApi, ThrowToastError } from 'src/services';

const useTransfer = () => {
  const { setUser } = useUserContext(true);
  const [loading, setLoading] = useState(false);
  const { refetch } = useTransactionsContext();
  const [form, setForm] = useState({
    username: '',
    amount: '',
  });

  const changeInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const money = String(form.amount);
    if (!money || !form.username) return;
    let suf = '';
    if (!money.match(/(\,|\.)/g)) {
      suf = '00';
    }
    const value = +(money.replace(/(\,|\.)/, '') + suf);
    try {
      await AxiosApi().post(`transactions/${form.username}`, { value });
      setForm({ username: '', amount: '' });
      // @ts-ignore
      setUser((state) => {
        const newState = { ...state };
        newState.account!.balance -= value;
        return newState;
      });
      refetch();
      toast.success('Success');
    } catch (error) {
      ThrowToastError(error);
    }
    setLoading(false);
  };

  return {
    form,
    disabled: !form.amount || !form.username || loading,
    changeInput,
    handleSubmit,
  };
};

export default useTransfer;
