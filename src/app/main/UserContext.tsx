import React, { createContext, useState, FC, ReactNode } from 'react';

interface UserContextProps {
  userId: string | null;
  setUserId: React.Dispatch<React.SetStateAction<string | null>>;
}

interface UserProviderProps {
  children: ReactNode;  // Define a prop to accept children
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: FC<UserProviderProps> = ({ children }) => {  // Update the component to accept UserProviderProps
  const [userId, setUserId] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};