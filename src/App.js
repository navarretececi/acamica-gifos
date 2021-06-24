import './App.css';
import { useState, useEffect } from 'react';
import { Nav } from './components/nav/Nav';
import { Result } from './components/result/Result';
import { Header } from './components/header/Header';

function App() {

  const [search, setSearch] = useState(false)
  const [input, setInput] = useState("")
  const [newListaGifs, setNewListaGifs] = useState({})
  const [theme, setTheme] = useState('light');
  
  const handlerInput =(e)=> {setInput(e.target.value)}
  const handlerTheme = () => {
     theme === "light" ? setTheme("dark") : setTheme("light")
  }
  const handlerSearch =()=>{
    setSearch(true);
  }

  console.log(`soy el input ${input}`)
  console.log(`soy el search ${search}`)
  console.log(newListaGifs)

useEffect (()=>{
  if(search){
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=kIliylsUejr8imYFuIhiOJ0qCHqgYDD7&q=${input}&limit=12&offset=0&rating=g&lang=en
    `)
    .then((response)=> response.json())
    .then((data)=> {
      setNewListaGifs(data)
      setSearch(false)
      setInput("")
    })
    .catch((error)=>console.log(error))
  }
},[search])

  /* useEffect (()=>{
     const filterBySearch = (gif) => {return (searchState === [] ? [] : gif)} 

     if(searchState) {
       let filterlistaGifs = listaGifs.filter (gif =>{
          return(
            filterBySearch(gif)
          )
        })
        setNewlistaGifs(filterlistaGifs)
      }
    
  } ,[searchState]) */

  return (
    <div /* className="App center" */ className={`App ${theme} center`}>
      <div className="principal-container">
      <Header 
        theme={theme}
        handlerTheme={handlerTheme}
      />
      <Nav 
        input ={input}
        handlerInput={handlerInput}
        handlerSearch={handlerSearch}
      />
      <Result 
        newListaGifs={newListaGifs}
      />
      </div>
    </div>
  );
}

export default App;
