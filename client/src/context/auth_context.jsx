import {
  createContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ authService, children }) => {
  const [user, setUser] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    authService
      .me()
      .then(setUser)
      .then(() => history.push('/home'))
      .catch(console.error);
  }, [authService]);

  const signUp = useCallback(
    async (username, password, name, email, url) => {
      authService
        .signup(username, password, name, email, url)
        .then((user) => setUser(user));
    },
    [authService]
  );

  const logIn = useCallback(async (username, password) => {
    authService //
      .login(username, password)
      .then((user) => {
        setUser(user);
        console.log(`${username} logged in successfully`);
      });
  });

  const logOut = useCallback(async () => {
    authService.logout();
    console.log('Logged out successfully');
    setUser(undefined);
  });

  const context = useMemo(
    () => ({
      user,
      signUp,
      logIn,
      logOut,
    }),
    [user, signUp, logIn, logOut]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
