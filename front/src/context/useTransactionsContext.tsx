// prettier-ignore
import { useState, createContext, useEffect, useContext, Dispatch, SetStateAction } from 'react';
import { AxiosApi } from 'src/services';
import type { TransactionType } from 'src/types';

type TypeContext = {
  list: TransactionType[];
  setList: (cb: (s: TransactionType[]) => typeof s) => void;
  loading: boolean;
  query: { date: string; type: string };
  setQuery: (cb: (s: { date: string; type: string }) => typeof s) => void;
  refetch: () => void;
};

export const TransactionsContext = createContext({} as TypeContext);

export const TransactionsProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<TransactionType[]>([]);
  const [query, setQuery] = useState({ date: '', type: '' });

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await AxiosApi().get(
        `users/transactions?date=${query.date}&type=${query.type}`
      );
      setList(data);
      setLoading(false);
    })();
  }, [query]);

  const refetch = () => {
    setQuery(() => ({ date: '', type: '' }));
  };

  return (
    <TransactionsContext.Provider
      value={{ list, query, setList, loading, setQuery, refetch }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactionsContext = () => useContext(TransactionsContext);
