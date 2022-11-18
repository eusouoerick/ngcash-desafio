import { useEffect, useRef } from 'react';
import { useTransactionsContext } from 'src/context';

const useFilterModal = (closeModal: any) => {
  const modalRef = useRef(null);
  const { setQuery, query } = useTransactionsContext();

  const handleClickBtnCash = (e: any) => {
    setQuery((state) => ({
      ...state,
      type: e.target.name,
    }));
  };

  const handleClearInput = () => {
    setQuery((state) => ({
      ...state,
      date: '',
    }));
  };

  useEffect(() => {
    const checkClick = (e: any) => {
      if (modalRef.current) {
        //@ts-ignore - type never
        if (!modalRef.current.contains(e.target)) {
          closeModal(false);
        }
      }
    };
    document.addEventListener('mousedown', checkClick);
    return () => {
      document.removeEventListener('mousedown', checkClick);
    };
  }, [closeModal]);

  return {
    modalRef,
    query,
    setQuery,
    handleClearInput,
    handleClickBtnCash,
  };
};

export default useFilterModal;
