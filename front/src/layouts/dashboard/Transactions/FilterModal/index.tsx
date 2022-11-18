import { useEffect, useRef } from 'react';
import { useTransactionsContext } from 'src/context';
import * as S from './styles';
import useFilterModal from './useFilterModal';

type ModalTypes = {
  closeModal: (s: any) => void;
};

const FilterModal = ({ closeModal }: ModalTypes) => {
  const { modalRef, query, handleClearInput, handleClickBtnCash, setQuery } =
    useFilterModal(closeModal);

  return (
    <S.Modal ref={modalRef}>
      <div style={{ position: 'relative' }}>
        <S.Title>Filters</S.Title>
        <S.BtnClose onClick={() => closeModal(false)}>
          <span className='material-icons'>close</span>
        </S.BtnClose>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <S.Text>Date</S.Text>
        <S.DateArea>
          <S.Input
            type='date'
            value={query.date}
            onChange={(e) =>
              setQuery((state: any) => ({ ...state, date: e.target.value }))
            }
          />
          <S.ClearInput isVisible={!!query.date} onClick={handleClearInput}>
            <span className='material-icons'>close</span>
          </S.ClearInput>
        </S.DateArea>
      </div>
      <div>
        <S.Text>Type</S.Text>
        <S.BtnsArea>
          <S.CashBtn name='' onClick={handleClickBtnCash}>
            All
          </S.CashBtn>
          <S.CashBtn name='cash-in' cash='in' onClick={handleClickBtnCash}>
            Cash-in
          </S.CashBtn>
          <S.CashBtn name='cash-out' cash='out' onClick={handleClickBtnCash}>
            Cash-out
          </S.CashBtn>
        </S.BtnsArea>
      </div>
    </S.Modal>
  );
};

export default FilterModal;
