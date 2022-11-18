import { AxiosApi, ThrowToastError } from 'src/services';
import { useRouter } from 'next/router';
// prettier-ignore
import { useState, createContext, useEffect, useContext, Dispatch, SetStateAction } from 'react';
import type { UserReq } from 'src/types';

type TypeUserContext = {
  user: UserReq | undefined;
  userLoading: boolean;
  userFetched: boolean;
  setUser: Dispatch<SetStateAction<UserReq | undefined>>;
};

export const UserContext = createContext({} as TypeUserContext);

export const UserProvider = ({ children }: any) => {
  const router = useRouter();
  const [user, setUser] = useState<UserReq>();
  const [userLoading, setUserLoading] = useState(true);
  const [userFetched, setUserFetched] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await AxiosApi().get('users');
        setUser(data);
      } catch (error) {
        // ThrowToastError(error);
      }
      setUserFetched(true);
      setUserLoading(false);
    })();
  }, [router]);

  return (
    <UserContext.Provider value={{ user, setUser, userLoading, userFetched}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (secret = false) => {
  const router = useRouter();
  const context = useContext(UserContext);

  useEffect(() => {
    if (secret) {
      (async () => {
        if (context.userFetched && !context.user?.id) {
          await router.push('/');
        }
      })();
    }
  }, [context, router, secret]);

  return context;
};
