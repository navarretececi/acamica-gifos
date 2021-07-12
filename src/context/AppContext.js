import { useState } from "react";
import React from "react";

export const AppContext = React.createContext();

export const AppProvider =({ children })=> {
  
  const [input, setInput] = useState("")
  const [autocomplete, setAutocomplete] = useState ([])
  const [search, setSearch] = useState(false)
  const [searchedText, setSearchedText] = useState("")
  const [newListaGifs, setNewListaGifs] = useState({})

  const handlerInput =(e)=> setInput(e.target.value);
  const handlerSearch =()=>{
    setSearchedText(input)
    setSearch(true);
  }

  return (
    <AppContext.Provider value={{ input, setInput, handlerInput, autocomplete, setAutocomplete, search, setSearch, handlerSearch,searchedText, setSearchedText, newListaGifs, setNewListaGifs }}>
      {children}
    </AppContext.Provider>
  );
}