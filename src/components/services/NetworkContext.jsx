import React, { createContext, useState } from 'react';

export const NetworkContext = createContext();

export const NetworkProvider = ({ children }) => {
  const [selectedNetwork, setSelectedNetwork] = useState('');

  return (
    <NetworkContext.Provider value={{ selectedNetwork, setSelectedNetwork }}>
      {children}
    </NetworkContext.Provider>
  );
};
