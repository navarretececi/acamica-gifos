import './App.css';
import React, { useEffect } from 'react';
import { Nav } from './components/nav/Nav';
import { Result } from './components/result/Result';
import { Header } from './components/header/Header';
import { Loading } from './components/loading/Loading';
import { ThemeContext } from "./context/ThemeContext";
import { AppContext } from "./context/AppContext";

const KEY = process.env.REACT_APP_GIFOS_KEY

function App() {
  const { theme } = React.useContext(ThemeContext);
  const { input, setInput, setAutocomplete, search, setSearch, setNewListaGifs } = React.useContext(AppContext);

useEffect (()=>{
  if(search){
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${input}&limit=12&offset=0&rating=g&lang=en
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
},[search])

useEffect (()=>{
  if(input){
    fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=${KEY}&q=${input}&limit=4&offset=0`)
    .then((response)=> response.json())
    .then((data)=> setAutocomplete(data.data))
    .catch((error)=>console.log(error))
  }
},[input, setAutocomplete])

  return (
    <div className={`App ${theme} center`}>
      <div className="principal-container">
        <Header />
        <Nav />
        {
          search ? <Loading /> : <Result />
        }
      </div>
    </div>
  );
}

export default App;
