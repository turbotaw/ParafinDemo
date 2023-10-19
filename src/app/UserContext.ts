import React from 'react';

interface UserContextProps {
  userId: string | null;
  setUserId: React.Dispatch<React.SetStateAction<string | null>>;
}

const UserContext = React.createContext<UserContextProps | undefined>(undefined);

export default UserContext;