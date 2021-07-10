import { useState } from "react";
import React from "react";

export const AppContext = React.createContext();

export const ThemeProvider =({ children })=> {
  
    const [theme, setTheme] = useState('light');

    const handlerTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
     }

  return (
    <AppContext.Provider value={{ theme, handlerTheme }}>
      {children}
    </AppContext.Provider>
  );
}