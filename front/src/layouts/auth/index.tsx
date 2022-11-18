import * as S from './styles';
import useAuth from './useAuth';

const Auth = () => {
  const { form, currentPage, loading,togglePage, handleChangeInput, handleSubmit } = useAuth();

  return (
    <S.Container onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
      <div>
        <S.Title>Sign {!currentPage ? 'in' : 'up'}</S.Title>
      </div>

      <div style={{ marginTop: 30 }}>
        <S.InputsArea>
          <div>
            <S.InputName htmlFor='name'>Name</S.InputName>
            <S.Input
              type='text'
              name='username'
              id='username'
              value={form.username}
              onChange={handleChangeInput}
              autoComplete='on'
            />
          </div>

          <div style={{ position: 'relative' }}>
            <S.InputName htmlFor='password'>Password</S.InputName>
            <S.Input
              type='password'
              name='password'
              id='password'
              value={form.password}
              onChange={handleChangeInput}
              autoComplete='on'
            />
          </div>
        </S.InputsArea>
      </div>

      <div>
        <S.BtnSubmit type='submit' disabled={loading}>
          Submit
        </S.BtnSubmit>
        <S.BtnTogglePage type='button' onClick={togglePage}>
          Sign {currentPage ? 'in' : 'up'}
        </S.BtnTogglePage>
      </div>
    </S.Container>
  );
};

export default Auth;
