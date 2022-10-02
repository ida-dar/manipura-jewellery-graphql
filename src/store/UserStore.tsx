import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import { User } from 'firebase/auth';
import { authStateListener, createUserDocFromAuth } from 'src/utils/firebase/firebase';

interface Props {
  children: React.ReactNode;
}

const initialState = {
  currUser: null as User | null,
  setCurrUser: (() => null) as React.Dispatch<React.SetStateAction<User | null>>,
};

export const UserContext = createContext(initialState);

const UserStore = ({ children }: Props) => {
  const [currUser, setCurrUser] = useState<User | null>(null);
  const value = { currUser, setCurrUser };

  useEffect(() => {
    const observer = authStateListener((user: User | null) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrUser(user);
    });
    return observer;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserStore;
