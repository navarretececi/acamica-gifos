import './App.css';
import React, { useState, useEffect } from 'react';
import { Nav } from './components/nav/Nav';
import { Result } from './components/result/Result';
import { Header } from './components/header/Header';
import { Loading } from './components/loading/Loading';
import { AppContext } from "./context/ThemeContext";


function App() {

  const { theme } = React.useContext(AppContext);


  const [search, setSearch] = useState(false)
  const [input, setInput] = useState("")
  const [autocomplete, setAutocomplete] = useState ([])
  const [newListaGifs, setNewListaGifs] = useState({})
  const [searchedText, setSearchedText] = useState("")

  const handlerInput =(e)=> setInput(e.target.value);
  
  
  const handlerSearch =()=>{
    setSearchedText(input)
    setSearch(true);
  }

useEffect (()=>{
  if(search){
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=kIliylsUejr8imYFuIhiOJ0qCHqgYDD7&q=${input}&limit=12&offset=0&rating=g&lang=en
    `)
    .then((response)=> response.json())
    .then((data)=> {
      setNewListaGifs(data)
      setSearch(false)
      setInput("")
      setAutocomplete([])
    })
    .catch((error)=>console.log(error))
  }
},[input, search])

useEffect (()=>{
  if(input){
    fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=kIliylsUejr8imYFuIhiOJ0qCHqgYDD7&q=${input}&limit=4&offset=0`)
    .then((response)=> response.json())
    .then((data)=> setAutocomplete(data.data))
    .catch((error)=>console.log(error))
  }
},[input])

  return (
    <div className={`App ${theme} center`}>
      <div className="principal-container">
        <Header />
        <Nav 
          input ={input}
          handlerInput={handlerInput}
          setInput={setInput}
          handlerSearch={handlerSearch}
          autocomplete={autocomplete}
          setAutocomplete={setAutocomplete}
          setSearchedText={setSearchedText}
          setSearch={setSearch}
        />
        {
          search ? <Loading /> :
                                <Result 
                                  newListaGifs={newListaGifs}
                                  searchedText={searchedText}
                                />
        }
      </div>
    </div>
  );
}

export default App;
