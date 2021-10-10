import { createContext } from 'react';
import { createTheme } from '@material-ui/core';

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const theme = createTheme({
        palette: {
          primary: {
            main: '#4B6858'
          },
        },
      })
      return (
        <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
      )
}