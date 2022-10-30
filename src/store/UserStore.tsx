import { useEffect, createContext, useReducer, Reducer } from 'react';

import { authStateListener, createUserDocFromAuth } from 'src/utils/firebase/firebase';
import { User } from 'firebase/auth';

import { userReducer } from 'src/redux';
import { UserState } from 'src/utils/redux/statusActions';
import { endRequest, errorRequest, loginUser, startRequest } from 'src/redux/userRedux';

import { ContextProps } from 'src/interfaces';

const initialState: UserState = {
  currUser: null as User | null,
  request: {
    pending: false as boolean,
    error: null as Error | null,
    success: null,
  },
};

export const UserContext = createContext({
  currUser: null as User | null,
  setCurrUser: (user: User | null) => {},
  request: {
    pending: false as boolean,
    error: null as Error | null,
    success: null,
  },
});

const UserStore = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer<Reducer<UserState, any>>(userReducer, initialState);
  const { currUser, request } = state;

  const setCurrUser = (user: User | null): void => {
    dispatch(startRequest({ name: 'GET_USER' }));
    try {
      dispatch(loginUser(user));
    } catch (e: any | Error) {
      dispatch(errorRequest(e.message));
    }
    dispatch(endRequest({ name: 'GET_USER' }));
  };

  useEffect(() => {
    const observer = authStateListener((user: User | null) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrUser(user);
    });
    return observer;
  }, []);

  const value = { currUser, request, setCurrUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserStore;
