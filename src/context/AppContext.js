import { useState } from "react";
import React from "react";

export const AppContext = React.createContext();

export const AppProvider =({ children })=> {
  
  const [state, setState] = useState("");

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}