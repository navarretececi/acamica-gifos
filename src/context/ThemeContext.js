import { useState } from "react";
import React from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider =({ children })=> {
  
    const [theme, setTheme] = useState('light');

    const handlerTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
     }

  return (
    <ThemeContext.Provider value={{ theme, handlerTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}