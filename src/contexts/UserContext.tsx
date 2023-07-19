import { User } from '@/state/types';

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
  user: {
    LoggedIn: false,
  },
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
