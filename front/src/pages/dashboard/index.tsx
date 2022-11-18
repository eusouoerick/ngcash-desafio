import { useUserContext, TransactionsProvider } from 'src/context';
import Dashboard from 'src/layouts/dashboard';
import Loading from 'src/components/Loading';

const DashboardPage = () => {
  const { userLoading, user } = useUserContext(true);

  if (userLoading || !user?.id) return <Loading />;
  return (
    <TransactionsProvider>
      <Dashboard />
    </TransactionsProvider>
  );
};

export default DashboardPage;
