import * as S from './styles';
import { CardTitle } from 'src/components/styles';
import useTransfer from './useTransfer';

const Transfer = () => {
  const { form, disabled, changeInput, handleSubmit } = useTransfer();

  return (
    <S.Container>
      <CardTitle>Transfer</CardTitle>

      <form onSubmit={handleSubmit}>
        <S.InputsArea>
          <div>
            <S.Label htmlFor='username'>Send to user:</S.Label>
            <S.Input
              type='text'
              name='username'
              id='username'
              autoComplete='off'
              placeholder='username'
              value={form.username}
              onChange={changeInput}
            />
          </div>

          <div>
            <S.Label htmlFor='amount'>Amount</S.Label>
            <S.Input
              type='number'
              name='amount'
              id='amount'
              autoComplete='off'
              placeholder='200,80'
              value={form.amount}
              onChange={changeInput}
            />
          </div>
        </S.InputsArea>

        <S.Button type='submit' disabled={disabled}>
          Send Money
        </S.Button>
      </form>
    </S.Container>
  );
};

export default Transfer;
