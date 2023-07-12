import { FIREBASE_AUTH, onAuthStateChanged } from '@configs/firebase';
import { User } from 'firebase/auth';
import { createContext, useContext, useState } from 'react';
import { Alert } from 'react-native';

import { createAccountRequest, loginRequest } from './authService';

interface AuthContext {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | undefined;
  onLogin: (email: string, password: string) => void;
  onRegister: (
    email: string,
    password: string,
    repeatedPassword: string,
  ) => void;
  onLogout: () => void;
  user: User | null;
}

const AuthenticationContext = createContext<AuthContext | null>(null);

export const AuthenticationProvider = (props: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>();
  const auth = FIREBASE_AUTH;

  onAuthStateChanged(auth, authUser => {
    if (authUser) {
      setUser(authUser);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email: string, password: string) => {
    if (email.length === 0 || password.length === 0) {
      setError('Please fill respective fields');
      return;
    }

    setIsLoading(true);
    loginRequest(auth, email, password)
      .then(res => {
        setIsLoading(false);
        setUser(res.user);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err.message);
        Alert.alert('Login In Failed: ', err.message);
      });
  };

  const onRegister = (
    email: string,
    password: string,
    repeatedPassword: string,
  ) => {
    if (password !== repeatedPassword) {
      setError('Error: Passwords do not match');
      Alert.alert('Error: Passwords do not match');
      return;
    }

    setIsLoading(true);
    createAccountRequest(auth, email, password)
      .then(res => {
        setUser(res.user);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        Alert.alert('Sign Up Failed: ', err.message);
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
      console.log('Signed Out');
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};

const useAuthenticationContext = () => {
  const context = useContext(AuthenticationContext);

  if (context === null) {
    throw new Error('Error in AuthenticationContext');
  }

  return context;
};

export default useAuthenticationContext;
