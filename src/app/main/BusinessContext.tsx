import React, { createContext, useState, ReactNode } from 'react';

interface BusinessContextProps {
  businessId: string | null;
  setBusinessId: React.Dispatch<React.SetStateAction<string | null>>;
}

const BusinessContext = createContext<BusinessContextProps | undefined>(undefined);

interface BusinessProviderProps {
  children: ReactNode;
}

const BusinessProvider: React.FC<BusinessProviderProps> = ({ children }) => {
  const [businessId, setBusinessId] = useState<string | null>(null);

  return (
    <BusinessContext.Provider value={{ businessId, setBusinessId }}>
      {children}
    </BusinessContext.Provider>
  );
};

export { BusinessProvider, BusinessContext };