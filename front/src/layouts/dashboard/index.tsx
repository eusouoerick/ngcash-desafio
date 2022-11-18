import * as S from './styles';
import Header from 'src/components/header/header';
import Balance from './Balance';
import Transfer from './Transfer';
import TransferHistory from './Transactions';

const Dashboard = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Cards>
          <Balance />
          <Transfer />
        </S.Cards>
        <TransferHistory />
      </S.Container>
    </>
  );
};

export default Dashboard;
