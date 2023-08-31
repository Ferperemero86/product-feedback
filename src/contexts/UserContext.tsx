import { User } from '@/state/types';

import { data } from '../../data';

import {
  createContext,
  Dispatch,
  useState,
  SetStateAction,
  ReactNode,
} from 'react';

export interface UserContextProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const defaultState = {
  user: data.currentUser,
  setUser: (user: User) => {},
};

export const UserContext = createContext(defaultState);

type UserProviderProps = {
  children: ReactNode;
};

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>(defaultState.user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
