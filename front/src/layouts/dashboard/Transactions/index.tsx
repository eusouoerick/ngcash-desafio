import { useState } from 'react';
import { CardTitle } from 'src/components/styles';
import { format } from 'date-fns';
import { formatMoney } from 'src/services';
import { useTransactionsContext, useUserContext } from 'src/context';

import * as S from './styles';
import FilterModal from './FilterModal';

const Transactions = () => {
  const { user } = useUserContext(true);
  const { list } = useTransactionsContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!list.length) return null;
  return (
    <S.Container>
      <S.Header>
        {isModalOpen && <FilterModal closeModal={setIsModalOpen} />}
        <CardTitle style={{ marginBottom: 0 }}>Transactions</CardTitle>
        <button onClick={() => setIsModalOpen(true)}>
          <S.FilterText>
            Filter
            <span className='material-icons' translate='no'>
              keyboard_arrow_down
            </span>
          </S.FilterText>
        </button>
      </S.Header>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <S.TH>Date</S.TH>
            <S.TH>Type</S.TH>
            <S.TH>Amount</S.TH>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            const type = item.fromId == user?.account.id ? 'out' : 'in';
            return (
              <S.TR key={item.id}>
                <S.TD>{format(new Date(item.createdAt), 'MMM dd, yyyy')}</S.TD>
                <S.TD>Cash-{type}</S.TD>
                <S.TD cash={type}>${formatMoney(item.value)}</S.TD>
              </S.TR>
            );
          })}
        </tbody>
      </table>
    </S.Container>
  );
};

export default Transactions;
