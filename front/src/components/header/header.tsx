import { useRouter } from 'next/router';
import * as S from './styles';

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('ACS_TOKEN');
    router.push('/');
  };

  return (
    <S.Container>
      <S.Content>
        <S.BtnLogout onClick={handleLogout}>
          <span className='material-icons'>logout</span>
        </S.BtnLogout>
      </S.Content>
    </S.Container>
  );
};

export default Header;
