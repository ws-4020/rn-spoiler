// テーマ切替用
import React, {useState, createContext, useContext} from 'react';
import {useColorScheme} from 'react-native';

const IsDarkContext = createContext({
  isDark: false,
  setIsDark: (val: boolean): void => {
    throw new Error('Please set func');
  },
});

export const useIsDark = () => {
  return useContext(IsDarkContext);
};

export const IsDarkProvider: React.FC = ({children}) => {
  const colorScheme = useColorScheme();
  const initialIsDark = colorScheme?.toString() === 'dark';
  const [isDark, setIsDark] = useState(initialIsDark);

  useState(false);
  return <IsDarkContext.Provider value={{isDark, setIsDark}}>{children}</IsDarkContext.Provider>;
};
