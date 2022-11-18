import { useMemo, useState } from 'react';
import { useUserContext } from 'src/context';
import { formatMoney } from 'src/services';

import * as S from './styles';
import { CardTitle } from 'src/components/styles';
import Image from 'next/image';

const Balance = () => {
  const { user } = useUserContext(true);
  const [toggleMoney, setToggleMoney] = useState(true);
  const takeBalance = useMemo(() => {
    return formatMoney(user?.account.balance || 0);
  }, [user?.account.balance]);

  return (
    <S.Container>
      <S.UserArea>
        <S.UserImage>
          <Image
            src='/user.png'
            width={50}
            height={50}
            alt='user image'
            objectPosition='bottom'
            objectFit='cover'
          />
        </S.UserImage>
        <div>
          <S.UserName>{user?.username}</S.UserName>
          <S.UserId>id: {user?.id}</S.UserId>
        </div>
      </S.UserArea>

      <CardTitle>My Balance</CardTitle>
      <S.MoneyArea>
        <div>
          <span className='dolar'>$</span>
          <S.Money>{toggleMoney ? takeBalance : '•••••••'}</S.Money>
        </div>
        <S.ToggleMoney onClick={() => setToggleMoney((state) => !state)}>
          <span className='material-icons'>
            {toggleMoney ? 'visibility_off' : 'visibility'}
          </span>
        </S.ToggleMoney>
      </S.MoneyArea>
    </S.Container>
  );
};

export default Balance;
